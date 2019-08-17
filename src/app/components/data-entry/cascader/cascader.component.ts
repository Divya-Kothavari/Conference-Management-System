import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

let cascaderCode = require('../../../../assets/data/syntax/components/data-entry/cascaderCode.json');
declare var require: any

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
        }]
    }, {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
    }]
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
        }]
    }]
}];
  
const otherOptions = [{
    value: 'fujian',
    label: 'Fujian',
    children: [{
        value: 'xiamen',
        label: 'Xiamen',
        children: [{
            value: 'Kulangsu',
            label: 'Kulangsu',
            isLeaf: true
        }]
    }]
  }, {
    value: 'guangxi',
    label: 'Guangxi',
    children: [{
    value: 'guilin',
    label: 'Guilin',
        children: [{
            value: 'Lijiang',
            label: 'Li Jiang River',
            isLeaf: true
        }]
    }]
}];

const optionsDisabled = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
        }]
    }, {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
        }]
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        disabled: true,
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
                isLeaf: true
            }]
    }]
}];

const provinces = [{
    value: 'zhejiang',
    label: 'Zhejiang'
    }, {
    value: 'jiangsu',
    label: 'Jiangsu'
}];

const cities = {
    zhejiang: [{
        value: 'hangzhou',
        label: 'Hangzhou'
    }, {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
    }],
    jiangsu: [{
        value: 'nanjing',
        label: 'Nanjing'
    }]
};
  
const scenicspots = {
    hangzhou: [{
        value: 'xihu',
        label: 'West Lake',
        isLeaf: true
    }],
    nanjing: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
        isLeaf: true
    }]
};

@Component({
    templateUrl: './cascader.component.html'
})    

export class CascaderComponent implements OnInit {

    //Code Highlight
    cascaderBasicCode: string
    cascaderDefaultValueCode: string
    cascaderCustomTriggerCode: string
    cascaderHoverCode: string
    cascaderDisabledValueCode: string
    cascaderChangeSelectCode: string
    cascaderSizeCode: string
    cascaderCustomRenderCode: string
    cascaderReactiveFormCode: string
    cascaderLazyLoadCode: string
    cascadeSelectSpecifiedCode: string
    cascadeModalCode: string
    cascadeSearchCode: string
    cascaderTriggerActionCode: string
    cascadeDefaultLazyCode: string
    cascadeDefaultAscyCode: string
    cascaderAPICode: string

    /** init data */
    public cascaderBasicOptions = null;
    public cascaderDefaultValueOptions = options;
    public cascaderCustomTriggerOptions = options;
    public cascaderHoverOptions = options;
    public cascaderDisabledOptions = optionsDisabled;
    public cascaderChangeSelectOptions = options;
    public cascaderSizeOptions = options;
    public cascaderCustomRenderOptions = options;
    public cascaderReactiveFormOptions = options;
    public cascaderSelectSpecifiedOptions = options;
    public cascadeModalOptions = options;
    public cascadeSearchOptions = null;
    public cascaderTriggerActionOptions = options;
    public cascadeDefaultAscyOptions = null;

    /** ngModel value */
    public cascaderBasicvalues: any[] = null;
    public cascaderDefaultValueValues: any[] = ['zhejiang', 'hangzhou', 'xihu'];
    public cascaderCustomTriggerValues: any[] = null;
    public cascaderHoverValues: any[] = null;
    public cascaderDisabledValues: any[] = null;
    public cascaderChangeSelectValues: any[] = null;
    public cascaderSizeLargeValues: any[] = null;
    public cascaderSizeMediumValues: any[] = null;
    public cascaderSizeSmallValues: any[] = null;    
    public cascaderCustomRenderValues: any[] = null;
    public cascaderLazyLoadValues: any[] = null;
    public cascaderSelectSpecifiedvalues: any[] = null;
    public cascadeModalOptionsValues: any[] = null;
    public cascadeSearchValues: any[] = null;
    public cascaderTriggerActionValues: any[] = null;
    public cascaderDefaultLazyValues: any[] = ['zhejiang', 'hangzhou', 'xihu'];
    public cascadeDefaultAscyValues: any[] = ['zhejiang', 'hangzhou', 'xihu'];
    

    public text = 'Unselect';
    public form: FormGroup;
    public isVisible = false;
    
    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit(): void {

        //Code Highlight
        this.cascaderBasicCode = cascaderCode.cascaderBasicCode;
        this.cascaderDefaultValueCode = cascaderCode.cascaderDefaultValueCode;
        this.cascaderCustomTriggerCode = cascaderCode.cascaderCustomTriggerCode;
        this.cascaderHoverCode = cascaderCode.cascaderHoverCode;
        this.cascaderDisabledValueCode = cascaderCode.cascaderDisabledValueCode;
        this.cascaderChangeSelectCode = cascaderCode.cascaderChangeSelectCode;
        this.cascaderSizeCode = cascaderCode.cascaderSizeCode;
        this.cascaderCustomRenderCode = cascaderCode.cascaderCustomRenderCode;
        this.cascaderReactiveFormCode = cascaderCode.cascaderReactiveFormCode;
        this.cascaderLazyLoadCode = cascaderCode.cascaderLazyLoadCode;
        this.cascadeSelectSpecifiedCode = cascaderCode.cascadeSelectSpecifiedCode;
        this.cascadeModalCode = cascaderCode.cascadeModalCode;
        this.cascadeSearchCode = cascaderCode.cascadeSearchCode;
        this.cascaderTriggerActionCode = cascaderCode.cascaderTriggerActionCode;
        this.cascadeDefaultLazyCode = cascaderCode.cascadeDefaultLazyCode;
        this.cascadeDefaultAscyCode = cascaderCode.cascadeDefaultAscyCode;
        this.cascaderAPICode = cascaderCode.cascaderAPICode;

        setTimeout(() => {
            this.cascaderBasicOptions = options;
        }, 100);

        
        setTimeout(() => {
            this.cascadeSearchOptions = options;
        }, 100);

        setTimeout(() => {
            this.cascadeDefaultAscyOptions = options;
        }, 500);
    }
  
