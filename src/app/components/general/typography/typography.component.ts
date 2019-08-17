import { Component } from '@angular/core'

let typographyCode = require('../../../../assets/data/syntax/components/general/typographyCode.json');
declare var require: any

@Component({
    templateUrl: './typography.component.html'
})

export class TypographyComponent {

    editStr = 'This is an editable text.';
    copyStr = 'This is a copyable text.';

    dynamicContent = `Ant Design, a design language for background applications, is refined by Ant UED Team.
                      Ant Design, a design language for background applications, is refined by Ant UED Team.
                      Ant Design, a design language for background applications, is refined by Ant UED Team.`;

    onChange(event: string): void {
        this.dynamicContent = event;
    }

    //Code Highlight
    typographyBasicCode: string
    typographyTitleCode: string
    typographyInteractiveCode: string
    typographyTextCode: string
    typographyEllipsisCode: string

    ngOnInit(): void {

        //Code Highlight
        this.typographyBasicCode = typographyCode.typographyBasicCode;
        this.typographyTitleCode = typographyCode.typographyTitleCode;
        this.typographyInteractiveCode = typographyCode.typographyInteractiveCode;
        this.typographyTextCode = typographyCode.typographyTextCode;
        this.typographyEllipsisCode = typographyCode.typographyEllipsisCode;
    }
}  