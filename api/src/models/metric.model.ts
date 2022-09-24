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

  @Column()
  label: string;

  @Column()
  code: string;

  @Column({ type: "enum", enum: ["MANUAL", "REAL_TIME"] })
  entryMethod: string;

  @ManyToOne(() => Category)
  category: Category;
}

class ExtendedBase extends Base {}

class ModelExtension extends ExtendedBase {
  static async createMetric(
    label: string,
    code: string,
    entryMethod: string,
    categoryId: number
  ) {
    const category = await Category.getCategory(categoryId);
    if (!category) {
      throw new Error("Category not found");
    }
    const model = new this();
    model.label = label;
    model.code = code;
    model.entryMethod = entryMethod;
    model.category = category;
    await model.save();
    return model;
  }

  static async getMetrics(category: number) {
    return await this.find({
      where: { category: { id: category } },
    });
  }

  static async getMetric(id: number) {
    return await this.findOne({ where: { id } });
  }
}

@Entity()
export class Metric extends ModelExtension {}
