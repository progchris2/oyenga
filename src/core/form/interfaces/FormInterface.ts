export enum TypeDefinitions {
    text =  'text',
    email = 'email',
    password = 'password',
    number = 'number',
    tel = 'tel',
    textarea = 'textarea',
    select ='select',
    checkbox = 'checkbox',
    radio = 'radio',
    date = 'date',
    file = 'file',
    hidden = 'hidden',
}


export type FormInterface = {
    label?: string
    placeholder?: string
    type: TypeDefinitions
    required?: boolean
    disabled?: boolean
    value?: any
    rows?: number
    cols?: number
    name?: string
    id?: string
    autofocus?: boolean
    min?: number
    max?: number
    icon?: string
    iconPosition?: 'left' | 'right' | 'top' | 'bottom'
    iconSize?:'small' |'medium' | 'large'
    class?: string;
}