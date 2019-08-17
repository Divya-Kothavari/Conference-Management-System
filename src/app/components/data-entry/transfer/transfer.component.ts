import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { NzMessageService, TransferCanMove, TransferItem, TransferChange } from 'ng-zorro-antd';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NzTreeNode } from 'ng-zorro-antd/core';
import { NzTreeComponent } from 'ng-zorro-antd/tree';


let transferCode = require('../../../../assets/data/syntax/components/data-entry/transferCode.json');
declare var require: any

@Component({
    templateUrl: './transfer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})   

export class TransferComponent implements OnInit {

    //Code Highlight
    transferBasicCode: string
    transferSearchCode: string
    transferAdvancedCode: string
    transferCustomDatasourceCode: string
    transferCheckBeforeMoveCode: string
    transferTableCode: string
    transferTreeCode: string

    transferBasicList: any[] = [];
    transferSearchList: any[] = [];
    transferAdvancedList = [];
    transferCustomDatasourceList: any[] = [];
    transferCheckBeforeMoveList = [];
    transferTableList: any[] = [];
    transferTreelist: any[] = [
        { id: 1, parentid: 0, title: 'parent 1' },
        { id: 2, parentid: 1, title: 'leaf 1-1', disabled: true, isLeaf: true },
        { id: 3, parentid: 1, title: 'leaf 1-2', isLeaf: true }
    ];

    disabled = false;
    showSearch = false;


    convertItems(items: TransferItem[]): TransferItem[] {
        return items.filter(i => !i.hide);
    }

    select(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    tableChange(ret: {}): void {
        console.log('nzChange', ret);
    }

    constructor(public msg: NzMessageService) {
    }
    
    @ViewChild('tree', { static: true }) tree: NzTreeComponent;
    
    treeData = this.generateTree(this.transferTreelist);
    checkedNodeList: NzTreeNode[] = [];

    private generateTree(arr: TransferItem[]): TransferItem[] {
        const tree: TransferItem[] = [];
        const mappedArr: any = {};
        let arrElem: TransferItem;
        let mappedElem: TransferItem;

        for (let i = 0, len = arr.length; i < len; i++) {
            arrElem = arr[i];
            mappedArr[arrElem.id] = { ...arrElem };
            mappedArr[arrElem.id].children = [];
        }

        for (const id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                if (mappedElem.parentid) {
                    mappedArr[mappedElem.parentid].children.push(mappedElem);
                } else {
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
    }

    checkBoxChange(node: NzTreeNode, onItemSelect: (item: TransferItem) => void): void {
        if (node.isDisabled) {
            return;
        }
        node.isChecked = !node.isChecked;
        if (node.isChecked) {
            this.checkedNodeList.push(node);
        } else {
            const idx = this.checkedNodeList.indexOf(node);
            if (idx !== -1) {
                this.checkedNodeList.splice(idx, 1);
            }
        }
        const item = this.transferTreelist.find(w => w.id === node.origin.id);
        onItemSelect(item);
    }

    treeChange(ret: TransferChange): void {
        const isDisabled = ret.to === 'right';
        this.checkedNodeList.forEach(node => {
            node.isDisabled = isDisabled;
            node.isChecked = isDisabled;
        });
    }

    ngOnInit(): void {
        
        //Code Highlight
        this.transferBasicCode = transferCode.transferBasicCode;
        this.transferSearchCode = transferCode.transferSearchCode;
        this.transferAdvancedCode = transferCode.transferAdvancedCode;
        this.transferCustomDatasourceCode = transferCode.transferCustomDatasourceCode;
        this.transferCheckBeforeMoveCode = transferCode.transferCheckBeforeMoveCode;
        this.transferTableCode = transferCode.transferTableCode;
        this.transferTreeCode = transferCode.transferTreeCode;

        for (let i = 0; i < 20; i++) {
            this.transferBasicList.push({
                key     : i.toString(),
                title   : `content${i + 1}`,
                disabled: i % 3 < 1,
            });
        }
    
        [ 2, 3 ].forEach(idx => this.transferBasicList[ idx ].direction = 'right');

        for (let i = 0; i < 20; i++) {
            this.transferSearchList.push({
                key        : i.toString(),
                title      : `content${i + 1}`,
                description: `description of content${i + 1}`,
                direction  : Math.random() * 2 > 1 ? 'right' : ''
            });
        }

        this.transferAdvancedGetData();
        this.transferCustomDatasourceGetData();

        for (let i = 0; i < 20; i++) {
            this.transferCheckBeforeMoveList.push({
                key     : i.toString(),
                title   : `content${i + 1}`,
                disabled: i % 3 < 1
            });
        }

        [ 2, 3 ].forEach(idx => this.transferCheckBeforeMoveList[ idx ].direction = 'right');

        for (let i = 0; i < 20; i++) {
            this.transferTableList.push({
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                disabled: i % 4 === 0,
                tag: ['cat', 'dog', 'bird'][i % 3]
            });
        }

        [2, 3].forEach(idx => (this.transferTableList[idx].direction = 'right'));
    }

    transferBasicSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferBasicChange(ret: {}): void {
        console.log('nzChange', ret);
    }

    transferSearchFilterOption(inputValue: string, item: any): boolean {
        return item.description.indexOf(inputValue) > -1;
    }

    transferSearch(ret: {}): void {
        console.log('nzSearchChange', ret);
    }

    transferSearchSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferSearchShange(ret: {}): void {
        console.log('nzChange', ret);
    }

    transferAdvancedGetData(): void {
        const ret = [];
        for (let i = 0; i < 20; i++) {
            ret.push({
                key        : i.toString(),
                title      : `content ${i + 1}`,
                description: `description of content${i + 1}`,
                direction  : Math.random() * 2 > 1 ? 'right' : ''
            });
        }
        this.transferAdvancedList = ret;
    }

    transferAdvancedReload(direction: string): void {
        this.transferAdvancedGetData();
        this.msg.success(`your clicked ${direction}!`);
    }

    transferAdvancedSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferAdvancedChange(ret: {}): void {
        console.log('nzChange', ret);
    }

    transferCustomDatasourceGetData(): void {
        const ret = [];
        for (let i = 0; i < 20; i++) {
            ret.push({
                key        : i.toString(),
                title      : `content${i + 1}`,
                description: `description of content${i + 1}`,
                direction  : Math.random() * 2 > 1 ? 'right' : '',
                icon       : `frown-o`
            });
        }
        this.transferCustomDatasourceList = ret;
    }

    transferCustomDatasourceSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferCustomDatasourceChange(ret: {}): void {
        console.log('nzChange', ret);
    }


    transferCheckBeforeMoveCanMove(arg: TransferCanMove): Observable<TransferItem[]> {
        if (arg.direction === 'right' && arg.list.length > 0) { arg.list.splice(0, 1); }
        return of(arg.list).pipe(delay(1000));
    }

    transferCheckBeforeMoveSelect(ret: {}): void {
        console.log('nzSelectChange', ret);
    }

    transferCheckBeforeMoveChange(ret: {}): void {
        console.log('nzChange', ret);
    }
}    