import { Component } from '@angular/core';

let switchCode = require('../../../../assets/data/syntax/components/data-entry/switchCode.json');
declare var require: any

@Component({
    templateUrl: './switch.component.html'
})   

export class SwitchComponent {

    //Code Highlight
    switchBasicCode: string
    switchDisabledCode: string
    switchTextIconCode: string
    switchTwoSizesCode: string
    switchLoadingCode: string
    switchControlCode: string

    switchBasicValue = false;
    switchDisabledValue = false;

    switchDisabledIsDisabled = true;

    switchControlValue = false;
    switchControlLoading = false;

    clickSwitch(): void {
        if (!this.switchControlLoading) {
            this.switchControlLoading = true;
            setTimeout(() => {
                this.switchControlValue = !this.switchControlValue;
                this.switchControlLoading = false;
            }, 3000);
        }
    }

    ngOnInit(): void {

        //Code Highlight
        this.switchBasicCode = switchCode.switchBasicCode;
        this.switchDisabledCode = switchCode.switchDisabledCode;
        this.switchTextIconCode = switchCode.switchTextIconCode;
        this.switchTwoSizesCode = switchCode.switchTwoSizesCode;
        this.switchLoadingCode = switchCode.switchLoadingCode;
        this.switchControlCode = switchCode.switchControlCode;
    }
}