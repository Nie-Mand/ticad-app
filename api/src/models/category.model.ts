import { Column, PrimaryGeneratedColumn, BaseEntity, Entity } from "typeorm";
import { Metric } from "./metric.model";

class Base extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  description: string;

  @Column({ type: "float" })
  coef: number;
}

class ExtendedBase extends Base {}

class ModelExtension extends ExtendedBase {
  static async createCategory(
    label: string,
    description: string,
    coef: number
  ) {
    const model = new this();
    model.label = label;
    model.description = description;
    model.coef = coef;
    await model.save();
    return model;
  }

  static async getCategories() {
    return await this.find();
  }

  static async getCategory(id: number) {
    return await this.findOne({ where: { id } });
  }
}

@Entity()
export class Category extends ModelExtension {}
