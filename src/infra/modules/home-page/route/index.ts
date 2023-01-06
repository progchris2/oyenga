import { Router } from "express";

import { TYPES } from "../../../../core/container/types";
import { container } from "../../../../core/container/inversify.config";
import HomePageController from "../controller/HomePage";

const router = Router()
const controller = container.get<HomePageController>(TYPES.HomePageController);


export default [
    router.get("/", controller.home),
];