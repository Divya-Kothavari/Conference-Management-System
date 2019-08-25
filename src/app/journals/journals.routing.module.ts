import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { JournalListComponent } from './journals-list/journal-list.component';


 const routes: Routes = [
    {
        path: '',
        component: JournalListComponent,
        data: {
            title: 'Journals'
        }
    }
 ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JournalsRoutingModule { }
