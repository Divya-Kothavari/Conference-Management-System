import { Component } from '@angular/core';

let checkboxCode = require('../../../../assets/data/syntax/components/data-entry/checkboxCode.json');
declare var require: any

@Component({
    templateUrl: './checkbox.component.html'
})    

export class CheckboxComponent {

    //Code Highlight
    checkboxBasicCode: string
    checkboxDisabledCode: string
    checkboxControlledCode: string
    checkboxGroupCode: string
    checkboxCheckAllCode: string
    checkboxWithGridCode: string

    checkboxBasicChecked = true;
    isCheckedButton = true;
    isDisabledButton = false;
    allChecked = false;
    indeterminate = true;

    checkOptionsOne = [
        { label: 'Apple', value: 'Apple', checked: true },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
    ];

    checkOptionsTwo = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear', checked: true },
        { label: 'Orange', value: 'Orange' }
    ];

    checkOptionsThree = [
        { label: 'Apple', value: 'Apple', disabled: true, checked: true },
        { label: 'Pear', value: 'Pear', disabled: true },
        { label: 'Orange', value: 'Orange' }
    ];

    checkOptionsFour = [
        { label: 'Apple', value: 'Apple', checked: true },
        { label: 'Pear', value: 'Pear', checked: false },
        { label: 'Orange', value: 'Orange', checked: false }
    ];

    checkButton(): void {
        this.isCheckedButton = !this.isCheckedButton;
    }

    disableButton(): void {
        this.isDisabledButton = !this.isDisabledButton;
    }

    updateAllChecked(): void {
        this.indeterminate = false;
        if (this.allChecked) {
            this.checkOptionsFour.forEach(item => item.checked = true);
        } else {
            this.checkOptionsFour.forEach(item => item.checked = false);
        }
    }
    
    updateSingleChecked(): void {
        if (this.checkOptionsFour.every(item => item.checked === false)) {
            this.allChecked = false;
            this.indeterminate = false;
        } else if (this.checkOptionsFour.every(item => item.checked === true)) {
            this.allChecked = true;
            this.indeterminate = false;
        } else {
            this.indeterminate = true;
        }
    }
    
    log(value: object[]): void {
        console.log(value);
    }

    ngOnInit(): void {
        
        //Code Highlight
        this.checkboxBasicCode = checkboxCode.checkboxBasicCode;
        this.checkboxDisabledCode = checkboxCode.checkboxDisabledCode;
        this.checkboxControlledCode = checkboxCode.checkboxControlledCode;
        this.checkboxGroupCode = checkboxCode.checkboxGroupCode;
        this.checkboxCheckAllCode = checkboxCode.checkboxCheckAllCode;
        this.checkboxWithGridCode = checkboxCode.checkboxWithGridCode;
    }
}