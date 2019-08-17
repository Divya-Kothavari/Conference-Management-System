import { Component } from '@angular/core'

let affixCode = require('../../../../assets/data/syntax/components/navigation/affixCode.json');
declare var require: any

@Component({
    templateUrl: './affix.component.html',
    styles: [`
        :host ::ng-deep .scrollable-container {
            height: 100px;
            overflow-y: scroll;
        }

        :host ::ng-deep .background {
            padding-top: 60px;
            height: 300px;
            background-image: url(assets/images/object-bg.jpg);
        }
    `]
})

export class AffixComponent {

    //Code Hightlight
    AffixBasicCode: string
    AffixContainerToScrollCode: string
    AffixCallbackCode: string

    onChange (status: boolean) {
        console.log(status);
    }

    ngOnInit(): void {
        //Code Hightlight
        this.AffixBasicCode = affixCode.AffixBasicCode;
        this.AffixContainerToScrollCode = affixCode.AffixContainerToScrollCode;
        this.AffixCallbackCode = affixCode.AffixCallbackCode;
    }    
}  