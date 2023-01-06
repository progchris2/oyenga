import { Router } from "express";
import AuthController from "../controller/AuthController";
import {container} from "../../../../core/container/inversify.config";
import { TYPES } from "../../../../core/container/types";

const router = Router()

const controller = container.get<AuthController>(TYPES.AuthController)

export default [
    router.post("/auth", controller.login),
    router.post("/disconnect", controller.logout),
    router.post("/create", controller.create),
];