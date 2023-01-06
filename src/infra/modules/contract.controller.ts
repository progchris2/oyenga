import {Response} from 'express'
import { injectable } from 'inversify';
import {Modules} from "../interfaces/Modules";

@injectable()
abstract class ContractController {
    private absolutePath: string = process.cwd();

    public jsonRender<T extends object>(res: Response, data: T, code = 200): void {
        res.status(code).json(data);
    }

    public fileRender(res: Response, path: string, code = 200) {
        res.status(code).sendFile(this.absolutePath + path);
    }

    public redirectRender(res: Response, path: string, code= 200) {
        res.status(code).redirect(path);
    }

    public send(res: Response, textContent: string, code= 200) {
        res.status(code).send(textContent);
    }

    public renderToHtml<T extends object>(res: Response, path: string, module: Modules, options?: T, code= 200,) {
        res.status(code).render(path, Object.assign({}, {module}, options));
    }
}

export default ContractController;