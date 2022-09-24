import { User } from "../../models";
import { Catch } from "../../core";

export const login = Catch(async (rq, rs) => {
  const data = rq.body;
  const token = await User.login(data.email, data.password);
  return { token };
});

export const register = Catch(async (rq, rs) => {
  const data = rq.body;
  const user = await User.register(data);
  return rs.status(200).json(user);
});
