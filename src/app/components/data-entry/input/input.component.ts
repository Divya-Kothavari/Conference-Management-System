import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

let inputCode = require('../../../../assets/data/syntax/components/data-entry/inputCode.json');
declare var require: any

@Component({
    templateUrl: './input.component.html',
    encapsulation: ViewEncapsulation.None,
    styles  : [
        `
        .anticon-close-circle {
            cursor: pointer;
            color: #ccc;
            transition: color 0.3s;
            font-size: 12px;
        }
  
        .anticon-close-circle:hover {
            color: #999;
        }
  
        .anticon-close-circle:active {
            color: #666;
        }
      `
    ]
})   

export class InputComponent {

    //Code Highlight
    inputBasicCode: string
    inputSizeCode: string
    inputPrePostCode: string
    inputSearchBoxCode: string
    inputGroupCode: string
    inputTextAreaCode: string
    inputAutoSizingCode: string
    inputPrefixSuffixCode: string
    inputFormatTooltipCode: string
    inputWithClearIcon: string
    inputPasswordBox: string

    inputBasicModel: string;
    inputTextareaModel: string;
    prePostinputModel: string = 'my site';
    username: string;
    value = '';
    title = 'Input a number';
    inputWithIconValue: string | null;
    passwordVisible = false;
    password: string;

    options = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
                isLeaf: true
            }]
        }, {
            value: 'ningbo',
            label: 'Ningbo',
            isLeaf: true
        }]
        }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
                isLeaf: true
            }]
        }]
    }];

    

    @ViewChild('inputElement', { static: true }) inputElement: ElementRef;

    onChange(value: string): void {
        this.updateValue(value);
    }

    // '.' at the end or only '-' in the input box.
    onBlur(): void {
        if (this.value.charAt(this.value.length - 1) === '.' || this.value === '-') {
            this.updateValue(this.value.slice(0, -1));
        }
    }

    updateValue(value: string): void {
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!isNaN(+value) && reg.test(value)) || value === '' || value === '-') {
            this.value = value;
        }
        this.inputElement.nativeElement.value = this.value;
        this.updateTitle();
    }

    updateTitle(): void {
        this.title = (this.value !== '-' ? this.formatNumber(this.value) : '-') || 'Input a number';
    }

    formatNumber(value: string): string {
        const string = `${value}`;
        const list = string.split('.');
        const prefix = list[ 0 ].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[ 0 ].slice(1) : list[ 0 ];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return `${prefix}${result}${list[ 1 ] ? `.${list[ 1 ]}` : ''}`;
    }

    ngOnInit(): void {
        //Code Highlight
        this.inputBasicCode = inputCode.inputBasicCode;
        this.inputSizeCode = inputCode.inputSizeCode;
        this.inputPrePostCode = inputCode.inputPrePostCode;
        this.inputSearchBoxCode = inputCode.inputSearchBoxCode;
        this.inputGroupCode = inputCode.inputGroupCode;
        this.inputTextAreaCode = inputCode.inputTextAreaCode;
        this.inputAutoSizingCode = inputCode.inputAutoSizingCode;
        this.inputPrefixSuffixCode = inputCode.inputPrefixSuffixCode;
        this.inputFormatTooltipCode = inputCode.inputFormatTooltipCode;
        this.inputWithClearIcon = inputCode.inputWithClearIcon;
        this.inputPasswordBox = inputCode.inputPasswordBox;
    }
}