import { Component, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

let notificationCode = require('../../../../assets/data/syntax/components/feedback/notificationCode.json');
declare var require: any

@Component({
    templateUrl: './notification.component.html'
})    

export class NotificationComponent {

    //Code Highlight
    notificationBasicCode: string
    notificationDurationCode: string
    notificationIconCode: string
    notificationCustomCloseCode: string
    notificationCustomIconCode: string
    notificationPlacementCode: string
    notificationCustomeStyleCode: string
    notificationAPICode: string

    placement = 'topRight';

    constructor(private notification: NzNotificationService) {
    }
  
    createBasicNotification(): void {
      this.notification.blank( 'Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
    }

    createDurationNotification(): void {
        this.notification.blank('Notification Title', 'I will never close automatically. I will be close automatically. I will never close automatically.', { nzDuration: 0 });
    }

    createIconNotification(type: string): void {
        this.notification.create(type, 'Notification Title',
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
    }

    createCustomCloseNotification(template: TemplateRef<{}>): void {
        this.notification.template(template);
    }

    createCustomIconNotification(template: TemplateRef<{}>): void {
        this.notification.template(template);
    }

    clearBeforeNotifications(): void {
        this.notification.remove();
    }

    createPlacementNotification(): void {
        this.notification.config({
            nzPlacement: this.placement
        });
        this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
    }

    createCustomStyleNotification(): void {
        this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.', {
            nzStyle: {
                width     : '600px',
                marginLeft: '-265px'
            },
            nzClass: 'test-class'
        });
    }

    ngOnInit(): void {
        this.notificationBasicCode = notificationCode.notificationBasicCode;
        this.notificationDurationCode = notificationCode.notificationDurationCode;
        this.notificationIconCode = notificationCode.notificationIconCode;
        this.notificationCustomCloseCode = notificationCode.notificationCustomCloseCode;
        this.notificationCustomIconCode = notificationCode.notificationCustomIconCode;
        this.notificationPlacementCode = notificationCode.notificationPlacementCode;
        this.notificationCustomeStyleCode = notificationCode.notificationCustomeStyleCode;
        this.notificationAPICode = notificationCode.notificationAPICode;
    }
}


