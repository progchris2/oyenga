import {Request, Response} from 'express'
import {inject, injectable} from "inversify";

import ContractController from '../../contract.controller'
import {FormBuilderInterface} from "../../../../core/form/interfaces/FormBuilderInterface";
import {TypeDefinitions} from "../../../../core/form/interfaces/FormInterface";
import {TYPES} from "../../../../core/container/types";
import Form from "../../../../core/form/Form";
import {Modules} from "../../../interfaces/Modules";

@injectable()
export default class HomePageController extends ContractController {

    constructor(
        @inject(TYPES.FormBuilderInterface) private readonly formBuilder: FormBuilderInterface
    ) {
        super()
    }

    public home = (req: Request, res: Response): void => {
        const formBuilder = this.formBuilder
            .add('identifier', {
                label: "Identifiant",
                type: TypeDefinitions.email,
                name: 'email',
                placeholder: 'example@example.com',
                required: true,
                value: '',
            })
           .add('password', {
               label: "Mot de passe",
               type: TypeDefinitions.password,
               name: 'password',
               placeholder: '********',
               required: true,
               value: '',
           })
            .add('csrf', {
                type: TypeDefinitions.hidden,
                name: 'crf',
            })
            .build()

        const form = new Form(formBuilder)
        this.renderToHtml(res, 'home-page', Modules.HOME_PAGE, {form: form.getForm});
    }
}