    public changeNzOptions(): void {
        if (this.cascaderBasicOptions === options) {
            this.cascaderBasicOptions = otherOptions;
        } else {
            this.cascaderBasicOptions = options;
        }
    }
  
    public cascaderBasicOnChanges(values: any): void {
        console.log(values, this.cascaderBasicvalues);
    }

    public cascaderDefaultValueOnChanges(values: any): void {
        console.log(values, this.cascaderDefaultValueOptions);
    }

    public cascaderCustomTriggerOnChanges(values: any): void {
        console.log(values, this.cascaderCustomTriggerValues);
    }

    public customTriggerOnSelectionChange(selectedOptions: any[]): void {
        this.text = selectedOptions.map(o => o.label).join(', ');
    }

    public cascaderHoverOnChanges(values: any): void {
        console.log(values, this.cascaderHoverValues);
    }

    public cascaderDisabledOnChanges(values: any): void {
        console.log(values, this.cascaderDisabledValues);
    }

    public cascaderChangeSelectOnChanges(values: any): void {
        console.log(values, this.cascaderChangeSelectValues);
    }

    public cascaderSizeOnChanges(values: any): void {
        console.log(values);
    }

    public cascaderCustomRenderOnChanges(values: any): void {
        console.log(values, this.cascaderCustomRenderValues);
    }

    handleAreaClick(e: Event, label: string, option: any): void {
        e.preventDefault();
        e.stopPropagation();
        console.log('clicked \"', label, '\"', option);
    }

    private createForm(): void {
        this.form = this.fb.group({
            name: [ null, Validators.required ]
        });
    }

    public cascaderReactiveFormReset(): void {
        this.form.reset();
        console.log(this.form.value);
    }

    public cascaderReactiveFormSubmit(): void {
        console.log(this.form.value);
    }

    public cascaderReactiveFormOnChanges(values: any): void {
        console.log(values);
    }

    public cascaderLazyLoadOnChanges(values: any): void {
        console.log(values);
    }

    public loadData(node: any, index: number): PromiseLike<any> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (index < 0) { // if index less than 0 it is root node
                    node.children = provinces;
                } else if (index === 0) {
                    node.children = cities[node.value];
                } else {
                    node.children = scenicspots[node.value];
                }
                resolve();
            }, 1000);
        });
    }

    public cascaderSelectSpecifiedOnChanges(values: any): void {
        console.log(values, this.cascaderSelectSpecifiedvalues);
    }

    public cascaderSelectSpecifiedValidate(option: any, index: number): boolean {
        const value = option.value;
        return ['hangzhou', 'xihu', 'nanjing', 'zhonghuamen'].indexOf(value) >= 0;
    }
    

    public cascadeModalOnChanges(values: any): void {
        console.log(values, this.cascadeModalOptionsValues);
    }

    public cascadeModalOpen(): void {
        this.isVisible = true;
    }

    cascadeModalHandleOk($event: MouseEvent): void {
        console.log('Button ok clicked!', this.cascadeModalOptionsValues);
        this.isVisible = false;
    }

    cascadeModalHandleCancel($event: MouseEvent): void {
        console.log('Button cancel clicked!', $event);
        this.isVisible = false;
    }
    
    public cascadeSearchChangeNzOptions(): void {
        if (this.cascadeSearchOptions === options) {
            this.cascadeSearchOptions = otherOptions;
        } else {
            this.cascadeSearchOptions = options;
        }
    }

    public cascadeSearchOnChanges(values: any): void {
        console.log(values, this.cascadeSearchValues);
    }

    public cascaderTriggerActionOnChanges(values: any): void {
        console.log(values, this.cascaderTriggerActionValues);
    }

    public cascaderDefaultLazyOnChanges(values: any): void {
        console.log(values, this.cascaderDefaultLazyValues);
    }

    public cascaderDefaultLazyLoadData(node: any, index: number): PromiseLike<any> {
        return new Promise((resolve) => {
        setTimeout(() => {
            if (index < 0) { // if index less than 0 it is root node
                node.children = provinces;
            } else if (index === 0) {
                node.children = cities[node.value];
            } else {
                node.children = scenicspots[node.value];
            }
            resolve();
        }, 1000);
        });
    }

    public cascadeDefaultAscyOnChanges(values: any): void {
        console.log(values, this.cascadeDefaultAscyValues);
    }
}