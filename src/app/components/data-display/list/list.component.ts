import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

let listCode = require('../../../../assets/data/syntax/components/data-display/listCode.json');
declare var require: any

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
    templateUrl: './list.component.html'
})

export class ListComponent {

    //Code Highlight
    listSizeCode: string;
    listBasicCode: string;
    listLoadMoreCode: string;
    listVerticalCode: string;
    listGridCode: string;
    listGridResponsiveCode: string;
    listScrollLoadCode: string;

    listSizeData = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ]; 

    listBasicData = [
        {
            title: 'Ant Design Title 1'
        },
        {
            title: 'Ant Design Title 2'
        },
        {
            title: 'Ant Design Title 3'
        },
        {
            title: 'Ant Design Title 4'
        }
    ];

    listGridData = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
    ];

    listResponsiveGridData = [
        {
            title: 'Title 1'
        },
        {
            title: 'Title 2'
        },
        {
            title: 'Title 3'
        },
        {
            title: 'Title 4'
        },
        {
            title: 'Title 5'
        },
        {
            title: 'Title 6'
        }
    ];

    listVerticalData = new Array(5).fill({}).map((i, index) => {
        return {
            href: 'http://ant.design',
            title: `ant design part ${index}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
        };
    });

    listLoadMoreInitLoading = true; // bug
    listLoadingMore = false;
    listLoadMoreData = [];
    listLoadMore = [];

    constructor(private http: HttpClient, private msg: NzMessageService) {}

    ngOnInit(): void {
        this.getData((res: any) => {
            this.listLoadMoreData = res.results;
            this.listLoadMore = res.results;
            this.listLoadMoreInitLoading = false;
        });

        this.getData((res: any) => this.listScrollLoadData = res.results);

        //Code Highlight
        this.listSizeCode = listCode.listSizeCode;
        this.listBasicCode = listCode.listBasicCode;
        this.listLoadMoreCode= listCode.listLoadMoreCode;
        this.listVerticalCode= listCode.listVerticalCode;
        this.listGridCode= listCode.listGridCode;
        this.listGridResponsiveCode= listCode.listGridResponsiveCode;
        this.listScrollLoadCode= listCode.listScrollLoadCode;
    }

    getData(callback: (res: any) => void): void {
        this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
    }

    listOnLoadMore(): void {
        this.listLoadingMore = true;
        this.listLoadMore = this.listLoadMoreData.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
        this.http.get(fakeDataUrl).subscribe((res: any) => {
            this.listLoadMoreData = this.listLoadMoreData.concat(res.results);
            this.listLoadMore = [...this.listLoadMoreData];
            this.listLoadingMore = false;
        });
    }

    listLoadMorEdit(item: any): void {
        this.msg.success(item.email);
    }

    listScrollLoadData: any[] = [];
    listScrollLoadLoading = false;
    listScrollLoadHasMore = true;

    onScroll(): void {
        if (this.listScrollLoadLoading) return;
        this.listScrollLoadLoading = true;
        if (this.listScrollLoadData.length > 14) {
            this.msg.warning('Infinite List loaded all');
            this.listScrollLoadHasMore = false;
            this.listScrollLoadLoading = false;
            return;
        }
        this.getData((res: any) => {
            this.listScrollLoadData = this.listScrollLoadData.concat(res.results);
            this.listScrollLoadLoading = false;
        });
    }
}    