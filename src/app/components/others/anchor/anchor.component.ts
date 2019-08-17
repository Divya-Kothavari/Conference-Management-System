import { Component,  } from '@angular/core';

let anchorCode = require('../../../../assets/data/syntax/components/others/anchorCode.json');
declare var require: any

@Component({
    templateUrl: 'anchor.component.html'
})

export class AnchorComponent   {
   
    //Code Highlight
    anchorBasicCode: string
    anchorStaticCode: string

    ngOnInit() {

        //Code Highlight
        this.anchorBasicCode = anchorCode.anchorBasicCode;
        this.anchorStaticCode = anchorCode.anchorStaticCode;
    }
}