import 'reflect-metadata';

import { HttpServer, Routes, routesList } from "../../core";
import { container } from '../../core/container/inversify.config';
import { TYPES } from '../../core/container/types';
import {DatabaseInterface} from "./bases/DatabaseInterface";
import {AuthMiddlewares} from "../../core/middlewares/AuthMiddleware";
import {Middlewares} from "../../core/middlewares/config/Middleware";
import {TimerResponseMiddleware} from "../../core/middlewares/TimerReponseMiddleware";

function bootstrap() {
    try {
        /**
         * @description
         * This instance allows you to inject the different middleware possible for specific operations.
         * it waits for MiddlewareInterface table
         */
        const middlewares = new Middlewares([
            new TimerResponseMiddleware(),
            new AuthMiddlewares()
        ]);

        //instances of http and Routes servers
        const server = new HttpServer(middlewares);
        const router = new Routes(server.configServer, routesList);

        //initialization and connection to the database
        container
        .get<DatabaseInterface>(TYPES.DatabaseInterface)
        .initialize();

        //startup
        router.launcher(); //activation of the different routes of the application
        server.start(); //web server launch
    } catch (e: unknown) {
       throw new Error((e as unknown as Record<string, string>).message)
    }
}

bootstrap();

