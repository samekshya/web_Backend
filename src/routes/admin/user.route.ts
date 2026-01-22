import { Router } from "express";
//import admin controller
import { AdminUsercontroller } from "../../controllers/admin/user.controller";
import { authorizedMiddleware } from "../../middlewares/authorized.middleware";
import { de } from "zod/v4/locales";
import router from "../books.routes";

let adminUserController = new AdminUsercontroller();

router.get("/:id",authorizedMiddleware, adminOnlyMiddleWare, adminUserController.getOneUser);
//define admin suer routes

export default router;
