import {NextFunction, Request, Response} from "express";

export default interface MiddlewareInterface {
    /**
     * @description callback function used to apply to call the next
     * function under certain conditions
     */
    applyMiddleware(): (req: Request, res: Response, next: NextFunction) => void
}

