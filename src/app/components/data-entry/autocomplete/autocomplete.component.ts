import { Component, ViewEncapsulation, OnInit } from '@angular/core';

let autocompleteCode = require('../../../../assets/data/syntax/components/data-entry/autocompleteCode.json');
declare var require: any

@Component({
    templateUrl: './autocomplete.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .global-search-item-count {
            position: absolute;
            right: 16px;
        }

        .certain-search-item-count {
            position: absolute;
            color: #999;
            right: 16px;
        }
        
        .more-link {
            float: right;
        }

        .ant-select-dropdown-menu-item-group-title {
            color: #333;
        }

        .ant-select-dropdown-menu-item-group-list {
            border-bottom: 1px solid #ececec;
        }
    `]
})

export class AutocompleteComponent implements OnInit {
    
    //Code Highlight
    autocompleteBasicCode: string
    autocompleteCustomizedCode: string
    autocompleteCustomizeInputCode: string
    autocompleteNoneCaseSensitiveCode: string
    autocompleteUncertainCatCode: string
    autocompleteCertainCatCode: string
    autocompleteAPICode: string
    autocompleteAPI2Code: string

    autocompleteBasicValue: string;
    autocompleteCustomizedValue: string;
    autocompleteCustomizedInputValue: string;
    autocompleteNoneCaseSensitiveValue: string;
    autocompleteUncertainCatInputValue: string;
    autocompleteCertainCatInputValue: string;
    autocompleteBasicOptions = [];
    autocompleteCustomizedOptions = [];
    autocompleteCustomizedInputOptions = [];
    autocompleteNoneCaseSensitiveOptions = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
    autocompleteNoneCaseSensitiveFilteredOptions = [];  
    autocompleteUncertainCatOoptions = [];

    optionGroups: any[];

    
    constructor() {
        this.autocompleteNoneCaseSensitiveFilteredOptions = this.autocompleteNoneCaseSensitiveOptions;
    }
    
    onInput(value: string): void {
        this.autocompleteBasicOptions = value ? [
            value,
            value + value,
            value + value + value,
        ] : [];
    }

    onInputTextarea(value: string): void {
        this.autocompleteCustomizedInputOptions = value ? [
            value,
            value + value,
            value + value + value,
        ] : [];
    }

    onChange(value: string): void {
        if (!value || value.indexOf('@') >= 0) {
            this.autocompleteCustomizedOptions = [];
        } else {
            this.autocompleteCustomizedOptions = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
    }

    onInputNoneCaseSensitive(value: string): void {
        this.autocompleteNoneCaseSensitiveFilteredOptions = this.autocompleteNoneCaseSensitiveOptions
        .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
    }


    onChangeUncertainCat(value: string): void {
        this.autocompleteUncertainCatOoptions = new Array(this.getRandomInt(15, 5)).join('.').split('.')
        .map((item, idx) => ({
            value,
            category: `${value}${idx}`,
            count: this.getRandomInt(200, 100),
        }));
    }

    onChangeCertainCat(value: any): void {
        console.log(value);
    }

    private getRandomInt(max: number, min: number = 0): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ngOnInit(): void {

        //Code Highlight
        this.autocompleteBasicCode = autocompleteCode.autocompleteBasicCode;
        this.autocompleteCustomizedCode = autocompleteCode.autocompleteCustomizedCode;
        this.autocompleteCustomizeInputCode = autocompleteCode.autocompleteCustomizeInputCode;
        this.autocompleteNoneCaseSensitiveCode = autocompleteCode.autocompleteNoneCaseSensitiveCode;
        this.autocompleteUncertainCatCode = autocompleteCode.autocompleteUncertainCatCode;
        this.autocompleteCertainCatCode = autocompleteCode.autocompleteCertainCatCode;
        this.autocompleteAPICode = autocompleteCode.autocompleteAPICode;
        this.autocompleteAPI2Code = autocompleteCode.autocompleteAPI2Code;

        setTimeout(() => {
            this.optionGroups = [{
                title: 'Topics',
                children: [{
                    title: 'AntDesign',
                    count: 10000
                },{
                    title: 'AntDesign UI',
                    count: 10600
                }]
            },              {
                title: 'Questions',
                children: [{
                    title: 'AntDesign UI Features',
                    count: 60100
                },{
                    title: 'What is AntDesign',
                    count: 30010
                }]
            },{
                title: 'Articles',
                children: [{
                    title: 'AntDesign is a design language',
                    count: 100000
                }]
            }];
        }, 1000);
    }
}
