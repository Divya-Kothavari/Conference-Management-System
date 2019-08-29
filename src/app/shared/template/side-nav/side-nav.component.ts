import { Component } from '@angular/core';
import { ROUTES } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './side-nav.component.html'
})

export class SideNavComponent{

    public menuItems: any[]
    isFolded : boolean;
    isSideNavDark : boolean;

    constructor( private themeService: ThemeConstantService) {}

    ngOnInit(): void {
        let role = window.localStorage.getItem('role');

        // if (role === 'Admin') {
        //     this.menuItems = ROUTES.filter(menuItem => menuItem.title === 'Journals') ;
        // } 
        // if (role === 'SuperAdmin') {
        //     this.menuItems = ROUTES.filter(menuItem => menuItem); 
        // }
        this.menuItems = ROUTES.filter(menuItem => menuItem); 
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
    }
}
