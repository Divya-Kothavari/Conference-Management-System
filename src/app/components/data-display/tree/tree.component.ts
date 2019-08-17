import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions, NzFormatBeforeDropEvent,  NzDropdownService, NzTreeComponent, NzDropdownContextComponent } from 'ng-zorro-antd';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

let treeCode = require('../../../../assets/data/syntax/components/data-display/treeCode.json');
declare var require: any

@Component({
    templateUrl: './tree.component.html'
})

export class TreeComponent implements OnInit {

    //Code Highlight
    treeBasicCode: string
    treeBasicControlledCode: string
    treeDraggableCode: string
    treeDraggableConfirmationCode: string
    treeLoadDataCode: string
    treeSearchableCode: string
    treeLineCode: string
    treeIconCode: string
    treeDirectoryCode: string

    @ViewChild('basicTreeCom', { static: true }) basicTreeCom;
    @ViewChild('treeSearchCom', { static: true }) treeSearchCom;
    
    treeBasicCheckedKeys = [ '1001', '1002' ];
    treeBasicSelectedKeys = [ '10011' ];
    treeBasicExpandedKeys = [ '100', '1001' ];
    treeBasicControlledCheckedKeys = [ '0-0-0' ];
    treeBasicControlledSelectedKeys = [];
    treeBasicControlledExpandedKeys = [ '0-0', '0-0-0', '0-0-1' ];

    treeSearchValue;

    treeBasicNodes: NzTreeNodeOptions[] = [ {
        title   : 'parent 1',
        key     : '100',
        children: [ {
            title   : 'parent 1-0',
            key     : '1001',
            disabled: true,
            children: [
                { title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true },
                { title: 'leaf 1-0-1', key: '10011', isLeaf: true, checked: true }
            ]
            }, {
            title   : 'parent 1-1',
            key     : '1002',
            children: [
                { title: 'leaf 1-1-0', key: '10020', isLeaf: true }
            ]
        } ]
    } ];

