import { Component,  } from '@angular/core';

let backToTopCode = require('../../../../assets/data/syntax/components/others/backtotopCode.json');
declare var require: any

@Component({
    templateUrl: 'back-to-top.component.html'
})

export class BackToTopComponent   {
   
    //Code Highlight
    backToTopBasicCode: string
    backToTopCustomStyleCode: string
    backToTopUsingNzTargetCode: string

    notify(): void {
        console.log('notify');
    }

    ngOnInit() {

        //Code Highlight
        this.backToTopBasicCode = backToTopCode. backToTopBasicCode;
        this.backToTopCustomStyleCode = backToTopCode.backToTopCustomStyleCode;
        this.backToTopUsingNzTargetCode = backToTopCode.backToTopUsingNzTargetCode;
    }
}


