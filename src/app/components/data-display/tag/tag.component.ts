import { Component, ElementRef, ViewChild } from '@angular/core';

let tagCode = require('../../../../assets/data/syntax/components/data-display/tagCode.json');
declare var require: any

const tagsFromServer = [ 'Movie', 'Books', 'Music', 'Sports' ];

@Component({
    templateUrl: './tag.component.html'
})

export class TagComponent {

    //Code Highlight
    tagsBasicCode: string
    tagsColorCode: string
    tagDynamicallyCode: string
    tagsCheckableCode: string
    tagsHotTagCode: string

    tagBasicOnClose(e: MouseEvent): void {
        console.log('tag was closed.');
    }
    
    tagBasicAfterClose(): void {
        console.log('after tag closed');
    }
    
    tagBasicPreventDefault(e: Event): void {
        e.preventDefault();
        e.stopPropagation();
        console.log('tag can not be closed.');
    }

    tagDynamicallyTags = [ 'Unremovable', 'Tag 2', 'Tag 3' ];
    inputVisible = false;
    inputValue = '';
    @ViewChild('inputElement', { static: false }) inputElement: ElementRef;

    handleClose(removedTag: {}): void {
        this.tagDynamicallyTags = this.tagDynamicallyTags.filter(tag => tag !== removedTag);
    }

    sliceTagName(tag: string): string {
        const isLongTag = tag.length > 20;
        return isLongTag ? `${tag.slice(0, 20)}...` : tag;
    }

    showInput(): void {
        this.inputVisible = true;
        setTimeout(() => {
            this.inputElement.nativeElement.focus();
        }, 10);
    }

    handleInputConfirm(): void {
        if (this.inputValue && this.tagDynamicallyTags.indexOf(this.inputValue) === -1) {
            this.tagDynamicallyTags.push(this.inputValue);
        }
        this.inputValue = '';
        this.inputVisible = false;
    }

    checkChange(e: boolean): void {
        console.log(e);
    }

    hotTags = tagsFromServer;
    selectedTags = [];

    handleChange(checked: boolean, tag: string): void {
        if (checked) {
            this.selectedTags.push(tag);
        } else {
            this.selectedTags = this.selectedTags.filter(t => t !== tag);
        }
        console.log('You are interested in: ', this.selectedTags);
    }

    ngOnInit(): void {

        //Code Highlight
        this.tagsBasicCode = tagCode.tagsBasicCode;
        this.tagsColorCode = tagCode.tagsColorCode;
        this.tagDynamicallyCode = tagCode.tagDynamicallyCode;
        this.tagsCheckableCode = tagCode.tagsCheckableCode;
        this.tagsHotTagCode = tagCode.tagsHotTagCode;
    }
}