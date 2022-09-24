import { Router } from "express";
import users from "./users";
import authentify from "./authentify";
import category from "./category";
import metric from "./metric";

export default Router()
  .use("/users", users)
  .use("/authentify", authentify)
  .use("/category", category)
  .use("/metric", metric);
