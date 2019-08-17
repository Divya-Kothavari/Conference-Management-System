import { Component } from '@angular/core';

let alertCode = require('../../../../assets/data/syntax/components/feedback/alertCode.json');
declare var require: any

@Component({
    templateUrl: './alert.component.html'
})

export class AlertComponent {

    //Code Highlight
    alertBasicCode: string
    alertMoreTypesCode: string
    alertClosableCode: string
    alertDescriptionCode: string
    alertIconCode: string
    alertCustomizedCloseTextCode: string
    alertBannerCode: string

    afterClose(): void {
        console.log('close');
    }

    ngOnInit(): void {

        //Code Highlight
        this.alertBasicCode = alertCode.alertBasicCode;
        this.alertMoreTypesCode = alertCode.alertMoreTypesCode;
        this.alertClosableCode = alertCode.alertClosableCode;
        this.alertDescriptionCode = alertCode.alertDescriptionCode;
        this.alertIconCode = alertCode.alertIconCode;
        this.alertCustomizedCloseTextCode = alertCode.alertCustomizedCloseTextCode;
        this.alertBannerCode = alertCode.alertBannerCode;
    }
}  