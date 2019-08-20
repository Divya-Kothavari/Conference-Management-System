import { Component } from '@angular/core'
import { ThemeConstantService } from '../../shared/services/theme-constant.service';

@Component({
    templateUrl: './default-dashboard.component.html'
})

export class DefaultDashboardComponent {

    constructor( private colorConfig:ThemeConstantService ) {}

    ngOnInit(){}
     
    dataSet = [
        {
            key    : '1',
            name   : 'SuperAdmin',
            address: 'SuperAdmin Description'
        },
        {
            key    : '2',
            name   : 'Admin',
             address: 'Admin Description'
        },
        {
            key    : '3',
            name   : 'Editor',
            address: 'Editor Description'
        },
        {
            key    : '4',
            name   : 'Author',
            address: 'Author Description'
        },
        {
            key    : '5',
            name   : 'Reviewer',
            address: 'Reviewer Description'
        }
    ];
}  
