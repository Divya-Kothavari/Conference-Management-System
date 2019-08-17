import { Component } from '@angular/core';

let radioCode = require('../../../../assets/data/syntax/components/data-entry/radioCode.json');
declare var require: any

@Component({
    templateUrl: './radio.component.html'
})   

export class RadioComponent {

    //Code Highlight
    radioBasicCode: string
    radioDisabledCode: string
    radioGroupCode: string
    radioGroupOptionCode: string
    radioVerticalCode: string
    radioNameCode: string
    radioStyleCode: string
    radioSizeCode: string
    radioStyleSolidCode: string

    radioDisabledInputValue = true;
    radioGroupInputValue = 'A';
    radioVerticalValue = 'A';
    radioNameValue = 'A';
    radioStyleValue = 'A';
    radioSizeValue = 'A';
    radioStyleSolidValue = 'A';

    radioGroupOptionValue = 'Apple';
    radioOptions = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];

    style = {
        display   : 'block',
        height    : '30px',
        lineHeight: '30px'
    };


    ngOnInit(): void {

        //Code Highlight
        this.radioBasicCode = radioCode.radioBasicCode;
        this.radioDisabledCode = radioCode.radioDisabledCode;
        this.radioGroupCode = radioCode.radioGroupCode;
        this.radioGroupOptionCode = radioCode.radioGroupOptionCode;
        this.radioVerticalCode = radioCode.radioVerticalCode;
        this.radioNameCode = radioCode.radioNameCode;
        this.radioStyleCode = radioCode.radioStyleCode;
        this.radioSizeCode = radioCode.radioSizeCode;
        this.radioStyleSolidCode = radioCode.radioStyleSolidCode;

    }
}    