import { Router } from "express";
import * as controllers from "./category.controllers";

export default Router()
  .post("/", controllers.create)
  .get("/", controllers.getCategories)
  .get("/:id", controllers.getCategory);
