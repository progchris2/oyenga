import {NextFunction, Request, Response} from "express";
import MiddlewareInterface from "./config/MiddlewareInterface";

export class AuthMiddlewares implements MiddlewareInterface {
    /**
     * @description Checks whether the Authorization field exists and is not empty
     * @param req
     * @return {boolean}
     */
    private static isEmptyAuthorizationField(req: Request) {
        return 'authorization' in req.headers && req.headers['authorization'] === '';
    }

    /**
     * @description verifies that this field gives access to the administration of the application
     * @param req
     * @return {boolean}
     */
    private static isAdminRequestInterface(req: Request) {
        return req.url.toLowerCase().split('/').includes('admin');
    }

    /**
     * @description Back to front-end The code error 401 to block access to the application
     * @param res
     * @return {Response<any, Record<string, any>>}
     */
    private static noResponseAuthorization = (res: Response) => {
        return res.status(401).jsonp({
            status: 401,
            message: 'Unauthorized'
        });
    }

    /**
     * @description middleware verifying all authentication rules
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    private authenticate(req: Request, res: Response, next: NextFunction) {
        if (AuthMiddlewares.isAdminRequestInterface(req)) {
            if (AuthMiddlewares.isEmptyAuthorizationField(req)) {
                return AuthMiddlewares.noResponseAuthorization(res);
            } else {
                return AuthMiddlewares.noResponseAuthorization(res);
            }
        } else next();
    };

    /**
     * @description runs authentication middleware
     * @return {(req: Request, res: Response, next: NextFunction) => void}
     */
    public applyMiddleware() {
        return this.authenticate
    }
}

