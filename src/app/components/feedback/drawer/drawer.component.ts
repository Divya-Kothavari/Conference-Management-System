import { Component, Input, ViewChild } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd';

let drawerCode = require('../../../../assets/data/syntax/components/feedback/drawerCode.json');
declare var require: any

@Component({
    templateUrl: './drawer.component.html'
})

export class DrawerComponent {

    //Code Highlight
    drawerBasicCode: string
    drawerCustomPlacementCode: string
    drawerEditItemCode: string
    drawerPreviewCode: string
    drawerMultiLevelCode: string
    drawerServiceCode: string

    drawerBasicVisible = false;

    drawerBasicOpen(): void {
        this.drawerBasicVisible = true;
    }

    drawerBasicClose(): void {
        this.drawerBasicVisible = false;
    }

    drawerPlacmentVisible = false;
    drawerPlacement = 'left';
    drawerPlacementOpen(): void {
        this.drawerPlacmentVisible = true;
    }

    drawerPlacementClose(): void {
        this.drawerPlacmentVisible = false;
    }

    drawerEditItemVisible = false;

    drawerEditItemOpen(): void {
        this.drawerEditItemVisible = true;
    }

    drawerEditItemClose(): void {
        this.drawerEditItemVisible = false;
    }

    drawerPreviewData = [
        {
            name: 'Lily'
        },
        {
            name: 'Lily'
        }
    ];
    
    drawerPreviewVisible = false;
    
    drawerPreviewOpen(): void {
        this.drawerPreviewVisible = true;
    }
    
    drawerPreviewClose(): void {
        this.drawerPreviewVisible = false;
    }

    drawerMultiLevelVisible = false;
    childrenVisible = false;

    vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];

    drawerMultiLevelOpen(): void {
        this.drawerMultiLevelVisible = true;
    }

    drawerMultiLevelClose(): void {
        this.drawerMultiLevelVisible = false;
    }

    openChildren(): void {
        this.childrenVisible = true;
    }

    closeChildren(): void {
        this.childrenVisible = false;
    }

    @ViewChild('drawerTemplate', { static: true }) drawerTemplate;
    value = 'ng';
  
    constructor(private drawerService: NzDrawerService) {
  
    }
  
    openTemplate(): void {
        const drawerRef = this.drawerService.create({
            nzTitle: 'Template',
            nzContent: this.drawerTemplate,
            nzContentParams: {
                value: this.value
            }
        });
    
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Template) open');
        });
    
        drawerRef.afterClose.subscribe(() => {
            console.log('Drawer(Template) close');
        });
    }
  
    openComponent(): void {
        const drawerRef = this.drawerService.create<NzDrawerCustomComponent, { value: string }, string>({
                nzTitle: 'Component',
                nzContent: NzDrawerCustomComponent,
                nzContentParams: {
                value: this.value
            }
        });

        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });

        drawerRef.afterClose.subscribe(data => {
            console.log(data);
            if (typeof data === 'string') {
                this.value = data;
            }
        });
    }
 
    ngOnInit(): void {

        //Code Highlight;
        this.drawerBasicCode = drawerCode.drawerBasicCode;
        this.drawerCustomPlacementCode = drawerCode.drawerCustomPlacementCode;
        this.drawerEditItemCode = drawerCode.drawerEditItemCode;
        this.drawerPreviewCode = drawerCode.drawerPreviewCode;
        this.drawerMultiLevelCode = drawerCode.drawerMultiLevelCode;
        this.drawerServiceCode = drawerCode.drawerServiceCode;
    }
}  

@Component({
    selector: 'nz-drawer-custom-component',
    template: `
      <div>
            <input nz-input [(ngModel)]="value">
            <nz-divider></nz-divider>
            <button nzType="primary" (click)="close()" nz-button>Confirm</button>
      </div>
    `
  })
export class NzDrawerCustomComponent {

    @Input() value = '';

    constructor(private drawerRef: NzDrawerRef<string>) {
    }

    close(): void {
        this.drawerRef.close(this.value);
    }
}





