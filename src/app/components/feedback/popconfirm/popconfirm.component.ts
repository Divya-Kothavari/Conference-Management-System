import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

let popconfirmCode = require('../../../../assets/data/syntax/components/feedback/popconfirmCode.json');
declare var require: any

@Component({
    templateUrl: './popconfirm.component.html'
})    

export class PopconfirmComponent {

    //Code Highlight
    popconfirmBasicCode: string
    popconfirmLocaleTextCode: string
    popconfirmPlacementCode: string
    popconfirmConditionalTriggerCode: string
    popconfirmCustomIconCode: string

    switchValue = false;

    constructor(private nzMessageService: NzMessageService) {
    
    }

    popconfirmBasicCancel(): void {
        this.nzMessageService.info('click cancel');
    }
    
    popconfirmBasicConfirm(): void {
        this.nzMessageService.info('click confirm');
    }

    popconfirmLocaleTextCancel(): void {
        this.nzMessageService.info('click cancel');
    }

    popconfirmLocaleTextConfirm(): void {
        this.nzMessageService.info('click confirm');
    }
    
    popconfirmPlacementCancel(): void {
        this.nzMessageService.info('click cancel');
    }
    
    popconfirmPlacementConfirm(): void {
        this.nzMessageService.info('click confirm');
    }

    popconfirmConditionTriggerCancel(): void {
        this.nzMessageService.info('click cancel');
    }

    popconfirmConditionTriggerConfirm(): void {
        this.nzMessageService.info('click confirm');
    }

    ngOnInit(): void {
        
        //Code Highlight
        this.popconfirmBasicCode = popconfirmCode.popconfirmBasicCode;
        this.popconfirmLocaleTextCode = popconfirmCode.popconfirmLocaleTextCode;
        this.popconfirmPlacementCode = popconfirmCode.popconfirmPlacementCode;
        this.popconfirmConditionalTriggerCode = popconfirmCode.popconfirmConditionalTriggerCode;
        this.popconfirmCustomIconCode = popconfirmCode.popconfirmCustomIconCode;
    }
}    

