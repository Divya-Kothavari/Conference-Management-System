import { Component } from '@angular/core';

let spinCode = require('../../../../assets/data/syntax/components/feedback/spinCode.json');
declare var require: any

@Component({
    templateUrl: './spin.component.html'
})    

export class SpinComponent {

    //Code Highlight
    spinBasicCode: string
    spinSizeCode: string
    spinInsideContainerCode: string
    spinEmbeddedModeCode: string
    spinCustomizeDescriptionCode: string
    spinDelayCode: string
    spinCustomizeSpiningCode: string 

    embeddedSpinning = false;
    delaySpinning = false;

    ngOnInit(): void {

        //Code Highlight
        this.spinBasicCode = spinCode.spinBasicCode;
        this.spinSizeCode = spinCode.spinSizeCode;
        this.spinInsideContainerCode = spinCode.spinInsideContainerCode;
        this.spinEmbeddedModeCode = spinCode.spinEmbeddedModeCode;
        this.spinCustomizeDescriptionCode = spinCode.spinCustomizeDescriptionCode;
        this.spinDelayCode = spinCode.spinDelayCode;
        this.spinCustomizeSpiningCode = spinCode.spinCustomizeSpiningCode;
    }
}    

