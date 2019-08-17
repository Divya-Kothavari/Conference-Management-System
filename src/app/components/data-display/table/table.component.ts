import { Component, OnInit  } from '@angular/core';
import { RandomUserService } from '../../../shared/services/random-user.service';
import { TreeNodeInterface } from '../../../shared/interfaces/tree-node.type'

let tableCode = require('../../../../assets/data/syntax/components/data-display/tableCode.json');
declare var require: any

@Component({
    templateUrl: './table.component.html',
    styles: [
        `
        .search-box {
            padding: 8px;
        }
    
        .search-box input {
            width: 188px;
            margin-bottom: 8px;
            display: block;
        }
    
        .search-box button {
            width: 90px;
        }
    
        .search-button {
            margin-right: 8px;
        }
        `
    ]
})

export class TableComponent implements OnInit {
    
    //Code Highlight
    tableBasicCode: string
    tableSelectionCode: string
    tableOperationCode: string
    tableCustomSelectionCode: string
    tableDefaultFilterCode: string
    tableFilterCode: string
    tableResetFilterCode: string
    tableCustomizedFilterCode: string
    tableAjaxCode: string
    tableSizeCode: string
    tableBorderedCode: string
    tableExpandableRowCode: string
    tableSpanCode: string
    tableTreeDataCode: string
    tableFixHeaderCode: string
    tableFixColumnCode: string
    tableFixColumnHeaderCode: string
    tableGroupingCode: string
    tableEditableCellsCode: string
    tableEditableRowCode: string
    tableNestedCode: string
    tableDynamicCode: string

    constructor(private randomUserService: RandomUserService) {
    }

    tableDataSet = [
        {
            key    : '1',
            name   : 'John Brown',
            age    : 32,
            address: 'New York No. 1 Lake Park',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
        },
        {
            key    : '2',
            name   : 'Jim Green',
            age    : 42,
            address: 'London No. 1 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
        },
        {
            key    : '3',
            name   : 'Joe Black',
            age    : 32,
            address: 'Sidney No. 1 Lake Park',
            description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
        },
        {
            key    : '4',
            name   : 'Jim Red',
            age    : 32,
            address: 'London No. 2 Lake Park',
            description: 'My name is Jim Red, I am 32 years old, living in London No. 2 Lake Park.'
        }
    ];

    tableSelectionAllChecked = false;
    tableSelectionIndeterminate = false;
    tableSelectionDisplayData = [];
    tableSelectionData = [
        {
            name    : 'John Brown',
            age     : 32,
            address : 'New York No. 1 Lake Park',
            checked : false,
            disabled: false
        },
        {
            name    : 'Jim Green',
            age     : 42,
            address : 'London No. 1 Lake Park',
            checked : false,
            disabled: false
        },
        {
            name    : 'Joe Black',
            age     : 32,
            address : 'Sidney No. 1 Lake Park',
            checked : false,
            disabled: false
        },
        {
            name    : 'Disabled User',
            age     : 32,
            address : 'Sidney No. 1 Lake Park',
            checked : false,
            disabled: true
        }
    ];

    tableSelectionCurrentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {
        this.tableSelectionDisplayData = $event;
        this.tableSelectionRefreshStatus();
    }

    tableSelectionRefreshStatus(): void {
        const allChecked = this.tableSelectionDisplayData.filter(value => !value.disabled).every(value => value.checked === true);
        const allUnChecked = this.tableSelectionDisplayData.filter(value => !value.disabled).every(value => !value.checked);
        this.tableSelectionAllChecked = allChecked;
        this.tableSelectionIndeterminate = (!allChecked) && (!allUnChecked);
    }

    tableSelectionCheckAll(value: boolean): void {
        this.tableSelectionDisplayData.forEach(data => {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.tableSelectionRefreshStatus();
    }

    tableOperationAllChecked = false;
    tableOperationDisabledButton = true;
    tableOperationCheckedNumber = 0;
    tableOperationDisplayData: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
    tableOperationOperating = false;
    tableOperationDataSet = [];
    tableOperationIndeterminate = false;

    tableOperationCurrentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean }>): void {
        this.tableOperationDisplayData = $event;
    }

