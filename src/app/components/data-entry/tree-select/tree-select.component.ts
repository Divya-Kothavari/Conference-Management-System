import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

let treeSelectCode = require('../../../../assets/data/syntax/components/data-entry/treeSelectCode.json');
declare var require: any

@Component({
    templateUrl: './tree-select.component.html'
})   

export class TreeSelectComponent implements OnInit {

    //Code Highlight
    treeSelectBasicCode: string
    treeSelectMultipleCode: string
    treeSelectLoadDataCode: string
    treeSelectCheckableCode: string
    treeSelectIconCode: string

    treeSelectBasicExpandKeys = [ '100', '1001' ];
    treeSelectLoadDataExpandKeys = [ '0-0' ];
    treeSelectBasicValue: string;
    treeSelectMultipleValue: string[] = [];
    treeSelectLoadDataValue: string;
    treeSelectCheckableValue: string[] = [ '0-0-0' ];
    treeSelectIconValue: string;

    treeSelectValueNodes = [ {
        title   : 'parent 1',
        key     : '100',
        children: [{
            title   : 'parent 1-0',
            key     : '1001',
            children: [
                { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
                { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
            ]}, {
            title   : 'parent 1-1',
            key     : '1002',
            children: [
                { title: 'leaf 1-1-0', key: '10020', isLeaf: true }
            ]
        }]
    } ];

    treeSelectLoadDataNodes = [ {
        title   : 'Node1',
        value   : '0-0',
        key     : '0-0',
        children: [ {
            title: 'Child Node1',
            value: '0-0-1',
            key  : '0-0-1'
        }, {
            title: 'Child Node2',
            value: '0-0-2',
            key  : '0-0-2'
        } ]
    }, {
        title: 'Node2',
        value: '0-1',
        key  : '0-1'
    } ];

    treeSelectCheckableNodes = [ {
        title   : 'Node1',
        value   : '0-0',
        key     : '0-0',
        children: [ {
            title : 'Child Node1',
            value : '0-0-0',
            key   : '0-0-0',
            isLeaf: true
        } ]
    }, {
        title   : 'Node2',
        value   : '0-1',
        key     : '0-1',
        children: [ {
            title : 'Child Node3',
            value : '0-1-0',
            key   : '0-1-0',
            isLeaf: true
        }, {
            title : 'Child Node4',
            value : '0-1-1',
            key   : '0-1-1',
            isLeaf: true
        }, {
            title : 'Child Node5',
            value : '0-1-2',
            key   : '0-1-2',
            isLeaf: true
        } ]
    } ];

    treeSelectIconNodes = [
        {
            title: 'parent 1',
            key: '100',
            expanded: true,
            icon: 'anticon anticon-smile-o',
            children: [
                { title: 'leaf 1-0-0', key: '10010', icon: 'anticon anticon-meh-o', isLeaf: true },
                { title: 'leaf 1-0-1', key: '10011', icon: 'anticon anticon-frown-o', isLeaf: true }
            ]
        }
    ];

    ngOnInit(): void {

        //Code Highlight
        this.treeSelectBasicCode = treeSelectCode.treeSelectBasicCode;
        this.treeSelectMultipleCode = treeSelectCode.treeSelectMultipleCode;
        this.treeSelectLoadDataCode = treeSelectCode.treeSelectLoadDataCode;
        this.treeSelectCheckableCode = treeSelectCode.treeSelectCheckableCode;
        this.treeSelectIconCode = treeSelectCode.treeSelectIconCode;
        
        setTimeout(() => {
            this.treeSelectBasicValue = '1001';
        }, 1000);
    }

    treeSelectOnChange($event: string): void {
        console.log($event);
    }

    treeSelectLoadDataOnExpandChange(e: NzFormatEmitEvent): void {
        if (e.node.getChildren().length === 0 && e.node.isExpanded) {
            this.treeSelectLoadDataLoadNode().then(data => {
                e.node.addChildren(data);
            });
        }
    }

    treeSelectLoadDataLoadNode(): Promise<any[]> {
        return new Promise(resolve => {
        setTimeout(() => resolve([
            { title: 'Child Node', key: `${(new Date()).getTime()}-0` },
            { title: 'Child Node', key: `${(new Date()).getTime()}-1` } ]),
            1000);
        });
    }
}    