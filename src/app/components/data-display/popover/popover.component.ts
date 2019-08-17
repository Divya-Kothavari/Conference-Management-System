import { Component } from '@angular/core';

let popoverCode = require('../../../../assets/data/syntax/components/data-display/popoverCode.json');
declare var require: any

@Component({
    templateUrl: './popover.component.html'
})

export class PopoverComponent {
    
    popoverBasicCode: string
    popoverPlacementCode: string
    popoverControllingCode: string
    popoverPointingCode: string
    popoverTemplateCode: string
    popoverTriggerCode: string

    popoverControllingVisible: boolean;

    popoverControllingTrigger(): void {
        this.popoverControllingVisible = false;
    }

    popoverControllingChange(value: boolean): void {
        console.log(value);
    }

    ngOnInit(): void {
        this.popoverBasicCode = popoverCode.popoverBasicCode;
        this.popoverPlacementCode = popoverCode.popoverPlacementCode;
        this.popoverControllingCode = popoverCode.popoverControllingCode;
        this.popoverPointingCode = popoverCode.popoverPointingCode;
        this.popoverTemplateCode = popoverCode.popoverTemplateCode;
        this.popoverTriggerCode = popoverCode.popoverTriggerCode;
    }
}    