import AuthController from "../../infra/modules/authenticate/controller/AuthController";

const TYPES = {
    //Interfaces
    DatabaseInterface: Symbol.for("DatabaseInterface"),
    FormBuilderInterface: Symbol.for("FormBuilderInterface"),

    //Databases
    Database: Symbol.for("Database"),
    DatabaseAdaptor: Symbol.for("DatabaseAdaptor"),
    PrismaService: Symbol.for("PrismaService"),

    //Controllers
    AdminHomeController: Symbol.for("AdminHomeController"),
    HomePageController: Symbol.for("HomePageController"),
    AuthController: Symbol.for("AuthController"),
};

export { TYPES };