    treeNodes = [ {
        title   : '0-0',
        key     : '0-0',
        expanded: true,
        children: [ {
            title   : '0-0-0',
            key     : '0-0-0',
            children: [
                { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
                { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
                { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
            ]
        }, {
            title   : '0-0-1',
            key     : '0-0-1',
            children: [
                { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
                { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
                { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
            ]
        }, {
            title : '0-0-2',
            key   : '0-0-2',
            isLeaf: true
        } ]
        }, {
        title   : '0-1',
        key     : '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
            { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
            { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
        ]
        }, {
        title : '0-2',
        key   : '0-2',
        isLeaf: true
    } ];

    treeDraggableConfirmationNodes = [ {
        title   : '0-0',
        key     : '100',
        expanded: true,
        children: [ {
        title   : '0-0-0',
        key     : '1001',
        children: [
            { title: '0-0-0-0', key: '10010', isLeaf: true },
            { title: '0-0-0-1', key: '10011', isLeaf: true }
        ]
        }, {
        title   : '0-0-1',
        key     : '1002',
        children: [
            { title: '0-0-1-0', key: '10020', isLeaf: true }
        ]
        } ]
    } ];

    treeLoadDataNodes = [
        { title: 'Expand to load', key: '0' },
        { title: 'Expand to load', key: '1' },
        { title: 'Tree Node', key: '2', isLeaf: true }
    ];
    
    treeSearchNodes = [ {
        title   : '0-0',
        key     : '0-0',
        children: [ {
        title   : '0-0-0',
        key     : '0-0-0',
        children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
        ]
        }, {
        title   : '0-0-1',
        key     : '0-0-1',
        children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
        ]
        }, {
        title : '0-0-2',
        key   : '0-0-2',
        isLeaf: true
        } ]
    }, {
        title   : '0-1',
        key     : '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
            { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
            { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
        ]
    }, {
        title : '0-2',
        key   : '0-2',
        isLeaf: true
    } ];

    treeLineNodes = [ {
        title   : 'parent 1',
        key     : '100',
        expanded: true,
        children: [ {
            title   : 'parent 1-0',
            key     : '1001',
            expanded: true,
            children: [
                { title: 'leaf', key: '10010', isLeaf: true },
                { title: 'leaf', key: '10011', isLeaf: true },
                { title: 'leaf', key: '10012', isLeaf: true }
            ]
            }, {
            title   : 'parent 1-1',
            key     : '1002',
            children: [
                { title: 'leaf', key: '10020', isLeaf: true }
            ]
            }, {
            title   : 'parent 1-2',
            key     : '1003',
            children: [
                { title: 'leaf', key: '10030', isLeaf: true },
                { title: 'leaf', key: '10031', isLeaf: true }
            ]
        } ]
    } ];

    treeIconNodes = [{
        title   : 'parent 1',
        key     : '100',
        expanded: true,
        icon    : 'anticon anticon-smile-o',
        children: [
            { title: 'leaf', key: '1001', icon: 'anticon anticon-meh-o', isLeaf: true },
            { title: 'leaf', key: '1002', icon: 'anticon anticon-frown-o', isLeaf: true }
        ]
    }];

    constructor(private nzDropdownService: NzDropdownService) {
    }
      
    treeBasicClick(event: NzFormatEmitEvent): void {
        console.log(event, event.selectedKeys, event.keys, event.nodes);
    }

    treeBasicCheck(event: NzFormatEmitEvent): void {
        console.log(event, event.checkedKeys, event.keys, event.nodes);
    }

    treeEvent(event: NzFormatEmitEvent): void {
        console.log(event);
    }

    treeDraggableConfirmationBeforeDrop(arg: NzFormatBeforeDropEvent): Observable<boolean> {
        // if insert node into another node, wait 1s
        if (arg.pos === 0) {
            return of(true).pipe(delay(1000));
        } else {
            return of(false);
        }
    }

    treeLoadDataEvent(event: NzFormatEmitEvent): void {
        console.log(event);
        // load child async
        if (event.eventName === 'expand') {
            setTimeout(_ => {
                if (event.node.getChildren().length === 0 && event.node.isExpanded) {
                    event.node.addChildren([
                        { title: 'Child Node', key: `${event.node.key}-0` },
                        { title: 'Child Node', key: `${event.node.key}-1` } 
                    ]);
                }
            }, 1000);
        }
    }

    treeSearchEvent(event: NzFormatEmitEvent): void {
        console.log(event, this.treeSearchCom.getMatchedNodeList().map(v => v.title));
    }

    @ViewChild('treeDirectoryCom', { static: true }) treeDirectoryCom: NzTreeComponent;
    dropdown: NzDropdownContextComponent;
    // actived node
    activedNode: NzTreeNode;
    treeDirectoryNodes = [ {
        title   : 'parent 0',
        key     : '100',
        author  : 'NG ZORRO',
        expanded: true,
        children: [
            { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO', isLeaf: true },
            { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true }
        ]
    }, {
        title   : 'parent 1',
        key     : '101',
        author  : 'NG ZORRO',
        children: [
            { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
            { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
        ]
    } ];

    openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
        // do something if u want
        if (data instanceof NzTreeNode) {
            data.isExpanded = !data.isExpanded;
        } else {
            data.node.isExpanded = !data.node.isExpanded;
        }
    }

    activeNode(data: NzFormatEmitEvent): void {
        if (this.activedNode) {
        // delete selectedNodeList(u can do anything u want)
            this.treeDirectoryCom.nzTreeService.setSelectedNodeList(this.activedNode);
        }
        data.node.isSelected = true;
            this.activedNode = data.node;
            // add selectedNodeList
            this.treeDirectoryCom.nzTreeService.setSelectedNodeList(this.activedNode);
    }

    contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
        this.dropdown = this.nzDropdownService.create($event, template);
    }

    selectDropdown(type: string): void {
        this.dropdown.close();
        // do something
    }

    ngOnInit(): void {
        setTimeout(() => {
            console.log(this.basicTreeCom.getTreeNodes(), this.basicTreeCom.getCheckedNodeList());
        }, 500);

        //Code Highlight
        this.treeBasicCode = treeCode.treeBasicCode;
        this.treeBasicControlledCode = treeCode.treeBasicControlledCode;
        this.treeDraggableCode = treeCode.treeDraggableCode;
        this.treeDraggableConfirmationCode = treeCode.treeDraggableConfirmationCode;
        this.treeLoadDataCode = treeCode.treeLoadDataCode;
        this.treeSearchableCode = treeCode.treeSearchableCode;
        this.treeLineCode = treeCode.treeLineCode;
        this.treeIconCode = treeCode.treeIconCode;
        this.treeDirectoryCode = treeCode.treeDirectoryCode;

    }

}    
