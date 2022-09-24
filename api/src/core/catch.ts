import { Request, Response, RequestHandler, NextFunction } from "express";
import { ApiError } from "../errors";

export function Catch(rh: RequestHandler) {
  return async (rq: Request, rs: Response, nxt: NextFunction) => {
    try {
      const response = await rh(rq, rs, nxt);
      return rs.json(response);
    } catch (E) {
      console.log(E);

      if (E instanceof ApiError) {
        return rs.status(E.status).send(E.message);
      }
      return rs.status(500).send("Something went wrong");
    }
  };
}
