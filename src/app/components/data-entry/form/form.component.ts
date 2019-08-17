import { Component, OnInit  } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

let formCode = require('../../../../assets/data/syntax/components/data-entry/formCode.json');
declare var require: any

@Component({
    templateUrl: './form.component.html',
    styles: [ `
        .login-form {
            max-width: 300px;
        }

        .login-form-forgot {
            float: right;
        }

        .login-form-button {
            width: 100%;
        }

        .register-form {
            max-width: 600px;
        }
        `
    ]
})    

export class FormComponent implements OnInit {

    //Code Highlight
    formHorizontalLoginCode: string
    formNormalLoginCode: string
    formRegisterCode: string
    formAdvancedSearchCode: string
    formDynamicCode: string
    formDateTimeRelatedCode: string
    formReactiveCode: string
    formTemplateDrivenValidationCode: string
    formCoordinatedCode: string
    formLayoutCode: string
    formDynamicRulesCode: string
    

    horizonValidateForm: FormGroup;
    loginValidateForm: FormGroup;
    registerValidateForm: FormGroup;
    advancedSearchValidateForm: FormGroup;
    dynamicValidateForm: FormGroup;
    timeRelatedValidateForm: FormGroup;
    reactiveValidateForm: FormGroup;
    coordinatedValidateForm: FormGroup;
    layoutValidateForm: FormGroup;
    dynamicRuleValidateForm: FormGroup;

    selectedValue = '+86'
    advancedSearchControlArray = [];
    dynamicControlArray: Array<{ id: number, controlInstance: string }> = [];
    isCollapse = true;

    horizonSubmitForm(): void {
        for (const i in this.horizonValidateForm.controls) {
          this.horizonValidateForm.controls[ i ].markAsDirty();
          this.horizonValidateForm.controls[ i ].updateValueAndValidity();
        }
    }

    loginSubmitForm(): void {
        for (const i in this.loginValidateForm.controls) {
            this.loginValidateForm.controls[ i ].markAsDirty();
            this.loginValidateForm.controls[ i ].updateValueAndValidity();
        }
    }
    
    registerSubmitForm(): void {
        for (const i in this.registerValidateForm.controls) {
            this.registerValidateForm.controls[ i ].markAsDirty();
            this.registerValidateForm.controls[ i ].updateValueAndValidity();
        }
    }

    registerUpdateConfirmValidator(): void {
        /** wait for refresh value */
        Promise.resolve().then(() => this.registerValidateForm.controls.checkPassword.updateValueAndValidity());
    }

    registerConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.registerValidateForm.controls.password.value) {
            return { confirm: true, error: true };
        }
    }

    getCaptcha(e: MouseEvent): void {
        e.preventDefault();
    }
    
    toggleCollapse(): void {
        this.isCollapse = !this.isCollapse;
        this.advancedSearchControlArray.forEach((c, index) => {
            c.show = this.isCollapse ? (index < 6) : true;
        });
    }

    advancedSearchResetForm(): void {
        this.advancedSearchValidateForm.reset();
    }

    dynamicAddField(e?: MouseEvent): void {
        if (e) {
            e.preventDefault();
        }
        const id = (this.dynamicControlArray.length > 0) ? this.dynamicControlArray[ this.dynamicControlArray.length - 1 ].id + 1 : 0;

        const control = {
            id,
            controlInstance: `passenger${id}`
        };
        const index = this.dynamicControlArray.push(control);
        console.log(this.dynamicControlArray[ this.dynamicControlArray.length - 1 ]);
        this.dynamicValidateForm.addControl(this.dynamicControlArray[ index - 1 ].controlInstance, new FormControl(null, Validators.required));
    }

    dynamicRemoveField(i: { id: number, controlInstance: string }, e: MouseEvent): void {
        e.preventDefault();
        if (this.dynamicControlArray.length > 1) {
            const index = this.dynamicControlArray.indexOf(i);
            this.dynamicControlArray.splice(index, 1);
            console.log(this.dynamicControlArray);
            this.dynamicValidateForm.removeControl(i.controlInstance);
        }
    }

    dynamicGetFormControl(name: string): AbstractControl {
        return this.dynamicValidateForm.controls[ name ];
    }

    dynamicSubmitForm(): void {
        for (const i in this.dynamicValidateForm.controls) {
            this.dynamicValidateForm.controls[ i ].markAsDirty();
            this.dynamicValidateForm.controls[ i ].updateValueAndValidity();
        }
        console.log(this.dynamicValidateForm.value);
    }

    timeRelatedSubmitForm(): void {
        console.log(this.timeRelatedValidateForm.value);
    }

    reactiveSubmitForm = ($event, value) => {
        $event.preventDefault();
        for (const key in this.reactiveValidateForm.controls) {
        this.reactiveValidateForm.controls[ key ].markAsDirty();
        this.reactiveValidateForm.controls[ key ].updateValueAndValidity();
        }
        console.log(value);
    };

    reactiveResetForm(e: MouseEvent): void {
        e.preventDefault();
        this.reactiveValidateForm.reset();
        for (const key in this.reactiveValidateForm.controls) {
            this.reactiveValidateForm.controls[ key ].markAsPristine();
            this.reactiveValidateForm.controls[ key ].updateValueAndValidity();
        }
    }

    reactiveValidateConfirmPassword(): void {
        setTimeout(() => this.reactiveValidateForm.controls.confirm.updateValueAndValidity());
    }

    reactiveUserNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
        setTimeout(() => {
        if (control.value === 'JasonWood') {
            observer.next({ error: true, duplicated: true });
        } else {
            observer.next(null);
        }
        observer.complete();
        }, 1000);
    });

    reactiveConfirmValidator = (control: FormControl): { [ s: string ]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.reactiveValidateForm.controls.password.value) {
            return { confirm: true, error: true };
        }
    };

    coordinatedSubmitForm(): void {
        for (const i in this.coordinatedValidateForm.controls) {
            this.coordinatedValidateForm.controls[ i ].markAsDirty();
            this.coordinatedValidateForm.controls[ i ].updateValueAndValidity();
        }
    }

    coordinatedGenderChange(value: string): void {
        this.coordinatedValidateForm.get('note').setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
    }

    layoutSubmitForm(): void {
        for (const i in this.layoutValidateForm.controls) {
            this.layoutValidateForm.controls[ i ].markAsDirty();
            this.layoutValidateForm.controls[ i ].updateValueAndValidity();
        }
    }

    get isHorizontal(): boolean {
        return this.layoutValidateForm.controls.formLayout && this.layoutValidateForm.controls.formLayout.value === 'horizontal';
    }

    dynamicRuleSubmitForm(): void {
        for (const i in this.dynamicRuleValidateForm.controls) {
            this.dynamicRuleValidateForm.controls[ i ].markAsDirty();
            this.dynamicRuleValidateForm.controls[ i ].updateValueAndValidity();
        }
    }

    dynamicRuleRequiredChange(required: boolean): void {
        if (!required) {
            this.dynamicRuleValidateForm.get('nickname').clearValidators();
            this.dynamicRuleValidateForm.get('nickname').markAsPristine();
        } else {
            this.dynamicRuleValidateForm.get('nickname').setValidators(Validators.required);
            this.dynamicRuleValidateForm.get('nickname').markAsDirty();
        }
        this.dynamicRuleValidateForm.get('nickname').updateValueAndValidity();
    }

    constructor(
        private horizonFB: FormBuilder,
        private loginFB: FormBuilder,
        private resgisterFB: FormBuilder,
        private advancedSearchFB: FormBuilder,
        private dynamicFB: FormBuilder,
        private timeRelatedFB: FormBuilder,
        private reactiveFB: FormBuilder,
        private coordinatedFB: FormBuilder,
        private layoutFB: FormBuilder,
        private dynamicRuleFB: FormBuilder
        ) {
            this.reactiveValidateForm = this.reactiveFB.group({
                userName: [ '', [ Validators.required ], [ this.reactiveUserNameAsyncValidator ] ],
                email   : [ '', [ Validators.email ] ],
                password: [ '', [ Validators.required ] ],
                confirm : [ '', [ this.reactiveConfirmValidator ] ],
                comment : [ '', [ Validators.required ] ]
            });
    }
    
    ngOnInit(): void {
        
        //Code Highlight
        this.formHorizontalLoginCode = formCode.formHorizontalLoginCode;
        this.formNormalLoginCode = formCode.formNormalLoginCode;
        this.formRegisterCode = formCode.formRegisterCode;
        this.formAdvancedSearchCode = formCode.formAdvancedSearchCode;
        this.formDynamicCode = formCode.formDynamicCode;
        this.formDateTimeRelatedCode = formCode.formDateTimeRelatedCode;
        this.formReactiveCode = formCode.formReactiveCode;
        this.formTemplateDrivenValidationCode = formCode.formTemplateDrivenValidationCode;
        this.formCoordinatedCode = formCode.formCoordinatedCode;
        this.formLayoutCode = formCode.formLayoutCode;
        this.formDynamicRulesCode = formCode.formDynamicRulesCode;

        this.horizonValidateForm = this.horizonFB.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ],
            remember: [ true ]
        });

        this.loginValidateForm = this.loginFB.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ],
            remember: [ true ]
        });

        this.registerValidateForm = this.resgisterFB.group({
            email            : [ null, [ Validators.email ] ],
            password         : [ null, [ Validators.required ] ],
            checkPassword    : [ null, [ Validators.required, this.registerConfirmationValidator ] ],
            nickname         : [ null, [ Validators.required ] ],
            phoneNumberPrefix: [ '+61' ],
            phoneNumber      : [ null, [ Validators.required ] ],
            website          : [ null, [ Validators.required ] ],
            captcha          : [ null, [ Validators.required ] ],
            agree            : [ false ]
        });

        this.advancedSearchValidateForm = this.advancedSearchFB.group({});
        for (let i = 0; i < 10; i++) {
            this.advancedSearchControlArray.push({ index: i, show: i < 6 });
            this.advancedSearchValidateForm.addControl(`field${i}`, new FormControl());
        }

        this.dynamicValidateForm = this.dynamicFB.group({});
        this.dynamicAddField();

        this.timeRelatedValidateForm = this.timeRelatedFB.group({
            datePicker     : [ null ],
            datePickerTime : [ null ],
            monthPicker    : [ null ],
            rangePicker    : [ [] ],
            rangePickerTime: [ [] ],
            timePicker     : [ null ]
        });

        this.coordinatedValidateForm = this.coordinatedFB.group({
            note  : [ null, [ Validators.required ] ],
            gender: [ null, [ Validators.required ] ]
        });

        this.layoutValidateForm = this.layoutFB.group({
            formLayout: [ 'horizontal' ],
            fieldA    : [ null, [ Validators.required ] ],
            filedB    : [ null, [ Validators.required ] ]
        });

        this.dynamicRuleValidateForm = this.dynamicRuleFB.group({
            name    : [ null, [ Validators.required ] ],
            nickname: [ null ],
            required: [ false ]
        });
    }
}    