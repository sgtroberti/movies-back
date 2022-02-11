import { validateRequest } from "../middleware/auth.js";
import * as MoviesController from "../controllers/movies-controller.js";

export default {
  getAllMovies: {
    method: "GET",
    url: "/movie",
    handler: MoviesController.index,
  },
  getMovieById: {
    method: "GET",
    url: "/movie/:id",
    handler: MoviesController.getMovieById,
  },
  createMovie: {
    method: "POST",
    url: "/movie",
    preHandler: [validateRequest],
    handler: MoviesController.createMovie,
  },
  updateMovie: {
    method: "PATCH",
    url: "/movie/:id",
    preHandler: [validateRequest],
    handler: MoviesController.updateMovie,
  },

  deleteGender: {
    method: "DELETE",
    url: "/movie/:id",
    preHandler: [validateRequest],
    handler: MoviesController.deleteMovie,
  },
};
