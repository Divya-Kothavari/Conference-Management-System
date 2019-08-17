import { Component, OnInit } from '@angular/core';

let tabCode = require('../../../../assets/data/syntax/components/data-display/tabCode.json');
declare var require: any

@Component({
    templateUrl: './tabs.component.html'
})

export class TabsComponent implements OnInit {

    //Code Highlight
    tabsBasicCode: string
    tabsDisabledCode: string
    tabsIconCode: string
    tabsSlideCode: string
    tabsExtraContentCode: string
    tabsSizeCode: string
    tabsPositionCode: string
    tabsCardTypeCode: string
    tabsCustomizedCode: string
    tabsLazyCode: string
    tabsRouterCode: string

    tabsDisabled = [
        {
            name    : 'Tab 1',
            disabled: false
        },
        {
            name    : 'Tab 2',
            disabled: true
        },
        {
            name    : 'Tab 3',
            disabled: false
        }
    ];

    tabsIcon = [
        {
            active: true,
            name  : 'Tab 1',
            icon  : 'anticon anticon-apple'
        },
        {
            active: false,
            name  : 'Tab 2',
            icon  : 'anticon anticon-android'
        }
    ];
    tabsSlide = [];

    tabsIndex = [ 1, 2, 3 ];

    tabOptions = [
        { value: 'top', label: 'top' },
        { value: 'left', label: 'left' },
        { value: 'right', label: 'right' },
        { value: 'bottom', label: 'bottom' }
    ];

    tabCustomized = [ 'Tab 1', 'Tab 2' ];

    tabSize = 'small';
    tabsSlidePosition = 'top';
    tabsSlideSelectedIndex = 0;
    tabsPosition = 'top';
    tabCustomizedIndex = 0;


    tabsSlideLog(args: any[]): void {
        console.log(args);
    }

    tabCustomizedCloseTab(tab: string): void {
        this.tabCustomized.splice(this.tabCustomized.indexOf(tab), 1);
    }
    
    tabCustomizedNewTab(): void {
        this.tabCustomized.push('New Tab');
        this.tabCustomizedIndex = this.tabCustomized.length - 1;
    }

    ngOnInit(): void {
        for (let i = 0; i < 11; i++) {
            this.tabsSlide.push({
                name   : `Tab ${i}`,
                content: `Content of tab ${i}`
            });
        }

        //Code Highlight
        this.tabsBasicCode = tabCode.tabsBasicCode;
        this.tabsDisabledCode = tabCode.tabsDisabledCode;
        this.tabsIconCode = tabCode.tabsIconCode;
        this.tabsSlideCode = tabCode.tabsSlideCode;
        this.tabsExtraContentCode = tabCode.tabsExtraContentCode;
        this.tabsSizeCode = tabCode.tabsSizeCode;
        this.tabsPositionCode = tabCode.tabsPositionCode;
        this.tabsCardTypeCode = tabCode.tabsCardTypeCode;
        this.tabsCustomizedCode = tabCode.tabsCustomizedCode;
        this.tabsLazyCode = tabCode.tabsLazyCode;
        this.tabsRouterCode = tabCode.tabsRouterCode;
    }

}    