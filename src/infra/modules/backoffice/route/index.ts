import { Router } from "express";

import { TYPES } from "../../../../core/container/types";
import { container } from "../../../../core/container/inversify.config";
import AdminHomeController from "../controller/AdminHomeController";

const router = Router()
const controller = container.get<AdminHomeController>(TYPES.AdminHomeController);

export default [
    router.get("/admin/home", controller.home),
];