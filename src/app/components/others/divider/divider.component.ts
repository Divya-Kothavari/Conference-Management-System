import { Component,  } from '@angular/core';

let dividerCode = require('../../../../assets/data/syntax/components/others/dividerCode.json');
declare var require: any

@Component({
    templateUrl: 'divider.component.html'
})

export class DividerComponent   {
   
    //Code Highlight
    dividerHorizontalCode: string;
    dividerVerticalCode: string;
    dividerOrientationCode: string;

    ngOnInit() {

        //Code Highlight
        this.dividerHorizontalCode = dividerCode.dividerHorizontalCode;
        this.dividerVerticalCode = dividerCode.dividerVerticalCode;
        this.dividerOrientationCode = dividerCode.dividerOrientationCode
    }
}


