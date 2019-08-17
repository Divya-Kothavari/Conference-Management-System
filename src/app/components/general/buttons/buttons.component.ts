import { Component } from '@angular/core'

let buttonsCode = require('../../../../assets/data/syntax/components/general/buttonsCode.json');
declare var require: any

@Component({
    templateUrl: './buttons.component.html'
})

export class ButtonsComponent {

    //Code Hightlight
    buttonTypeCode: string
    buttonSizeCode: string
    buttonLoadingCode: string
    buttonGroupCode: string
    buttonIconCode: string
    buttonDisabledCode: string
    buttonMultipleCode: string
    buttonGhostCode: string
    buttonBlockCode: string

    size = 'large';
    isLoadingOne = false;
    isLoadingTwo = false;

    loadOne(): void {
        this.isLoadingOne = true;
        setTimeout(_ => {
            this.isLoadingOne = false;
        }, 5000);
    }

    loadTwo(): void {
        this.isLoadingTwo = true;
        setTimeout(_ => {
            this.isLoadingTwo = false;
        }, 5000);
    }

    ngOnInit(): void {
        this.buttonTypeCode = buttonsCode.buttonTypeCode;
        this.buttonSizeCode = buttonsCode.buttonSizeCode;
        this.buttonLoadingCode = buttonsCode.buttonLoadingCode;
        this.buttonGroupCode = buttonsCode.buttonGroupCode;
        this.buttonIconCode = buttonsCode.buttonIconCode;
        this.buttonDisabledCode = buttonsCode.buttonDisabledCode;
        this.buttonMultipleCode = buttonsCode.buttonMultipleCode;
        this.buttonGhostCode = buttonsCode.buttonGhostCode;
        this.buttonBlockCode = buttonsCode.buttonBlockCode;
    }    
}  