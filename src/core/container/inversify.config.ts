import { Container } from "inversify";
import { TYPES } from "./types";
import Database from "../../infra/applications/bases/Database";
import { DatabaseInterface } from "../../infra/applications/bases/DatabaseInterface";
import AdminHomeController from "../../infra/modules/backoffice/controller/AdminHomeController";
import HomePageController from "../../infra/modules/home-page/controller/HomePage";
import {FormBuilderInterface} from "../form/interfaces/FormBuilderInterface";
import FormBuilder from "../form/FormBuilder";
import DatabaseAdaptor from "../../infra/applications/bases/DatabaseAdaptor";
import PrismaService from "../../infra/applications/bases/PrismaService";
import AuthController from "../../infra/modules/authenticate/controller/AuthController";

const container = new Container();

//Database
container.bind<PrismaService>(TYPES.PrismaService).to(PrismaService)
container.bind<DatabaseAdaptor>(TYPES.DatabaseAdaptor).to(DatabaseAdaptor)
container.bind<DatabaseInterface>(TYPES.DatabaseInterface).to(Database).inSingletonScope();

//repository

//controllers
container.bind<AdminHomeController>(TYPES.AdminHomeController).to(AdminHomeController);
container.bind<HomePageController>(TYPES.HomePageController).to(HomePageController);
container.bind<AuthController>(TYPES.AuthController).to(AuthController);

//core
container.bind<FormBuilderInterface>(TYPES.FormBuilderInterface).to(FormBuilder);

export { container };