    tableOperationRefreshStatus(): void {
        const allChecked = this.tableOperationDisplayData.every(value => value.checked === true);
        const allUnChecked = this.tableOperationDisplayData.every(value => !value.checked);
        this.tableOperationAllChecked = allChecked;
        this.tableOperationIndeterminate = (!allChecked) && (!allUnChecked);
        this.tableOperationDisabledButton = !this.tableOperationDataSet.some(value => value.checked);
        this.tableOperationCheckedNumber = this.tableOperationDataSet.filter(value => value.checked).length;
    }

    tableOperationCheckAll(value: boolean): void {
        this.tableOperationDisplayData.forEach(data => data.checked = value);
        this.tableOperationRefreshStatus();
    }

    tableOperationOperateData(): void {
        this.tableOperationOperating = true;
        setTimeout(_ => {
            this.tableOperationDataSet.forEach(value => value.checked = false);
            this.tableOperationRefreshStatus();
            this.tableOperationOperating = false;
        }, 1000);
    }

    tableCustomeSelectionListOfSelection = [
        {
            text    : 'Select All Row',
            onSelect: () => {
                this.tableCustomeSelectionCheckAll(true);
            }
        },
        {
            text    : 'Select Odd Row',
            onSelect: () => {
                this.tableCustomeSelectionDataSet.forEach((data, index) => data.checked = index % 2 !== 0);
                this.tableCustomeSelectionRefreshStatus();
            }
        },
        {
            text    : 'Select Even Row',
            onSelect: () => {
                this.tableCustomeSelectionDataSet.forEach((data, index) => data.checked = index % 2 === 0);
                this.tableCustomeSelectionRefreshStatus();
            }
        }
    ];

    tableCustomeSelectionAllChecked = false;
    tableCustomeSelectionDataSet: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
    tableCustomeSelectionAllCheckedIndeterminate = false;
    
    tableCustomeSelectionRefreshStatus(): void {
        const allChecked = this.tableCustomeSelectionDataSet.every(value => value.checked === true);
        const allUnChecked = this.tableCustomeSelectionDataSet.every(value => !value.checked);
        this.tableCustomeSelectionAllChecked = allChecked;
        this.tableCustomeSelectionAllCheckedIndeterminate = (!allChecked) && (!allUnChecked);
    }
    
    tableCustomeSelectionCheckAll(value: boolean): void {
        this.tableCustomeSelectionDataSet.forEach(data => data.checked = value);
        this.tableCustomeSelectionRefreshStatus();
    }

    tableDefaultFilterNameList = [
        { text: 'Joe', value: 'Joe', byDefault: true },
        { text: 'Jim', value: 'Jim' }
    ];
    tableDefaultFilterAddressList = [
        { text: 'London', value: 'London', byDefault: true },
        { text: 'Sidney', value: 'Sidney' }
    ];
    tableDefaultFilterSortName = null;
    tableDefaultFilterSortValue = null;
    tableDefaultFilterListOfSearchName = [ 'Joe', 'London' ];  // You need to change it as well!
    tableDefaultFilterSearchAddress: string;
    
    tableDefaultFilterDisplayData = [ ]; // You need to change it as well!
    
    tableDefaultSort(sort: { key: string, value: string }): void {
        this.tableDefaultFilterSortName = sort.key;
        this.tableDefaultFilterSortValue = sort.value;
        this.tableDefaultFilterSearch();
    }
    
    tableDefaultFilter(tableDefaultFilterListOfSearchName: string[], tableDefaultFilterSearchAddress: string): void {
        this.tableDefaultFilterListOfSearchName = tableDefaultFilterListOfSearchName;
        this.tableDefaultFilterSearchAddress = tableDefaultFilterSearchAddress;
        this.tableDefaultFilterSearch();
    }
    
