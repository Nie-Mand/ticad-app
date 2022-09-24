import { RequestHandler } from "express";
import jwt, { decode } from "jsonwebtoken";
import { jwtSecret } from "./env";

export function authenticate(...roles: string[]): RequestHandler {
  return (rq, rs, nxt) => {
    const authorization = rq.headers.authorization;
    if (!authorization) {
      return rs.status(401).send("Unauthorized");
    }

    const [_bearer, token] = authorization.split(" ");
    if (!token) {
      return rs.status(401).send("Unauthorized");
    }

    try {
      const decoded = jwt.verify(token, jwtSecret) as {
        id: number;
        role: string;
        email: string;
      };

      rq.user = {
        id: decoded.id,
        role: decoded.role,
        email: decoded.email,
      };
    } catch {
      return rs.status(401).send("Unauthorized");
    }

    if (roles.length && !roles.includes(rq.user.role)) {
      return rs.status(403).send("Forbidden");
    }

    nxt();
  };
}
