import { Component, OnInit } from '@angular/core';

let sliderCode = require('../../../../assets/data/syntax/components/data-entry/sliderCode.json');
declare var require: any

@Component({
    templateUrl: './slider.component.html',
    styles  : [
        `
        .icon-wrapper {
            position: relative;
            padding: 0px 30px;
        }
  
        .icon-wrapper ::ng-deep .anticon {
            position: absolute;
            top: -2px;
            width: 16px;
            height: 16px;
            line-height: 1;
            font-size: 16px;
            color: rgba(0, 0, 0, .25);
        }
  
        .icon-wrapper ::ng-deep .anticon:first-child {
            left: 0;
        }
  
        .icon-wrapper ::ng-deep .anticon:last-child {
            right: 0;
        }
      `
    ]
})   

export class SliderComponent implements OnInit {

    //Code Highlight
    sliderBasicCode: string
    sliderInputNumberCode: string
    sliderIconCode: string
    sliderCustomizeTooltipCode: string
    sliderEventCode: string
    sliderGraduatedCode: string
    sliderVerticalCode: string

    sliderBasicValue = false;
    sliderInputNumberValue1 = 1;
    sliderInputNumberValue2 = 0;
    sliderIconMin = 0;
    sliderIconMax = 20;
    sliderIconMid = parseFloat(((this.sliderIconMax - this.sliderIconMin) / 2).toFixed(5));
    sliderEventSingleValue;
    sliderEventRangeValue;
    
    preIconClassMap = {
        'anticon'        : true,
        'anticon-frown-o': true
    };
    nextIconClassMap = {
        'anticon'        : true,
        'anticon-smile-o': true
    };

    _selectIconSliderValue;
    set selectIconSliderValue(value: number) {
        this._selectIconSliderValue = value;
        this.highlightIcon();
    }

    get sliderValue() {
        return this._selectIconSliderValue;
    }

    ngOnInit() {
        this.selectIconSliderValue = 0;

        //Code Highlight
        this.sliderBasicCode = sliderCode.sliderBasicCode;
        this.sliderInputNumberCode = sliderCode.sliderInputNumberCode;
        this.sliderIconCode = sliderCode.sliderIconCode;
        this.sliderCustomizeTooltipCode = sliderCode.sliderCustomizeTooltipCode;
        this.sliderEventCode = sliderCode.sliderEventCode;
        this.sliderGraduatedCode = sliderCode.sliderGraduatedCode;
        this.sliderVerticalCode = sliderCode.sliderVerticalCode;
    }

    highlightIcon() {
        const lower = this._selectIconSliderValue >= this.sliderIconMid;
        this.preIconClassMap[ 'anticon-highlight' ] = !lower;
        this.nextIconClassMap[ 'anticon-highlight' ] = lower;
    }

    sliderTooltipFormatter(value) {
        return `${value}%`;
    }


    sliderEventOnChange(value) {
        console.log(`onChange: ${value}`);
    }

    sliderEventOnAfterChange(value) {
        console.log(`onAfterChange: ${value}`);
    }

    selectGraduatedMarks: any = {
        0  : '0°C',
        26 : '26°C',
        37 : '37°C',
        100: {
            style: {
                color: '#f50',
            },
            label: '<strong>100°C</strong>',
        }
    };
    
    selectGraduatedChangeMarks() {
        this.selectGraduatedMarks = {
            20: '20%',
            99: '99%',
        };
    }

    selectVerticalStyle = {
        float     : 'left',
        height    : '300px',
        marginLeft: '70px'
    };
    
    selectVerticalMarks = {
        0  : '0°C',
        26 : '26°C',
        37 : '37°C',
        100: {
            style: {
                color: '#f50',
            },
            label: '<strong>100°C</strong>',
        }
    };
}    