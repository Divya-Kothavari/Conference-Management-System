import { Component, TemplateRef } from '@angular/core'
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd';

let dropdownCode = require('../../../../assets/data/syntax/components/navigation/dropdownCode.json');
declare var require: any

@Component({
    templateUrl: './dropdown.component.html',
    styles: [
        `
        .context-area {
            background: rgb(190, 200, 200);
            padding: 32px;
            text-align: center;
        }
    
        .context-intro {
            color: #fff;
            font-size: 14px;
        }
        `
    ]
})

export class dropdownComponent {

    //Code Hightlight
    dropdownBasicCode: string
    dropdownOtherElementsCode: string
    dropdownClickEventCode: string
    dropdownCascadingCode: string
    dropdownContextMenuCode: string
    dropdownPlacementCode: string
    dropdownTriggerCode: string
    dropdownButtonCode: string
    dropdownHidingCode: string
    dropdownAPICode: string

    visible = false;

    listOfPosition = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];

    contextMenu($event: MouseEvent, menuContext: NzDropdownMenuComponent): void {
        this.nzContextMenuService.create($event, menuContext);
    }
    
    closeMenu(): void {
        this.nzContextMenuService.close();
    }

    log(data: string): void {
        console.log(data);
    }

    change(value: boolean): void {
        console.log(value);
    }

    logButton(): void {
        console.log('click dropdown button');
    }

    constructor(private nzContextMenuService: NzContextMenuService) {}

    ngOnInit(): void {

        //Code Hightlight
        this.dropdownBasicCode = dropdownCode.dropdownBasicCode;
        this.dropdownOtherElementsCode = dropdownCode.dropdownOtherElementsCode;
        this.dropdownClickEventCode = dropdownCode.dropdownClickEventCode;
        this.dropdownCascadingCode = dropdownCode.dropdownCascadingCode;
        this.dropdownContextMenuCode = dropdownCode.dropdownContextMenuCode;
        this.dropdownPlacementCode = dropdownCode.dropdownPlacementCode;
        this.dropdownTriggerCode = dropdownCode.dropdownTriggerCode;
        this.dropdownButtonCode = dropdownCode.dropdownButtonCode;
        this.dropdownHidingCode = dropdownCode.dropdownHidingCode;
        this.dropdownAPICode = dropdownCode.dropdownAPICode;
    }

}    