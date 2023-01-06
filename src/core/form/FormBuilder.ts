import {FormInterface} from "./interfaces/FormInterface";
import {FormBuilderInterface} from "./interfaces/FormBuilderInterface";
import {injectable} from "inversify";

@injectable()
export default class FormBuilder implements FormBuilderInterface {
    private fields = new Map<string, FormInterface>();

    add(name: string, options: FormInterface) {
        this.fields.set(name, options);
        return this
    }

    build() {
        let form: FormInterface[] = [];

        for(let value of this.fields.values()) {
            form.push(value)
        }
        return form;
    }
}