    tableDefaultFilterSearch(): void {
        /** filter data **/
        const filterFunc = item => (this.tableDefaultFilterSearchAddress ? item.address.indexOf(this.tableDefaultFilterSearchAddress) !== -1 : true) && (this.tableDefaultFilterListOfSearchName.length ? this.tableDefaultFilterListOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
        const data = this.tableDataSet.filter(item => filterFunc(item));
        /** sort data **/
        if (this.tableDefaultFilterSortName && this.tableDefaultFilterSortValue) {
            this.tableDefaultFilterDisplayData = data.sort((a, b) => (this.tableDefaultFilterSortValue === 'ascend') ? (a[ this.tableDefaultFilterSortName ] > b[ this.tableDefaultFilterSortName ] ? 1 : -1) : (b[ this.tableDefaultFilterSortName ] > a[ this.tableDefaultFilterSortName ] ? 1 : -1));
        } else {
            this.tableDefaultFilterDisplayData = data;
        }
    }

    tableFilterNameList = [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
    ];
    tableFilterAddressList = [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
    ];
    tableFilterSortName = null;
    tableFilterSortValue = null;
    tableFilterListOfSearchName = [];
    tableFilterSearchAddress: string;
    
    tableFilterDisplayData = [ ...this.tableDataSet ];
    
    tableFilterSort(sort: { key: string, value: string }): void {
        this.tableFilterSortName = sort.key;
        this.tableFilterSortValue = sort.value;
        this.tableFilterSearch();
    }
    
    tableFilterFilter(tableFilterListOfSearchName: string[], tableFilterSearchAddress: string): void {
        this.tableFilterListOfSearchName = tableFilterListOfSearchName;
        this.tableFilterSearchAddress = tableFilterSearchAddress;
        this.tableFilterSearch();
    }
    
    tableFilterSearch(): void {
        /** filter data **/
        const filterFunc = item => (this.tableFilterSearchAddress ? item.address.indexOf(this.tableFilterSearchAddress) !== -1 : true) && (this.tableFilterListOfSearchName.length ? this.tableFilterListOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
        const data = this.tableDataSet.filter(item => filterFunc(item));
        /** sort data **/
        if (this.tableFilterSortName && this.tableFilterSortValue) {
            this.tableFilterDisplayData = data.sort((a, b) => (this.tableFilterSortValue === 'ascend') ? (a[ this.tableFilterSortName ] > b[ this.tableFilterSortName ] ? 1 : -1) : (b[ this.tableFilterSortName ] > a[ this.tableFilterSortName ] ? 1 : -1));
        } else {
            this.tableFilterDisplayData = data;
        }
    }
    
    tableResetFilterSearchNameList = [];
    tableResetFilterSearchAddressList = [];
    tableResetFilterFilterNameList = [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
    ];
    tableResetFilterFilterAddressList = [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
    ];
    tableResetFilterSortMap = {
        name   : null,
        age    : null,
        address: null
    };
    tableResetFilterSortName = null;
    tableResetFilterSortValue = null;
    
    tableResetFilterDisplayData = [ ...this.tableDataSet ];

    tableResetFilterSort(tableResetFilterSortName: string, value: string): void {
        this.tableResetFilterSortName = tableResetFilterSortName;
        this.tableResetFilterSortValue = value;
        for (const key in this.tableResetFilterSortMap) {
            this.tableResetFilterSortMap[ key ] = (key === tableResetFilterSortName ? value : null);
        }
        this.tableResetFilterSearch(this.tableResetFilterSearchNameList, this.tableResetFilterSearchAddressList);
    }

    tableResetFilterSearch(tableResetFilterSearchNameList: string[], tableResetFilterSearchAddressList: string[]): void {
        this.tableResetFilterSearchNameList = tableResetFilterSearchNameList;
        this.tableResetFilterSearchAddressList = tableResetFilterSearchAddressList;
        const filterFunc = item => (this.tableResetFilterSearchAddressList.length ? this.tableResetFilterSearchAddressList.some(address => item.address.indexOf(address) !== -1) : true) && (this.tableResetFilterSearchNameList.length ? this.tableResetFilterSearchNameList.some(name => item.name.indexOf(name) !== -1) : true);
        const data = this.tableDataSet.filter(item => filterFunc(item));
        if (this.tableResetFilterSortName && this.tableResetFilterSortValue) {
            this.tableResetFilterDisplayData = data.sort((a, b) => (this.tableResetFilterSortValue === 'ascend') ? (a[ this.tableResetFilterSortName ] > b[ this.tableResetFilterSortName ] ? 1 : -1) : (b[ this.tableResetFilterSortName ] > a[ this.tableResetFilterSortName ] ? 1 : -1));
        } else {
            this.tableResetFilterDisplayData = data;
        }
    }

    tableResetFilterResetFilters(): void {
        this.tableResetFilterFilterNameList = [
            { text: 'Joe', value: 'Joe' },
            { text: 'Jim', value: 'Jim' }
        ];
        this.tableResetFilterFilterAddressList = [
            { text: 'London', value: 'London' },
            { text: 'Sidney', value: 'Sidney' }
        ];
        this.tableResetFilterSearchNameList = [];
        this.tableResetFilterSearchAddressList = [];
        this.tableResetFilterSearch(this.tableResetFilterSearchNameList, this.tableResetFilterSearchAddressList);
    }

    tableResetFilterResetSortAndFilters(): void {
        this.tableResetFilterSortName = null;
        this.tableResetFilterSortValue = null;
        this.tableResetFilterSortMap = {
            name   : null,
            age    : null,
            address: null
        };
        this.tableResetFilterResetFilters();
        this.tableResetFilterSearch(this.tableResetFilterSearchNameList, this.tableResetFilterSearchAddressList);
    }

    tableCustomizedFilterSearchValue = '';
    tableCustomizedFilterFilterAddressArray = [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
    ];
    tableCustomizedFilterSearchAddress = [];
    tableCustomizedFilterSortMap = {
        name   : null,
        age    : null,
        address: null
    };
    tableCustomizedFilterSortName = null;
    tableCustomizedFilterSortValue = null;
    
    tableCustomizedFilterDisplayData = [ ...this.tableDataSet ];

    tableCustomizedFilterSort(sortName: string, value: boolean): void {
        this.tableCustomizedFilterSortName = sortName;
        this.tableCustomizedFilterSortValue = value;
        for (const key in this.tableCustomizedFilterSortMap) {
            this.tableCustomizedFilterSortMap[ key ] = (key === sortName ? value : null);
        }
        this.tableCustomizedFilterSearch();
    }

    tableCustomizedFilterFilterAddressChange(value: string[]): void {
        this.tableCustomizedFilterSearchAddress = value;
        this.tableCustomizedFilterSearch();
    }

    tableCustomizedFilterSearch(): void {
        const filterFunc = (item) => {
        return (this.tableCustomizedFilterSearchAddress.length ? this.tableCustomizedFilterSearchAddress.some(address => item.address.indexOf(address) !== -1) : true) &&
            (item.name.indexOf(this.tableCustomizedFilterSearchValue) !== -1);
        };
        const data = this.tableDataSet.filter(item => filterFunc(item));
        this.tableCustomizedFilterDisplayData = data.sort((a, b) => (this.tableCustomizedFilterSortValue === 'ascend') ? (a[ this.tableCustomizedFilterSortName ] > b[ this.tableCustomizedFilterSortName ] ? 1 : -1) : (b[ this.tableCustomizedFilterSortName ] > a[ this.tableCustomizedFilterSortName ] ? 1 : -1));
    }

    tableCustomizedFilterReset () {
        this.tableCustomizedFilterSearchValue = '';
        this.tableCustomizedFilterSearch();
    }


    tableAjaxPageIndex = 1;
    tableAjaxPageSize = 10;
    tableAjaxTotal = 1;
    tableAjaxDataSet = [];
    tableAjaxLoading = true;
    tableAjaxSortValue = null;
    tableAjaxSortKey = null;
    tableAjaxFilterGender = [
        { text: 'male', value: 'male' },
        { text: 'female', value: 'female' }
    ];
    searchGenderList: string[] = [];

    tableAjaxSort(sort: { key: string, value: string }): void {
        this.tableAjaxSortKey = sort.key;
        this.tableAjaxSortValue = sort.value;
        this.tableAjaxSearchData();
    }

    tableAjaxSearchData(reset: boolean = false): void {
        if (reset) {
            this.tableAjaxPageIndex = 1;
        }
        this.tableAjaxLoading = true;
        this.randomUserService.getUsers(this.tableAjaxPageIndex, this.tableAjaxPageSize, this.tableAjaxSortKey, this.tableAjaxSortValue, this.searchGenderList).subscribe((data: any) => {
            this.tableAjaxLoading = false;
            this.tableAjaxTotal = 200;
            this.tableAjaxDataSet = data.results;
        });
    }

    tableAjaxUpdateFilter(value: string[]): void {
        this.searchGenderList = value;
        this.tableAjaxSearchData(true);
    }

    tableSpanDataSet = [
        {
            key    : '1',
            name   : 'John Brown',
            age    : 32,
            tel    : '0571-22098909',
            phone  : 18889898989,
            address: 'New York No. 1 Lake Park',
        },
        {
            key    : '2',
            name   : 'Jim Green',
            tel    : '0571-22098333',
            phone  : 18889898888,
            age    : 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key    : '3',
            name   : 'Joe Black',
            age    : 32,
            tel    : '0575-22098909',
            phone  : 18900010002,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key    : '4',
            name   : 'Jim Red',
            age    : 18,
            tel    : '0575-22098909',
            phone  : 18900010002,
            address: 'London No. 2 Lake Park',
        },
        {
            key    : '5',
            name   : 'Jake White',
            age    : 18,
            tel    : '0575-22098909',
            phone  : 18900010002,
            address: 'Dublin No. 2 Lake Park',
        }
    ];

    tableTreedata = [
        {
            key     : 1,
            name    : 'John Brown sr.',
            age     : 60,
            address : 'New York No. 1 Lake Park',
            children: [
                {
                    key    : 11,
                    name   : 'John Brown',
                    age    : 42,
                    address: 'New York No. 2 Lake Park'
                },
                {
                    key     : 12,
                    name    : 'John Brown jr.',
                    age     : 30,
                    address : 'New York No. 3 Lake Park',
                    children: [ {
                        key    : 121,
                        name   : 'Jimmy Brown',
                        age    : 16,
                        address: 'New York No. 3 Lake Park'
                    } ]
                },
                {
                    key     : 13,
                    name    : 'Jim Green sr.',
                    age     : 72,
                    address : 'London No. 1 Lake Park',
                    children: [
                        {
                        key     : 131,
                        name    : 'Jim Green',
                        age     : 42,
                        address : 'London No. 2 Lake Park',
                        children: [
                            {
                            key    : 1311,
                            name   : 'Jim Green jr.',
                            age    : 25,
                            address: 'London No. 3 Lake Park'
                            },
                            {
                            key    : 1312,
                            name   : 'Jimmy Green sr.',
                            age    : 18,
                            address: 'London No. 4 Lake Park'
                            }
                        ]
                        }
                    ]
                }
            ]
        },
        {
            key    : 2,
            name   : 'Joe Black',
            age    : 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];
    tableTreeDataExpandDataCache = {};
    
    tableTreeDataCollapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
        if ($event === false) {
            if (data.children) {
                data.children.forEach(d => {
                    const target = array.find(a => a.key === d.key);
                    target.expand = false;
                    this.tableTreeDataCollapse(array, target, false);
                });
            } else {
                return;
            }
        }
    }
    
    tableTreeDataConvertTreeToList(root: object): TreeNodeInterface[] {
        const stack = [];
        const array = [];
        const hashMap = {};
        stack.push({ ...root, level: 0, expand: false });
    
        while (stack.length !== 0) {
            const node = stack.pop();
            this.tableTreeDataVisitNode(node, hashMap, array);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ ...node.children[ i ], level: node.level + 1, expand: false, parent: node });
                }
            }
        }
    
        return array;
    }
    
    tableTreeDataVisitNode(node: TreeNodeInterface, hashMap: object, array: TreeNodeInterface[]): void {
        if (!hashMap[ node.key ]) {
            hashMap[ node.key ] = true;
            array.push(node);
        }
    }

    fixedElementData = [];

    fixedColumnDataSet = [
        {
            key    : '1',
            name   : 'John Brown',
            age    : 32,
            address: 'New York Park',
        },
        {
            key    : '2',
            name   : 'Jim Green',
            age    : 40,
            address: 'London Park',
        }
    ];

    tableGroupingDisplayData = [];
    tableGroupingData = [];
    tableGroupingSortValue = null;
    tableGroupingFilterName = [
        { text: 'Joe', value: 'Joe' },
        { text: 'John', value: 'John' }
    ];
    tableGroupingSearchName = [];

    tableGroupingSearch(searchName: string[]): void {
        this.tableGroupingSearchName = searchName;
        const filterFunc = (item) => {
            return this.tableGroupingSearchName.length ? this.tableGroupingSearchName.some(name => item.name.indexOf(name) !== -1) : true;
        };
        const data = this.tableGroupingData.filter(item => filterFunc(item));
        this.tableGroupingDisplayData = data.sort((a, b) => (this.tableGroupingSortValue === 'ascend') ? (a.age > b.age ? 1 : -1) : (b.age > a.age ? 1 : -1));
    }

    tableEditableCelli = 1;
    tableEditableCellEditCache = {};
    tableEditableCellDataSet = [
        {
            key    : '0',
            name   : 'Edward King 0',
            age    : '32',
            address: 'London, Park Lane no. 0'
        },
        {
            key    : '1',
            name   : 'Edward King 1',
            age    : '32',
            address: 'London, Park Lane no. 1'
        }
    ];

    tableEditableCellEditAddRow(): void {
        this.tableEditableCelli++;
        this.tableEditableCellDataSet = [ ...this.tableEditableCellDataSet, {
            key    : `${this.tableEditableCelli}`,
            name   : `Edward King ${this.tableEditableCelli}`,
            age    : '32',
            address: `London, Park Lane no. ${this.tableEditableCelli}`
        } ];
        this.tableEditableCellUpdateEditCache();
    }

    tableEditableCellEditDeleteRow(i: string): void {
        const dataSet = this.tableEditableCellDataSet.filter(d => d.key !== i);
        this.tableEditableCellDataSet = dataSet;
    }

    tableEditableCellEditStartEdit(key: string): void {
        this.tableEditableCellEditCache[ key ].edit = true;
    }

    tableEditableCellEditFinishEdit(key: string): void {
        this.tableEditableCellEditCache[ key ].edit = false;
        this.tableEditableCellDataSet.find(item => item.key === key).name = this.tableEditableCellEditCache[ key ].name;
    }

    tableEditableCellUpdateEditCache(): void {
        this.tableEditableCellDataSet.forEach(item => {
            if (!this.tableEditableCellEditCache[ item.key ]) {
                this.tableEditableCellEditCache[ item.key ] = {
                    edit: false,
                    name: item.name
                };
            }
        });
    }

    tableEditableRowi = 1;
    tableEditableRowEditCache = {};
    tableEditableRowDataSet = [];

    tableEditableRowStartEdit(key: string): void {
        this.tableEditableRowEditCache[ key ].edit = true;
    }

    tableEditableRowCancelEdit(key: string): void {
        this.tableEditableRowEditCache[ key ].edit = false;
    }

    tableEditableRowSaveEdit(key: string): void {
        const index = this.tableEditableRowDataSet.findIndex(item => item.key === key);
        Object.assign(this.tableEditableRowDataSet[ index ], this.tableEditableRowEditCache[ key ].data);
        // this.dataSet[ index ] = this.editCache[ key ].data;
        this.tableEditableRowEditCache[ key ].edit = false;
    }

    tableEditableRowUpdateEditCache(): void {
        this.tableEditableRowDataSet.forEach(item => {
            if (!this.tableEditableRowEditCache[ item.key ]) {
                this.tableEditableRowEditCache[ item.key ] = {
                    edit: false,
                    data: { ...item }
                };
            }
        });
    }

    nestedTableData = [];
    innerTableData = [];

    tableDynamicDataSet = [];
    bordered = false;
    loading = false;
    pagination = true;
    header = true;
    title = true;
    footer = true;
    fixHeader = false;
    size = 'small';
    expandable = true;
    checkbox = true;
    allChecked = false;
    indeterminate = false;
    displayData = [];
    simple = false;
    noResult = false;

    currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; expand: boolean; description: string; }>): void {
        this.displayData = $event;
        this.refreshStatus();
    }

    refreshStatus(): void {
        const validData = this.displayData.filter(value => !value.disabled);
        const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
        const allUnChecked = validData.every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
    }

    checkAll(value: boolean): void {
        this.displayData.forEach(data => {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.refreshStatus();
    }

    noResultChange(status: boolean): void {
        this.tableDynamicDataSet = [];
        if (!status) {
            this.ngOnInit();
        }
    }

    ngOnInit(): void {

        //Code Highlight
        this.tableBasicCode = tableCode.tableBasicCode;
        this.tableSelectionCode = tableCode.tableSelectionCode;
        this.tableOperationCode = tableCode.tableOperationCode;
        this.tableCustomSelectionCode = tableCode.tableCustomSelectionCode;
        this.tableDefaultFilterCode = tableCode.tableDefaultFilterCode;
        this.tableFilterCode = tableCode.tableFilterCode;
        this.tableResetFilterCode = tableCode.tableResetFilterCode;
        this.tableCustomizedFilterCode = tableCode.tableCustomizedFilterCode;
        this.tableAjaxCode = tableCode.tableAjaxCode;
        this.tableSizeCode = tableCode.tableSizeCode;
        this.tableBorderedCode = tableCode.tableBorderedCode;
        this.tableExpandableRowCode = tableCode.tableExpandableRowCode;
        this.tableSpanCode = tableCode.tableSpanCode;
        this.tableTreeDataCode = tableCode.tableTreeDataCode;
        this.tableFixHeaderCode = tableCode.tableFixHeaderCode;
        this.tableFixColumnCode = tableCode.tableFixColumnCode;
        this.tableFixColumnHeaderCode = tableCode.tableFixColumnHeaderCode;
        this.tableGroupingCode = tableCode.tableGroupingCode;
        this.tableEditableCellsCode = tableCode.tableEditableCellsCode;
        this.tableEditableRowCode = tableCode.tableEditableRowCode;
        this.tableNestedCode = tableCode.tableNestedCode;
        this.tableDynamicCode = tableCode.tableDynamicCode;
        
        for (let i = 0; i < 46; i++) {
            this.tableOperationDataSet.push({
                name   : `Edward King ${i}`,
                age    : 32,
                address: `London, Park Lane no. ${i}`,
                checked: false
            });

            this.tableCustomeSelectionDataSet.push({
                name   : `Edward King ${i}`,
                age    : 32,
                address: `London, Park Lane no. ${i}`,
                checked: false
            });
        }

        for (let i = 0; i < 100; i++) {
            this.fixedElementData.push({
                name   : `Edward King ${i}`,
                age    : 32,
                address: `London, Park Lane no. ${i}`
            });
        }

        this.tableAjaxSearchData();

        this.tableTreedata.forEach(item => {
            this.tableTreeDataExpandDataCache[ item.key ] = this.tableTreeDataConvertTreeToList(item);
        });

        for (let i = 0; i < 100; i++) {
            this.tableGroupingDisplayData.push({
                name          : 'John Brown',
                age           : i + 1,
                street        : 'Lake Park',
                building      : 'C',
                number        : 2035,
                companyAddress: 'Lake Street 42',
                companyName   : 'SoftLake Co',
                gender        : 'M'
            });
        }
        this.tableGroupingData = [ ...this.tableGroupingDisplayData ];

        this.tableEditableCellUpdateEditCache();

        for (let i = 0; i < 100; i++) {
            this.tableEditableRowDataSet.push({
                key    : i.toString(),
                name   : `Edrward ${i}`,
                age    : 32,
                address: `London Park no. ${i}`
            });
        }
        this.tableEditableRowUpdateEditCache();

        for (let i = 0; i < 3; ++i) {
            this.nestedTableData.push({
                key       : i,
                name      : 'Screem',
                platform  : 'iOS',
                version   : '10.3.4.5654',
                upgradeNum: 500,
                creator   : 'Jack',
                createdAt : '2014-12-24 23:12:00',
                expand    : false
            });
        }

        for (let i = 0; i < 3; ++i) {
            this.innerTableData.push({
                key       : i,
                date      : '2014-12-24 23:12:00',
                name      : 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }

        for (let i = 1; i <= 20; i++) {
            this.tableDynamicDataSet.push({
                name       : 'John Brown',
                age        : `${i}2`,
                address    : `New York No. ${i} Lake Park`,
                description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
                checked    : false,
                expand     : false
            });
        }
    }  
}    