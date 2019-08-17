import { Component } from '@angular/core';

let descriptionsCode = require('../../../../assets/data/syntax/components/data-display/descriptionsCode.json');
declare var require: any

@Component({
    templateUrl: './descriptions.component.html'
})

export class DescriptionsComponent {

    size = 'default';

    descriptionsBasicCode : string
    descriptionsBorderCode : string
    descriptionsCustomSizeCode : string
    descriptionsResponsiveCode : string
    descriptionsVerticalCode : string
    descriptionsVerticalBorderCode: string

    ngOnInit() {
        this.descriptionsBasicCode = descriptionsCode.descriptionsBasicCode;
        this.descriptionsBorderCode = descriptionsCode.descriptionsBorderCode;
        this.descriptionsCustomSizeCode = descriptionsCode.descriptionsCustomSizeCode;
        this.descriptionsResponsiveCode = descriptionsCode.descriptionsResponsiveCode;
        this.descriptionsVerticalCode = descriptionsCode.descriptionsVerticalCode;
        this.descriptionsVerticalBorderCode = descriptionsCode.descriptionsVerticalBorderCode;
    }
}