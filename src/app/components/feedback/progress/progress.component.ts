import { Component } from '@angular/core';

let progressCode = require('../../../../assets/data/syntax/components/feedback/progressCode.json');
declare var require: any

@Component({
    templateUrl: './progress.component.html'
})    

export class ProgressComponent {

    //Code Highlight
    progressBasicCode: string
    progressCircularCode: string
    progressMiniCode: string
    progressMiniCircularCode: string
    progressDynamicCircularCode: string
    progressDynamicCode: string
    progressCustomTextCode: string
    progressDashboardCode: string
    progressSuccessSegmentCode: string

    circularPercent = 0;

    circularIncrease(): void {
        this.circularPercent = this.circularPercent + 10;
        if (this.circularPercent > 100) {
            this.circularPercent = 100;
        }
    }

    circularDecline(): void {
        this.circularPercent = this.circularPercent - 10;
        if (this.circularPercent < 0) {
            this.circularPercent = 0;
        }
    }

    percent = 0;

    increase(): void {
        this.percent = this.percent + 10;
        if (this.percent > 100) {
            this.percent = 100;
        }
    }

    decline(): void {
        this.percent = this.percent - 10;
        if (this.percent < 0) {
            this.percent = 0;
        }
    }

    formatOne = percent => `${percent} Days`;
    formatTwo = () => `Done`;

    ngOnInit(): void {

        //Code Highlight
        this.progressBasicCode = progressCode.progressBasicCode;
        this.progressCircularCode = progressCode.progressCircularCode;
        this.progressMiniCode = progressCode.progressMiniCode;
        this.progressMiniCircularCode = progressCode.progressMiniCircularCode;
        this.progressDynamicCircularCode = progressCode.progressDynamicCircularCode;
        this.progressDynamicCode = progressCode.progressDynamicCode;
        this.progressCustomTextCode = progressCode.progressCustomTextCode;
        this.progressDashboardCode = progressCode.progressDashboardCode;
        this.progressSuccessSegmentCode = progressCode.progressSuccessSegmentCode;
    }
}    



