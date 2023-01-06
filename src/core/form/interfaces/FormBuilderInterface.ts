import {FormInterface} from "./FormInterface";
import FormBuilder from "../FormBuilder";

export interface FormBuilderInterface {
    add(name: string, options: FormInterface): FormBuilder
    build(): FormInterface[]
}