import { Component } from '@angular/core'

let stepsCode = require('../../../../assets/data/syntax/components/navigation/stepsCode.json');
declare var require: any

@Component({
    templateUrl: './steps.component.html',
    styles  : [
        `
        .steps-content {
            margin-top: 25px;
            border: 1px dashed #e9e9e9;
            border-radius: 6px;
            background-color: #fafafa;
            min-height: 200px;
            text-align: center;
            padding-top: 80px;
        }
      `
    ]
})

export class stepsComponent {

    //Code Highlight
    stepsBasicCode: string
    stepsMiniCode: string
    stepsWithIconCode: string
    stepsSwitchStepsCode: string
    stepsVerticalCode: string
    stepsVerticalMiniCode: string
    stepsErrorStatusCode: string
    stepsDotStyleCode: string
    stepsCustomizeDotStyleCode: string
    stepsAPICode: string

    basicCurrent = 1;
    swicthStepCurrent = 0;
    index = 'First-content';

    pre(): void {
        this.swicthStepCurrent -= 1;
        this.changeContent();
    }

    next(): void {
        this.swicthStepCurrent += 1;
        this.changeContent();
    }

    done(): void {
        console.log('done');
    }

    changeContent(): void {
        switch (this.swicthStepCurrent) {
            case 0: {
                this.index = 'First-content';
                break;
            }
            case 1: {
                this.index = 'Second-content';
                break;
            }
            case 2: {
                this.index = 'third-content';
                break;
            }
            default: {
                this.index = 'error';
            }
        }
    }
    
    ngOnInit(): void {
        //Code Highlight
        this.stepsBasicCode = stepsCode.stepsBasicCode;
        this.stepsMiniCode = stepsCode.stepsMiniCode;
        this.stepsWithIconCode = stepsCode.stepsWithIconCode;
        this.stepsSwitchStepsCode = stepsCode.stepsSwitchStepsCode;
        this.stepsVerticalCode = stepsCode.stepsVerticalCode;
        this.stepsVerticalMiniCode = stepsCode.stepsVerticalMiniCode;
        this.stepsErrorStatusCode = stepsCode.stepsErrorStatusCode;
        this.stepsDotStyleCode = stepsCode.stepsDotStyleCode;
        this.stepsCustomizeDotStyleCode = stepsCode.stepsCustomizeDotStyleCode;
        this.stepsAPICode = stepsCode.stepsAPICode;
    }
}    