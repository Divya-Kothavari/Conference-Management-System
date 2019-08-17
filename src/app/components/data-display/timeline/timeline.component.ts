import { Component } from '@angular/core';

let timelineCode = require('../../../../assets/data/syntax/components/data-display/timelineCode.json');
declare var require: any

@Component({
    templateUrl: './timeline.component.html'
})

export class TimelineComponent {

    //Code Highlight
    timelineBasicCode: string;
    timelineColorCode: string;
    timelineLastNodeCode: string;
    timelineAlternateCode: string;
    timelineCustomCode: string;
    timelineRightAlternateCode: string;
    timelineAPICode: string;

    ngOnInit(): void {
        
        //Code Highlight
        this.timelineBasicCode = timelineCode.timelineBasicCode;
        this.timelineColorCode = timelineCode.timelineColorCode;
        this.timelineLastNodeCode = timelineCode.timelineLastNodeCode;
        this.timelineCustomCode = timelineCode.timelineCustomCode;
        this.timelineAlternateCode = timelineCode.timelineAlternateCode;
        this.timelineRightAlternateCode = timelineCode.timelineRightAlternateCode;
        this.timelineAPICode = timelineCode.timelineAPICode;
    }
}    