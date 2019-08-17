import { Component } from '@angular/core';
import * as getISOWeek from 'date-fns/get_iso_week';
import * as differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import * as setHours from 'date-fns/set_hours';
import * as endOfMonth from 'date-fns/end_of_month';

let datepickerCode = require('../../../../assets/data/syntax/components/data-entry/datepickerCode.json');
declare var require: any

@Component({
    templateUrl: './date-picker.component.html'
})    

export class DatePickerComponent {

    //Code Highlight
    datepickerBasicCode: string
    datepickerDateFormatCode: string
    datepickerSizeCode: string
    datepickerChooseTimeCode: string
    datepickerDisabledCode: string
    datepickerDisabledDNTCode: string
    datepickerCustomizedRangeCode: string
    datepickerPresettedRangeCode: string
    datepickerExtraFooterCode: string
    datepickeControlledPanelCode: string
    datepickerCustomizedDateRenderingCode: string
    datepickerAPICode: string

    date = null; 
    dateRange = []; 
    dateFormat = 'yyyy/MM/dd';
    monthFormat = 'yyyy/MM';
    size = 'default';
    today = new Date();
    timeDefaultValue = setHours(new Date(), 0);
    startValue: Date = null;
    endValue: Date = null;
    endOpen: boolean = false;
    ranges1 = { 'Today': [ new Date(), new Date() ], 'This Month': [ new Date(), endOfMonth(new Date()) ] };
    ranges2 = { 'Today': [ new Date(), new Date() ], 'This Month': [ new Date(), endOfMonth(new Date()) ] };
    plainFooter = 'plain extra footer';
    dateMode = 'time';
    
    datepickerBasicOnChange(result: Date): void {
        console.log('onChange: ', result);
    }
    
    getWeek(result: Date): void {
        console.log('week: ', getISOWeek(result));
    }

    datepickerChooseTimeOnChange(result: Date): void {
        console.log('Selected Time: ', result);
    }

    datepickerChooseTimeOnOk(result: Date): void {
        console.log('onOk', result);
    }

    range(start: number, end: number): number[] {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    disabledDate = (current: Date): boolean => {
        // Can not select days before today and today
        return differenceInCalendarDays(current, this.today) > 0;
    };

    disabledDateTime = (): object => {
        return {
            nzDisabledHours  : () => this.range(0, 24).splice(4, 20),
            nzDisabledMinutes: () => this.range(30, 60),
            nzDisabledSeconds: () => [ 55, 56 ]
        };
    };

    disabledRangeTime = (value: Date[], type: 'start' | 'end'): object => {
        if (type === 'start') {
        return {
            nzDisabledHours  : () => this.range(0, 60).splice(4, 20),
            nzDisabledMinutes: () => this.range(30, 60),
            nzDisabledSeconds: () => [ 55, 56 ]
        };
        }
        return {
            nzDisabledHours  : () => this.range(0, 60).splice(20, 4),
            nzDisabledMinutes: () => this.range(0, 31),
            nzDisabledSeconds: () => [ 55, 56 ]
        };
    };

    disabledStartDate = (startValue: Date): boolean => {
        if (!startValue || !this.endValue) {
        return false;
        }
        return startValue.getTime() > this.endValue.getTime();
    };

    disabledEndDate = (endValue: Date): boolean => {
        if (!endValue || !this.startValue) {
        return false;
        }
        return endValue.getTime() <= this.startValue.getTime();
    };

    datepickerCustomizeOnStartChange(date: Date): void {
        this.startValue = date;
    }

    datepickerCustomizeOnEndChange(date: Date): void {
        this.endValue = date;
    }

    datepickerCustomizeHandleStartOpenChange(open: boolean): void {
        if (!open) {
            this.endOpen = true;
        }
        console.log('handleStartOpenChange', open, this.endOpen);
    }

    datepickerCustomizeHandleEndOpenChange(open: boolean): void {
        console.log(open);
        this.endOpen = open;
    }

    datepickerPresettedRangeOnChange(result: Date[]): void {
        console.log('From: ', result[ 0 ], ', to: ', result[ 1 ]);
    }

    footerRender = () => 'extra footer';

    handleDateOpenChange(open: boolean): void {
        if (open) {
            this.dateMode = 'time';
        }
    }

    handleDatePanelChange(mode: string): void {
        console.log('handleDatePanelChange: ', mode);
    }

    ngOnInit(): void {
        
        //Code Highlight
        this.datepickerBasicCode = datepickerCode.datepickerBasicCode;;
        this.datepickerDateFormatCode = datepickerCode.datepickerDateFormatCode;
        this.datepickerSizeCode = datepickerCode.datepickerSizeCode;
        this.datepickerChooseTimeCode = datepickerCode.datepickerChooseTimeCode;
        this.datepickerDisabledCode = datepickerCode.datepickerDisabledCode;
        this.datepickerDisabledDNTCode = datepickerCode.datepickerDisabledDNTCode;
        this.datepickerCustomizedRangeCode = datepickerCode.datepickerCustomizedRangeCode;
        this.datepickerPresettedRangeCode = datepickerCode.datepickerPresettedRangeCode;
        this.datepickerExtraFooterCode = datepickerCode.datepickerExtraFooterCode;
        this.datepickeControlledPanelCode = datepickerCode.datepickeControlledPanelCode;
        this.datepickerCustomizedDateRenderingCode = datepickerCode.datepickerCustomizedDateRenderingCode;
        this.datepickerAPICode = datepickerCode.datepickerAPICode;
    }
}    