import { Component } from '@angular/core'

let antGridCode = require('../../../../assets/data/syntax/components/general/antGridCode.json');
declare var require: any

@Component({
    templateUrl: './ant-grid.component.html',
    styles: [`
        
    `]
})

export class AntGridComponent {

    antGridBasicCode: string
    antGridGutterCode: string
    antGridOffsetCode: string
    antGridSortCode: string
    antGridFlexLayoutCode: string
    antGridFlexAlignmentCode: string
    antGridFlexOrderCode: string
    antGridResponsiveCode: string
    antGridMoreResponsiveCode: string
    antGridPlaygroundCode: string

    orderList = [ 1, 2, 3, 4 ];

    gutter = 16;
    count = 4;
    marksGutter = {
        8 : 8,
        16: 16,
        24: 24,
        32: 32,
        40: 40,
        48: 48
    };
    marksCount = {
        2 : 2,
        3 : 3,
        4 : 4,
        6 : 6,
        8 : 8,
        12: 12
    };

    generateArray(value: number): number[] {
        return new Array(value);
    }

    ngOnInit(): void {
        this.antGridBasicCode = antGridCode.antGridBasicCode;
        this.antGridGutterCode = antGridCode.antGridGutterCode;
        this.antGridOffsetCode = antGridCode.antGridOffsetCode;
        this.antGridSortCode = antGridCode.antGridSortCode;
        this.antGridFlexLayoutCode = antGridCode.antGridFlexLayoutCode;
        this.antGridFlexAlignmentCode = antGridCode.antGridFlexAlignmentCode;
        this.antGridFlexOrderCode = antGridCode.antGridFlexOrderCode;
        this.antGridResponsiveCode = antGridCode.antGridResponsiveCode;
        this.antGridMoreResponsiveCode = antGridCode.antGridMoreResponsiveCode;
        this.antGridPlaygroundCode = antGridCode.antGridPlaygroundCode;

        setTimeout(_ => {
            this.orderList = [ ...this.orderList.reverse() ];
        }, 10000);
    }    
}  


