import { Component } from '@angular/core';

let cardCode = require('../../../../assets/data/syntax/components/data-display/cardCode.json');
declare var require: any

@Component({
    templateUrl: './card.component.html',
})

export class CardComponent {

    //Code Highlight
    cardBasicCode: string
    cardNoBorderCode: string
    cardSimpleCode: string
    cardCustomizedCode: string
    cardColumnCode: string
    cardLoadingCode: string
    cardGridCode: string
    cardInnerCode: string
    cardTabCode: string
    cardMoreContentCode: string
    cardAPICode: string

    cardLoading = true;

    cardGridStyle = {
        width    : '25%',
        textAlign: 'center'
    };

    cardTabIndex1 = 0;
    cardTabIndex2 = 0;

    ngOnInit() {

        //Code Highlight
        this.cardBasicCode = cardCode.cardBasicCode;
        this.cardNoBorderCode = cardCode.cardNoBorderCode;
        this.cardSimpleCode = cardCode.cardSimpleCode;
        this.cardCustomizedCode = cardCode.cardCustomizedCode;
        this.cardColumnCode = cardCode.cardColumnCode;
        this.cardLoadingCode = cardCode.cardLoadingCode;
        this.cardGridCode = cardCode.cardGridCode;
        this.cardInnerCode = cardCode.cardInnerCode;
        this.cardTabCode = cardCode.cardTabCode;
        this.cardMoreContentCode = cardCode.cardMoreContentCode;
        this.cardAPICode = cardCode.cardAPICode;
    }    
}    