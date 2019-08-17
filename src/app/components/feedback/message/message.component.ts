import { Component } from '@angular/core';
import { concatMap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

let messageCode = require('../../../../assets/data/syntax/components/feedback/messageCode.json');
declare var require: any

@Component({
    templateUrl: './message.component.html'
})    

export class MessageComponent {

    //Code Highlight
    messageNormalPromptCode: string
    messageTypesCode: string
    messageCustomizeDurationCode: string
    messageLoadingCode: string
    messageSequenceCode: string
    messageAPICode : string

    constructor(private message: NzMessageService) {
    }
  
    createBasicMessage(): void {
        this.message.info('This is a normal message');
    }

    createTypeMessage(type: string): void {
        this.message.create(type, `This is a message of ${type}`);
    }

    createDurationMessage(): void {
        this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', { nzDuration: 10000 });
    } 

    createLoadingMessage(): void {
        const id = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
        setTimeout(_ => {
            this.message.remove(id);
        }, 2500);
    }

    startShowMessages(): void {
        this.message
        .loading('Action in progress', { nzDuration: 2500 })
        .onClose!.pipe(
            concatMap(() => this.message.success('Loading finished', { nzDuration: 2500 }).onClose!),
            concatMap(() => this.message.info('Loading finished is finished', { nzDuration: 2500 }).onClose!)
        )
        .subscribe(() => {
            console.log('All completed!');
        });
    }

    ngOnInit(): void {
        //Code Highlight
        this.messageNormalPromptCode = messageCode.messageNormalPromptCode;
        this.messageTypesCode = messageCode.messageTypesCode;
        this.messageCustomizeDurationCode = messageCode.messageCustomizeDurationCode;
        this.messageLoadingCode = messageCode.messageLoadingCode;
        this.messageSequenceCode = messageCode.messageSequenceCode;
        this.messageAPICode = messageCode.messageAPICode;
    }
}



