import { NextFunction, Request, Response } from "express";
export async function ensuredAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token = request.headers.authorization;
  if (!token) {
    return response.status(401).send();
  }
  const [, user] = token.split(" ");
  if (user === "admin") {
    return next();
  }
  return response.status(401).send();
}
