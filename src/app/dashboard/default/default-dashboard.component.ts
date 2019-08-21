import { Component } from '@angular/core'
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './default-dashboard.component.html'
})

export class DefaultDashboardComponent {
    roleForm: FormGroup;
    isVisible:false;
    constructor( private colorConfig:ThemeConstantService,
        private http: HttpClient,
        private fb: FormBuilder ) {
        
    }

    ngOnInit(){
        this.roleForm = this.fb.group({
            roleName: [ null, [ Validators.required ] ],
        });
    }
     
    roleSet = [
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
    handleCancel() {
        this.isVisible = false;
        this.roleForm.reset();
    }
}  
