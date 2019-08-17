import { Component } from '@angular/core';

let rateNumberCode = require('../../../../assets/data/syntax/components/data-entry/rateCode.json');
declare var require: any

@Component({
    templateUrl: './rate.component.html'
})   

export class RateComponent {

    rateBasicCode: string
    rateHalfStarCode: string
    rateShowCopyCode: string
    rateReadOnlyCode: string
    rateClearStarCode: string
    rateOtherCharacterCode: string

    rateShowCopyInputValue = 3;

    rateClearStarInputvalue = 0;

    ngOnInit(): void {

        this.rateBasicCode = rateNumberCode.rateBasicCode;
        this.rateHalfStarCode = rateNumberCode.rateHalfStarCode;
        this.rateShowCopyCode = rateNumberCode.rateShowCopyCode;
        this.rateReadOnlyCode = rateNumberCode.rateReadOnlyCode;
        this.rateClearStarCode = rateNumberCode.rateClearStarCode;
        this.rateOtherCharacterCode = rateNumberCode.rateOtherCharacterCode;
    }
}    