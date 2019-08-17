import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzEmptyService } from 'ng-zorro-antd';

let emptyCode = require('../../../../assets/data/syntax/components/data-display/emptyCode.json');
declare var require: any

@Component({
    templateUrl: './empty.component.html'
})

export class EmptyComponent {
    
    //Code Highlight
    emptyBasicCode : string
    emptyCustomizeCode : string
    emptyDefaultConfigCode : string

    customize = false;

    ngOnInit() {
        this.emptyBasicCode = emptyCode.emptyBasicCode;
        this.emptyCustomizeCode = emptyCode.emptyCustomizeCode;
        this.emptyDefaultConfigCode = emptyCode.emptyDefaultConfigCode;
    }

    constructor(private nzEmptyService: NzEmptyService) {}

    onClick(): void {
        console.log('clicked');
    }

    @ViewChild('customTpl', { static: true }) customTpl: TemplateRef<any>; // tslint:disable-line:no-any

    onConfigChange(): void {
        if (this.customize) {
            this.nzEmptyService.setDefaultContent(this.customTpl); // tslint:disable-line:no-any
        } else {
            this.nzEmptyService.resetDefault();
        }
    }
}    