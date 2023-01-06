import { Express } from "express";
import MiddlewareInterface from "./MiddlewareInterface";

export class Middlewares {
    constructor(private readonly middlewares: MiddlewareInterface[]) {}

    execute(app: Express): void {
        if (this.middlewares.length)
            this.middlewares.forEach((middleware) => {
                app.use(middleware.applyMiddleware())
            })
    }
}

