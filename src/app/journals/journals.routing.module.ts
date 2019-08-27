import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { JournalListComponent } from './journals-list/journal-list.component';
 import { JournalDetailsComponent } from './journal-details/journal-details.component';


 const routes: Routes = [
    {
        path: '',
        component: JournalListComponent,
        data: {
            title: 'Journals'
        }
    },
    {
        path: 'journal-details/:id',
        component: JournalDetailsComponent,
        data: {
            title: 'Journal Details'
        }
    }
 ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JournalsRoutingModule { }
