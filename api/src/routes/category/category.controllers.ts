import { Category } from "../../models";
import { Catch } from "../../core";

export const create = Catch(async (rq) => {
  const data = rq.body;
  const category = await Category.createCategory(
    data.label,
    data.description,
    data.coef
  );
  return category;
});

export const getCategories = Catch(async (rq) => {
  const categories = await Category.getCategories();
  return { categories };
});

export const getCategory = Catch(async (rq, rs) => {
  const id = rq.params.id;
  const category = await Category.getCategory(Number(id));
  return { category };
});
