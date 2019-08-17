import { Component } from '@angular/core';

let calendarCode = require('../../../../assets/data/syntax/components/data-display/calendarCode.json');
declare var require: any

@Component({
    templateUrl: './calendar.component.html',
})

export class CalendarComponent {

    //Code Highlight
    calendarBasicCode: string;
    calendarNoticeCode: string;
    calendarCardCode: string;
    calendarSelectableCode: string;
    calendarAPICode: string;
    calendarAPI2Code: string;

    calendarBasicDate = new Date(2012, 11, 21);
    calendarSelectableSelectedValue = new Date('2017-01-25');

    calendarBasicMode = 'month';

    listDataMap = {
        eight : [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' }
        ],
        ten   : [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' }
        ],
        eleven: [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event........' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' }
        ]
    };
    
    getMonthData(date: Date): number | null {
        if (date.getMonth() === 8) {
          return 1394;
        }
        return null;
    }

    calendarCardOnValueChange(value: Date): void {
        console.log(`Current value: ${value}`);
    }

    calendarCardOnModeChange(mode: 'month'|'year'): void {
        console.log(`Current mode: ${mode}`);
    }

    ngOnInit() {

        //Code Highlight
        this.calendarBasicCode = calendarCode.calendarBasicCode;
        this.calendarNoticeCode = calendarCode.calendarNoticeCode;
        this.calendarCardCode = calendarCode.calendarCardCode;
        this.calendarSelectableCode = calendarCode.calendarSelectableCode;
        this.calendarAPICode = calendarCode.calendarAPICode;
        this.calendarAPI2Code = calendarCode.calendarAPI2Code;
    }    
}    