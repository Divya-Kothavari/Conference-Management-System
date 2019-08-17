import { Component } from '@angular/core';

let timepickerCode = require('../../../../assets/data/syntax/components/data-entry/timepickerCode.json');
declare var require: any

@Component({
    templateUrl: './time-picker.component.html'
})   

export class TimePickerComponent {

    //Code Highlight
    timePickerBasicCode: string
    timePickerDataBindingCode: string
    timePickerSizeCode: string
    timePickerDisabledCode: string
    timePickerHourMinuteCode: string
    timePickerIntervalCode: string
    timeAddOnCode: string
    timePickerDisabledPartCode: string
    timePickerAPICode: string

    timePickerBasicTime: Date | null = null;
    timePickerDataBindingTime: Date | null = null;
    timePickerSizeTime = new Date();
    timePickerHourMinuteTime = new Date();
    timeAddOntime : Date | null = null;

    timePickerBasicDefaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

    
    timePickerDataBindinglog(time: Date): void {
        console.log(time && time.toTimeString());
    }

    timePickerDisabledHours(): number[] {
        return [ 1, 2, 3 ];
    }
    
    timePickerDisabledMinutes(hour: number): number[] {
        if (hour === 4) {
            return [ 20, 21, 22, 23, 24, 25 ];
        } else {
            return [];
        }
    }
    
    timePickerDisabledSeconds(hour: number, minute: number): number[] {
        if ((hour === 5) && (minute === 1)) {
            return [ 20, 21, 22, 23, 24, 25 ];
        } else {
            return [];
        }
    }

    ngOnInit(): void {

        //Code Highlight
        this.timePickerBasicCode = timepickerCode.timePickerBasicCode;
        this.timePickerDataBindingCode = timepickerCode.timePickerDataBindingCode;
        this.timePickerSizeCode = timepickerCode.timePickerSizeCode;
        this.timePickerDisabledCode = timepickerCode.timePickerDisabledCode;
        this.timePickerHourMinuteCode = timepickerCode.timePickerHourMinuteCode;
        this.timePickerIntervalCode = timepickerCode.timePickerIntervalCode;
        this.timeAddOnCode = timepickerCode.timeAddOnCode;
        this.timePickerDisabledPartCode = timepickerCode.timePickerDisabledPartCode;
        this.timePickerAPICode = timepickerCode.timePickerAPICode;
    }
}    