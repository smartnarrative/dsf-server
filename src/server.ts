import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./routes";
import middleware from "./middleware";

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const { PORT = 4000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});