import {
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  Entity,
  ManyToOne,
} from "typeorm";
import { Category } from "./category.model";

class Base extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  category: number;

  @Column({ type: "float", nullable: true })
  value: number;

  @Column({ nullable: true })
  code: string;
}

class ExtendedBase extends Base {}

class ModelExtension extends ExtendedBase {
  static async addData(value: number, code: string, category: number) {
    const model = new this();
    model.value = value;
    model.code = code;
    model.category = category;
    await model.save();
    return model;
  }

  static async getData(code: string) {
    return await this.find({
      where: { code },
    });
  }

  static async getStatisticsByCategory() {
    return await this.query(
      "select category, sum(value) as value from data group by category"
    );
  }
}

@Entity()
export class Data extends ModelExtension {}
