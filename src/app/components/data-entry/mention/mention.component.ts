import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MentionOnSearchTypes } from 'ng-zorro-antd';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

let mentionCode = require('../../../../assets/data/syntax/components/data-entry/mentionCode.json');
declare var require: any

@Component({
    encapsulation: ViewEncapsulation.None,
    templateUrl: './mention.component.html'
})   

export class MentionComponent implements OnInit {

    //Code Highlight
    mentionBasicCode: string
    mentionPlacementCode: string
    mentionAsynchronousCode: string
    mentionCustomizeSuggestionCode: string
    mentionIconImageCode: string
    mentionWithFormCode: string
    mentionMultiLinesCode: string
    mentionDisabledCode: string
    mentionCustomizeTriggerCode: string
    mentionPreviewCode: string
    mentionAPICode: string
    mentionAPI2Code: string
    mentionAPI3Code: string
    mentionAPI4Code: string

    mentionBasicInputValue: string = '@afc163';
    mentionPlacementInputValue: string;
    mentionAsynchronousInputValue: string;
    mentionCustomSuggestionInputValue: string;
    mentionIconImageInputValue: string;
    mentionMultiLinesInputValue: string;
    mentionDiasbledInputValue: string;
    mentionCustomizeTriggerInputValue: string;
    mentionPreviewInputValue: string = 'Switch tab view preview @NG-ZORRO ';

    mentionAsynchronousLoading = false;
    preview: SafeHtml;

    mentionSuggestions = ['afc163', 'benjycui', 'yiminghe', 'اثممخ', '中文', 'にほんご'];
    mentionAsynchronousSuggestions = [];
    mentionCustomizeTriggerSuggestions = [];
    webFrameworks = [
        { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
        { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
        { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
        { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' }
    ];
    mentionTags = ['1.0', '2.0', '3.0'];
    mentionPreviewsuggestions = ['NG-ZORRO', 'angular', 'Reactive-Extensions'];

    validateForm: FormGroup;

    @ViewChild('mentions', { static: true }) mentionChild;

    get mention(): AbstractControl { return  this.validateForm.get('mention'); }

    constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
        this.renderPreView();
    }

    ngOnInit(): void {
        //Code Highlight
        this.mentionBasicCode = mentionCode.mentionBasicCode;
        this.mentionPlacementCode = mentionCode.mentionPlacementCode;
        this.mentionAsynchronousCode = mentionCode.mentionAsynchronousCode;
        this.mentionCustomizeSuggestionCode = mentionCode.mentionCustomizeSuggestionCode;
        this.mentionIconImageCode = mentionCode.mentionIconImageCode;
        this.mentionWithFormCode = mentionCode.mentionWithFormCode;
        this.mentionMultiLinesCode = mentionCode.mentionMultiLinesCode;
        this.mentionDisabledCode = mentionCode.mentionDisabledCode;
        this.mentionCustomizeTriggerCode = mentionCode.mentionCustomizeTriggerCode;
        this.mentionPreviewCode = mentionCode.mentionPreviewCode;
        this.mentionAPICode = mentionCode.mentionAPICode;
        this.mentionAPI2Code = mentionCode.mentionAPI2Code;
        this.mentionAPI3Code = mentionCode.mentionAPI3Code;
        this.mentionAPI4Code = mentionCode.mentionAPI4Code;

        this.validateForm = this.fb.group({
            mention: [ '@afc163 ', [ Validators.required, this.mentionValidator ] ]
        });
    }

  
    mentionOnChange(value: string): void {
        console.log(value);
    }
  
    mentionOnSelect(suggestion: string): void {
        console.log(`onSelect ${suggestion}`);
    }
      

    mentionAsynchronousOnSearchChange({value}: MentionOnSearchTypes): void {
        console.log(`search: ${value}`);
        this.mentionAsynchronousLoading = true;
        this.mentionAsynchronousFetchSuggestions(value, (suggestions) => {
            console.log(suggestions);
            this.mentionAsynchronousSuggestions = suggestions;
            this.mentionAsynchronousLoading = false;
        });
    }

    mentionAsynchronousFetchSuggestions(value: string, callback: (suggestions: string[]) => void): void {
        const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria'];
        setTimeout(() => {
            return callback(users.filter(item => item.indexOf(value) !== -1));
        }, 500);
    }

    mentionCustomizeSuggestionValueWith = data => data.name;

    mentionCustomizeSuggestionOnSelect(value: string): void {
        console.log(value);
    }

    mentionValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (this.mentionChild.getMentions().length < 2) {
            return { confirm: true, error: true };
        }
    };
    
    submitForm(): void {
        this.mention.markAsDirty();
        if (this.mention.valid) {
            console.log('Submit!!!', this.mention.value);
            console.log(this.mentionChild.getMentions());
        } else {
            console.log('Errors in form!!!');
        }
    }
    
    resetForm(): void {
        this.validateForm.reset({
            mention: '@afc163 '
        });
    }


    mentionCustomizeTriggerOnSearchChange({value, prefix}: MentionOnSearchTypes): void {
        console.log('nzOnSearchChange', value, prefix);
        this.mentionCustomizeTriggerSuggestions = prefix === '@' ? this.mentionSuggestions : this.mentionTags;
    }
    

    getRegExp(prefix: string | string[]): RegExp {
        const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
        let prefixToken = prefixArray.join('').replace(/($|\^)/g, '\$1');

        if (prefixArray.length > 1) {
            prefixToken = `[${prefixToken}]`;
        }

        return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
    }

    renderPreView(): void {
        if (this.mentionPreviewInputValue) {
            const regex = this.getRegExp('@');
            const previewValue = this.mentionPreviewInputValue
            .replace(regex, match => `<a target="_blank" href="https://github.com/${match.trim().substring(1)}">${match}</a>`);
            this.preview = this.sanitizer.bypassSecurityTrustHtml(previewValue);
        }
    }
}    

