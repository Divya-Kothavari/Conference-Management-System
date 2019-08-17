import { Component } from '@angular/core'

let pageHeaderCode = require('../../../../assets/data/syntax/components/navigation/pageheaderCode.json');
declare var require: any

@Component({
    templateUrl: './page-header.component.html'
})

export class pageHeaderComponent {

    //Code Hightlight
    pageHeaderBasicCode : string
    pageHeaderBreadcrumbCode : string
    pageHeaderContentCode : string
    pageHeaderComplexCode : string
    pageHeaderAPICode : string

    ngOnInit(): void {
        
        //Code Hightlight
        this.pageHeaderBasicCode = pageHeaderCode.pageHeaderBasicCode
        this.pageHeaderBreadcrumbCode = pageHeaderCode.pageHeaderBreadcrumbCode
        this.pageHeaderContentCode= pageHeaderCode.pageHeaderContentCode
        this.pageHeaderComplexCode = pageHeaderCode.pageHeaderComplexCode
        this.pageHeaderAPICode = pageHeaderCode.pageHeaderAPICode
    }

    onBack() {
        console.log('onBack');
    }
}    