import {Request, Response} from 'express'
import ContractController from '../../contract.controller'
import {Modules} from "../../../interfaces/Modules";
import {injectable} from "inversify";

@injectable()
export default class AdminHomeController extends ContractController {
    /**
     * @param req {Request}
     * @param res {Response}
     */
    public home = (req: Request, res: Response) => {
        this.renderToHtml(res, 'index', Modules.HOME_PAGE);
    };
}
