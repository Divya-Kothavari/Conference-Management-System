import { Component } from '@angular/core';

let tooltipCode = require('../../../../assets/data/syntax/components/data-display/tooltipCode.json');
declare var require: any

@Component({
    templateUrl: './tooltip.component.html'
})

export class TooltipComponent {

    //Code Highlight
    tooltipBasicCode: string
    tooltipPlacementCode: string
    tooltipArrowPointingCode: string
    tooltipTemplateCode: string

    ngOnInit(): void {
        
        //Code Highlight
        this.tooltipBasicCode = tooltipCode.tooltipBasicCode;
        this.tooltipPlacementCode = tooltipCode.tooltipPlacementCode;
        this.tooltipArrowPointingCode = tooltipCode.tooltipArrowPointingCode;
        this.tooltipTemplateCode = tooltipCode.tooltipTemplateCode;
    }
}    