import { Component } from '@angular/core';

let avatarCode = require('../../../../assets/data/syntax/components/data-display/avatarCode.json');
declare var require: any

const userList = [ 'U', 'Lucy', 'Tom', 'Edward' ];
const colorList = [ '#f56a00', '#7265e6', '#ffbf00', '#00a2ae' ];

@Component({
    templateUrl: './avatar.component.html',
})

export class AvatarComponent {
    
    //Code Highlight
    avatarBasicCode: string
    avatarTypeCode: string
    avatarFontSizeCode: string
    avatarBadgeCode: string
    avatarColorfulCode: string

    text: string = userList[ 3 ];
    color: string = colorList[ 3 ];

    change(): void {
        let idx = userList.indexOf(this.text);
        ++idx;
        if (idx === userList.length) idx = 0;
        this.text = userList[ idx ];
        this.color = colorList[ idx ];
    }

    ngOnInit() {

        //Code Highlight
        this.avatarBasicCode = avatarCode.avatarBasicCode;
        this.avatarTypeCode = avatarCode.avatarTypeCode;
        this.avatarFontSizeCode = avatarCode.avatarFontSizeCode;
        this.avatarBadgeCode = avatarCode.avatarBadgeCode;
        this.avatarColorfulCode = avatarCode.avatarColorfulCode;
    }
}    
