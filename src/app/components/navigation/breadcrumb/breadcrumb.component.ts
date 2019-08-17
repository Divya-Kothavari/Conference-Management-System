import { Component } from '@angular/core'

let breadcrumbCode = require('../../../../assets/data/syntax/components/navigation/breadcrumbCode.json');
declare var require: any

@Component({
    templateUrl: './breadcrumb.component.html'
})

export class BreadcrumbComponent {

    //Code Hightlight
    breadcrumbBasicCode: string
    breadcrumbRouterLinkCode: string
    breadcrumbIconCode: string
    breadcrumbSeperatorCode: string
    breadcrumbAutoGenerateCode: string
    breadcrumdAPICode: string

    ngOnInit(): void {
        
        //Code Hightlight
        this.breadcrumbBasicCode = breadcrumbCode.breadcrumbBasicCode;
        this.breadcrumbRouterLinkCode = breadcrumbCode.breadcrumbRouterLinkCode;
        this.breadcrumbIconCode = breadcrumbCode.breadcrumbIconCode;
        this.breadcrumbSeperatorCode = breadcrumbCode.breadcrumbSeperatorCode;
        this.breadcrumbAutoGenerateCode = breadcrumbCode.breadcrumbAutoGenerateCode;
        this.breadcrumdAPICode = breadcrumbCode.breadcrumdAPICode;
    }
}    