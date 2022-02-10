import { validateRequest } from "../middleware/auth.js";
import * as GenderController from "../controllers/gender-controller.js";

export default {
  getAllGenders: {
    method: "GET",
    url: "/gender",
    preHandler: [validateRequest],
    handler: GenderController.index,
  },
  getGenderById: {
    method: "GET",
    url: "/gender/:id",
    preHandler: [validateRequest],
    handler: GenderController.getGenderById,
  },
  createGender: {
    method: "POST",
    url: "/gender",
    preHandler: [validateRequest],
    handler: GenderController.createGender,
  },
  updateGender: {
    method: "PATCH",
    url: "/gender/:id",
    preHandler: [validateRequest],
    handler: GenderController.updateGender,
  },
  deleteGender: {
    method: "DELETE",
    url: "/gender/:id",
    preHandler: [validateRequest],
    handler: GenderController.deleteGender,
  },
};
