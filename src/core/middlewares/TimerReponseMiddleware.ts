import {NextFunction, Request, Response} from "express";
import MiddlewareInterface from "./config/MiddlewareInterface";

export class TimerResponseMiddleware implements MiddlewareInterface  {
    applyMiddleware() {
        return function (req: Request, res: Response, next: NextFunction) {
            console.time('Response -------------->')
            next();
            console.timeEnd('Response -------------->')
        };
    }
}

