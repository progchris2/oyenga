import "reflect-metadata";
import FormBuilder from "../FormBuilder";
import {TypeDefinitions} from "../interfaces/FormInterface";

describe('src/core/form/FormBuilder', () => {
    let formBuilder: FormBuilder;

    beforeEach(() => {
        formBuilder = new FormBuilder();
    });

    it('check that formBuilder is defined', () => {
        expect(formBuilder).toBeDefined();
    });

    it('checks that formBuilder holds a method add && build', () => {
        expect(formBuilder.add).toBeDefined();
        expect(formBuilder.build).toBeDefined();
    });

    it('checks that formBuilder holds a method add options', () => {
        formBuilder
            .add('email', {label: 'Identifiant', type: TypeDefinitions.email, name: 'email'})
            .add('password', {label: 'Mot de pass', type: TypeDefinitions.password, name: 'password'});

        expect(formBuilder.build()).toEqual([
            {
                label: 'Identifiant',
                type: TypeDefinitions.email,
                name: 'email'
            },
            {
                label: 'Mot de pass',
                type: TypeDefinitions.password,
                name: 'password'
            }
        ])
    });
})
