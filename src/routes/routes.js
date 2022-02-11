import userRoutes from "./users-routes.js";
import authRoutes from "./auth-routes.js";
import genderRoutes from "./gender-routes.js";
import moviesRoutes from "./movies-routes.js";

export const renderRoutes = [
  {
    method: "GET",
    url: "/health",
    handler: (_, res) => {
      res.status(200).send();
    },
  },
  ...Object.values(userRoutes),
  ...Object.values(genderRoutes),
  ...Object.values(moviesRoutes),
  ...Object.values(authRoutes),
];

export default (fastify, opts, next) => {
  fastify.decorateRequest("user", null);

  fastify.addHook("onRequest", (req, res, next) => {
    console.log("onRequest");
    req.user = null;
    next();
  });
  for (let route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
