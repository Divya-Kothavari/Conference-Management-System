import { Component } from '@angular/core'

let paginationCode = require('../../../../assets/data/syntax/components/navigation/paginationCode.json');
declare var require: any

@Component({
    templateUrl: './pagination.component.html'
})

export class paginationComponent {

    //Code Highlight
    paginationBasicCode: string
    paginationMoreCode: string
    paginationChangerCode: string 
    paginationJumperCode: string 
    paginationMiniSizeCode: string 
    paginationSimpleCode: string 
    paginationPageIndexCode: string 
    paginationTotalNumberCode: string
    paginationPrevNextCode: string 
    paginationAPICode: string 

    current = 1;

    ngOnInit(): void {
        //Code Highlight
        this.paginationBasicCode = paginationCode.paginationBasicCode;
        this.paginationMoreCode = paginationCode.paginationMoreCode;
        this.paginationChangerCode  = paginationCode.paginationChangerCode;
        this.paginationJumperCode = paginationCode.paginationJumperCode;
        this.paginationMiniSizeCode = paginationCode.paginationMiniSizeCode;
        this.paginationSimpleCode = paginationCode.paginationSimpleCode;
        this.paginationPageIndexCode = paginationCode.paginationPageIndexCode;
        this.paginationTotalNumberCode = paginationCode.paginationTotalNumberCode;
        this.paginationPrevNextCode = paginationCode.paginationPrevNextCode;
        this.paginationAPICode  = paginationCode.paginationAPICode;

    }
}    