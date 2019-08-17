import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

let selectCode = require('../../../../assets/data/syntax/components/data-entry/selectCode.json');
declare var require: any

@Component({
    templateUrl: './select.component.html'
})   

export class SelectComponent implements OnInit {

    //Code Highlight
    selectBasicCode: string
    selectSizeCode: string
    selectSeachFieldCode: string
    selectTagCode: string
    selectMultipleCode: string
    selectCoordinateCode: string
    selectOptionCode: string
    selectOptionGroupCode: string
    selectCustomCode: string
    selectSearchUserCode: string
    selectCustomDropdown: string
    selectHideAlreadySelected: string
    selectLoadDataCode: string
    selectAPICode: string

    selectSizeListOfOption = [];
    selectSizeSingleValue = 'a10';
    selectSizeMultipleValue = [ 'a10', 'c12' ];
    selectSizeTagValue = [ 'a10', 'c12', 'tag' ];
    selectTagListOfOption = [];
    selectTagListOfTagOptions = [];
    selectMultipleListOfOption = [];
    provinceData = [ 'Zhejiang', 'Jiangsu' ];
    cityData = {
        Zhejiang: [ 'Hangzhou', 'Ningbo', 'Wenzhou' ],
        Jiangsu : [ 'Nanjing', 'Suzhou', 'Zhenjiang' ]
    };
    selectOptionList = [
        { label: 'Lucy', value: 'lucy', age: 20 },
        { label: 'Jack', value: 'jack', age: 22 }
    ];
    selectedSearchUserOptionList = [];
    selectDataLoadOptionList = [];
    selectUserRandomUserUrl = 'https://api.randomuser.me/?results=5';
    selectLoadDatarandomUserUrl = 'https://api.randomuser.me/?results=10'; 
    searchChange$ = new BehaviorSubject('');
    listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
    listOfSelectedValue: string[] = [];
    
    selectBasicSelectedValue = 'lucy';
    selectSize = 'default';
    selectSearchFieldValue;
    selectMultipleListOfSelectedValue = [ 'a10', 'c12' ];
    selectedProvince = 'Zhejiang';
    selectedCity = 'Hangzhou';
    selectOptionSelectedValue = { label: 'Jack', value: 'jack', age: 22 };
    selectOptionGroupSelectedValue = 'lucy';
    selectCustomSelectedOS = '';
    selectSearchUserIsLoading = false;
    selectLoadDataIsLoading = false;
    selectedUser;
    selectLoadDataSelectedUser;

    constructor(private http: HttpClient) {
    }


    ngOnInit(): void {
        //Code Highlight
        this.selectBasicCode = selectCode.selectBasicCode;
        this.selectSizeCode = selectCode.selectSizeCode;
        this.selectSeachFieldCode = selectCode.selectSeachFieldCode;
        this.selectTagCode = selectCode.selectTagCode;
        this.selectMultipleCode = selectCode.selectMultipleCode;
        this.selectCoordinateCode = selectCode.selectCoordinateCode;
        this.selectOptionCode = selectCode.selectOptionCode;
        this.selectOptionGroupCode = selectCode.selectOptionGroupCode;
        this.selectCustomCode = selectCode.selectCustomCode;
        this.selectSearchUserCode = selectCode.selectSearchUserCode;
        this.selectCustomDropdown = selectCode.selectCustomDropdown;
        this.selectHideAlreadySelected = selectCode.selectHideAlreadySelected;
        this.selectLoadDataCode = selectCode.selectLoadDataCode;
        this.selectAPICode = selectCode.selectAPICode;

        const selectChildren = [];

        for (let i = 10; i < 36; i++) {
            selectChildren.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }

        this.selectSizeListOfOption = selectChildren;
        this.selectTagListOfOption = selectChildren;
        this.selectMultipleListOfOption = selectChildren;

        const getRandomNameList = (name: string) => this.http.get(`${this.selectUserRandomUserUrl}`).pipe(map((res: any) => res.results)).pipe(map((list: any) => {
            return list.map(item => `${item.name.first} ${name}`);
        }));
        const optionList$: Observable<string[]> = this.searchChange$.asObservable().pipe(debounceTime(500)).pipe(switchMap(getRandomNameList));
        optionList$.subscribe(data => {
            this.selectedSearchUserOptionList = data;
            this.selectSearchUserIsLoading = false;
        });

        this.loadMore();
    }

    provinceChange(value: string): void {
        this.selectedCity = this.cityData[ value ][ 0 ];
    }

    compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;
    
    selectOptionLog(value: { label: string, value: string, age: number }): void {
        console.log(value);
    }

    selectUserOnSearch(value: string): void {
        this.selectSearchUserIsLoading = true;
        this.searchChange$.next(value);
    }
  
    electLoadDataGetRandomNameList: Observable<string[]> = this.http.get(`${this.selectLoadDatarandomUserUrl}`).pipe(map((res: any) => res.results)).pipe(map((list: any) => {
        return list.map(item => `${item.name.first}`);
    }));

    loadMore(): void {
        this.selectLoadDataIsLoading = true;
        this.electLoadDataGetRandomNameList.subscribe(data => {
            this.selectLoadDataIsLoading = false;
            this.selectDataLoadOptionList = [ ...this.selectDataLoadOptionList, ...data ];
        });
    }

    isNotSelected(value: string): boolean {
        return this.listOfSelectedValue.indexOf(value) === -1;
    }
}    