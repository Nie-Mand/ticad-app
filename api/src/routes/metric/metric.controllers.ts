import { Metric, Data, Category, User } from "../../models";
import { Catch } from "../../core";
import axios from "axios";
import { CourierClient } from "@trycourier/courier";

export const create = Catch(async (rq) => {
  const data = rq.body;
  const metric = await Metric.createMetric(
    data.label,
    data.code,
    data.method,
    data.categoryId
  );

  if (data.method === "REAL_TIME")
    await axios.post("http://localhost:8080/register", {
      Code: data.code,
      Category: Number(data.categoryId),
    });

  return metric;
});

export const getMetrics = Catch(async (rq) => {
  const category = rq.params.category;
  const metrics = await Metric.getMetrics(Number(category));
  return { metrics };
});

export const getMetric = Catch(async (rq, rs) => {
  const id = rq.params.id;
  const metric = await Metric.getMetric(Number(id));
  return { metric };
});

export const getData = Catch(async (rq, rs) => {
  const code = rq.params.code;
  const data = await Data.getData(code);
  return { data };
});

export const addData = Catch(async (rq, rs) => {
  const value = rq.body.value;
  const code = rq.body.code;
  const category = rq.body.category;
  const data = await Data.addData(Number(value), code, Number(category));
  return { data };
});

export const carbon = Catch(async (rq) => {
  const data = await Data.getStatisticsByCategory();
  const categories = await Category.getCategories();
  console.log(
    categories,
    data,
    categories.map((category) => {
      return {
        id: category.id,
        label: category.label,
        coef: category.coef,
        data: Number(
          (data.find((d: any) => d.category === category.id) || { value: 0 })
            .value
        ),
      };
    })
  );

  const categoriesAsObject = categories
    .map((category) => {
      return {
        id: category.id,
        label: category.label,
        coef: category.coef,
        data: Number(
          (
            data.find((d: any) => Number(d.category) === category.id) || {
              value: 0,
            }
          ).value
        ),
      };
    })
    .map((category) => {
      return {
        id: category.id,
        label: category.label,
        value: category.data * category.coef,
      };
    })
    .sort((a, b) => b.value - a.value);

  const footprint = categoriesAsObject.reduce(
    (a: any, b: any) => a + b.value,
    0
  );

  if (footprint > 14000) {
    const user = await User.findOne({ where: { email: rq.user.email } });
    if (user) {
      if (!user.notified) {
        const courier = CourierClient({
          authorizationToken: "pk_prod_QQ7R4WDZ2847PYMVTWAJ331R5DEE",
        });

        await courier.send({
          message: {
            to: {
              email: rq.user.email,
            },
            template: "P12CRDXVNMM21GJNF53VNYKY7SX8",
            data: {},
          },
        });
        user.notified = true;
        await user?.save();
      }
    }
  }

  return {
    data: categoriesAsObject,
    carbon: footprint,
    threshold: 14000,
  };
});
