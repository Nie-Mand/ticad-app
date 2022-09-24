import { Column, PrimaryGeneratedColumn, BaseEntity, Entity } from "typeorm";
import { Role } from "../@types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../core/env";
import * as errors from "../errors";

class Base extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  nickname: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({ default: "Hello World" })
  bio: string;

  @Column({ default: false })
  notified: boolean;

  @Column()
  avatar: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    enum: Role,
    default: Role.USER,
  })
  role: string;
}

class ExtendedBase extends Base {
  async hash() {
    const _hash = await bcrypt.hash(this.password, 10);
    this.password = _hash;
  }

  async verify(password: string) {
    try {
      const valid = await bcrypt.compare(password, this.password);
      return valid;
    } catch {
      return null;
    }
  }

  setAvatar() {
    const avatar = `https://avatars.dicebear.com/api/bottts/${this.nickname}.svg`;
    this.avatar = avatar;
  }

  async token() {
    const payload = {
      id: this.id,
      role: this.role,
      email: this.email,
    };
    const token = await jwt.sign(payload, jwtSecret, {
      expiresIn: "100h",
    });
    return token;
  }
}

class AuthenticationExtension extends ExtendedBase {
  static async login(email: string, password: string) {
    const user = await this.findOne({ where: { email } });
    if (!user) throw new errors.UserNotFoundError();
    const validPassword = await user.verify(password);
    if (!validPassword) throw new errors.IncorrectPasswordError();
    const token = await user.token();
    return token;
  }

  static async register(input: RegisterInput) {
    let tmp = await this.findOne({ where: { email: input.email } });
    if (tmp) throw new errors.EmailAlreadyTakenError();
    tmp = await this.findOne({
      where: { nickname: input.nickname },
    });
    if (tmp) throw new errors.NicknameAlreadyTakenError();

    const user = new this();
    user.nickname = input.nickname;
    user.email = input.email;
    user.password = input.password;
    user.setAvatar();
    await user.hash();
    await user.save();
  }
}

class UserDetailsExtension extends AuthenticationExtension {
  static async getMyData(id: number) {
    const me = await this.findOne({
      where: { id },
      select: ["id", "nickname", "email", "bio"],
    });
    if (!me) throw new errors.UserNotFoundError();
    return me;
  }
}

@Entity()
export class User extends UserDetailsExtension {}

// Interfaces
interface RegisterInput {
  nickname: string;
  email: string;
  password: string;
}
