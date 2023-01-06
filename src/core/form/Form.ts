import {FormInterface, TypeDefinitions} from "./interfaces/FormInterface";

export default class Form  {
    private formElements = '<form method="post" class="form">';
    constructor(private readonly formBuilder:  FormInterface[]){}

    get getForm(): string {
        this.formBuilder.forEach((form) => {
            this.formElements += this.formBuilderToHtml(form);
        })
       return `${this.formElements} </form>`;
    }

    /**
     * @description transform the form interface into a string representing the form
     * @param form{FormInterface}
     * @return string
     */
    private formBuilderToHtml(form: FormInterface): string {
        let html = `<div class="form-group">
            <label>${form.label ?? ''}</label>
            `;
        switch (form.type) {
            case TypeDefinitions.hidden:
            case TypeDefinitions.checkbox:
            case TypeDefinitions.email:
            case TypeDefinitions.password:
            case TypeDefinitions.text:
                html += `<input type="${form.type}" name="${form.name}" placeholder="${form.placeholder}">`
                break;
            case TypeDefinitions.textarea:
                html += `<textarea name="${form.name}" placeholder="${form.placeholder}">`
                break;
            case TypeDefinitions.select:
                html += `<select name="${form.name}">`
                break;
            default:
        }
        html += '</div>';
        return html;
    }
}
