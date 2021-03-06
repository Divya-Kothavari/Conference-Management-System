import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JournalsRoutingModule } from './journals.routing.module';
import { CoreModule } from '../core/core.module';
import { JournalListComponent } from './journals-list/journal-list.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
import { JournalViewComponent } from './journal-view/journal-view.component';
import { QuillModule } from 'ngx-quill';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AvatarModule } from 'ngx-avatar';

import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CoreModule,
        ReactiveFormsModule,
        JournalsRoutingModule,
        QuillModule,
        Ng2SearchPipeModule,
        SortablejsModule,
        AvatarModule
    ],
    declarations: [
        JournalListComponent,
        JournalDetailsComponent,
        JournalViewComponent
    ],
    providers: [
    ]
})

export class JournalsModule {}