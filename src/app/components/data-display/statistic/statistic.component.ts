import { Component } from '@angular/core'

let statisticCode = require('../../../../assets/data/syntax/components/data-display/statisticCode.json');
declare var require: any

@Component({
    templateUrl: './statistic.component.html'
})

export class StatisticComponent {

    //Code Highlight

    statisticBasicCode : string
    statisticUnitCode : string
    statisticInCardCode : string
    statisticCountdownCode : string

    ngOnInit(): void {
        this.statisticBasicCode = statisticCode.statisticBasicCode
        this.statisticUnitCode = statisticCode.statisticUnitCode
        this.statisticInCardCode = statisticCode.statisticInCardCode
        this.statisticCountdownCode = statisticCode.statisticCountdownCode
    }
    
    deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
}    