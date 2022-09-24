import { Router } from "express";
import * as controllers from "./metric.controllers";
import { authenticate } from "../../core/auth";
export default Router()
  .post("/", controllers.create)
  .get("/by-category/:category", controllers.getMetrics)
  .get("/car/bon", authenticate(), controllers.carbon)
  .get("/:id", controllers.getMetric)
  .post("/data", controllers.addData)
  .get("/data/:code", controllers.getData);
