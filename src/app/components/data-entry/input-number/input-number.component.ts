import { Component } from '@angular/core';

let inputNumberCode = require('../../../../assets/data/syntax/components/data-entry/inputNumberCode.json');
declare var require: any

@Component({
    templateUrl: './input-number.component.html'
})   

export class InputNumberComponent {

    //Code Highlight
    inputNumberBasicCode: string
    inputNumberSizeCode: string
    inputNumberDisabledCode: string
    inputNumberDecimalsCode: string
    inputNumberFormaterCode: string

    inputNumberBasicValue = 3;
    inputNumberSizeValue = 3;
    inputNumberDisabledValue = 3;
    isDisabled = false;
    inputNumberDecimalsValue : number;
    inputNumberFormaterValue = 100;

    toggleDisabled(): void {
        this.isDisabled = !this.isDisabled;
    }

    formatterPercent = value => `${value} %`;
    parserPercent = value => value.replace(' %', '');
    formatterDollar = value => `$ ${value}`;
    parserDollar = value => value.replace('$ ', '');


    
    ngOnInit(): void {
        //Code Hightlight 
        this.inputNumberBasicCode = inputNumberCode.inputNumberBasicCode;
        this.inputNumberSizeCode = inputNumberCode.inputNumberSizeCode;
        this.inputNumberDisabledCode = inputNumberCode.inputNumberDisabledCode;
        this.inputNumberDecimalsCode = inputNumberCode.inputNumberDecimalsCode;
        this.inputNumberFormaterCode = inputNumberCode.inputNumberFormaterCode;
    }
}    