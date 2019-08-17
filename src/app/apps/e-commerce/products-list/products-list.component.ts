import { Component } from '@angular/core';
import { TableService } from '../../../shared/services/table.service';

@Component({
    templateUrl: './products-list.component.html'
})

export class ProductsListComponent  {

    allChecked: boolean = false;
    indeterminate: boolean = false;
    search : any;
    displayData = [];

    productsList = [
        {
            id: 31,
            name: 'Gray Sofa',
            avatar: 'assets/images/others/thumb-9.jpg',
            category: 'Home Decoration',
            price: 912,
            quantity: 23,
            status: 'in stock',
            checked : false
        },
        {
            id: 32,
            name: 'Beat Headphone',
            avatar: 'assets/images/others/thumb-10.jpg',
            category: 'Eletronic',
            price: 137,
            quantity: 56,
            status: 'in stock',
            checked : false
        },
        {
            id: 33,
            name: 'Wooden Rhino',
            avatar: 'assets/images/others/thumb-11.jpg',
            category: 'Home Decoration',
            price: 912,
            quantity: 12,
            status: 'in stock',
            checked : false
        },
        {
            id: 34,
            name: 'Red Chair',
            avatar: 'assets/images/others/thumb-12.jpg',
            category: 'Home Decoration',
            price: 128,
            quantity: 0,
            status: 'out of stock',
            checked : false
        },
        {
            id: 35,
            name: 'Wristband',
            avatar: 'assets/images/others/thumb-13.jpg',
            category: 'Eletronic',
            price: 776,
            quantity: 0,
            status: 'out of stock',
            checked : false
        },
        {
            id: 36,
            name: 'Charging Cable',
            avatar: 'assets/images/others/thumb-14.jpg',
            category: 'Eletronic',
            price: 119,
            quantity: 37,
            status: 'in stock',
            checked : false
        },
        {
            id: 37,
            name: 'Three Legs',
            avatar: 'assets/images/others/thumb-15.jpg',
            category: 'Home Decoration',
            price: 199,
            quantity: 17,
            status: 'in stock',
            checked : false
        },
    ]  
    
    constructor(private tableSvc : TableService) {
        this.displayData = this.productsList
    }

    sort(sortAttribute: any) {
        this.displayData = this.tableSvc.sort(sortAttribute, this.productsList);
    }
    
    currentPageDataChange($event: Array<{ 
        id: number; 
        name: string;
        avatar: string;
        category: string;
        price: number;
        quantity: number;
        status: string;
        checked: boolean; 
    }>): void {
        this.displayData = $event;
        this.refreshStatus();
    }

    refreshStatus(): void {
        const allChecked = this.displayData.every(value => value.checked === true);
        const allUnChecked = this.displayData.every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
    }

    checkAll(value: boolean): void {
        this.displayData.forEach(data => {
            data.checked = value;
        });
        this.refreshStatus();
    }
}    