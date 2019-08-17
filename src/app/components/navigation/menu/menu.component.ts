import { Component } from '@angular/core'

let menuCode = require('../../../../assets/data/syntax/components/navigation/menuCode.json');
declare var require: any

@Component({
    templateUrl: './menu.component.html'
})

export class menuComponent {

    //Code Highlight
    menuTopNavigationCode: string
    menuInlineMenuCode: string
    menuCollapsedInlineCode: string
    openCurrentSubMenuCode: string
    menuThemesCode: string
    menuVerticalCode: string
    menuSwitchCode: string
    menuAPICode: string
    menuAPI2Code: string
    menuAPI3Code: string

    isCollapsed = false;
    theme = true;
    mode = false;
    dark = false;

    openMap = {
        sub1: true,
        sub2: false,
        sub3: false
    };

    toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
    }
    
    openHandler(value: string): void {
        for (const key in this.openMap) {
            if (key !== value) {
                this.openMap[ key ] = false;
            }
        }
    }

    change(value: boolean): void {
        console.log(value);
    }


    ngOnInit(): void {
        
        //Code Hightlight
        this.menuTopNavigationCode = menuCode.menuTopNavigationCode;
        this.menuInlineMenuCode = menuCode.menuInlineMenuCode;
        this.menuCollapsedInlineCode = menuCode.menuCollapsedInlineCode;
        this.openCurrentSubMenuCode = menuCode.openCurrentSubMenuCode;
        this.menuThemesCode = menuCode.menuThemesCode;
        this.menuVerticalCode = menuCode.menuVerticalCode;
        this.menuSwitchCode = menuCode.menuSwitchCode;
        this.menuAPICode = menuCode.menuAPICode;
        this.menuAPI2Code = menuCode.menuAPI2Code;
        this.menuAPI3Code = menuCode.menuAPI3Code;
    }

}    