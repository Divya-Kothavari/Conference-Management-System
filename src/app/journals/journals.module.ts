import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JournalsRoutingModule } from './journals.routing.module';
import { CoreModule } from '../core/core.module';
import { JournalListComponent } from './journals-list/journal-list.component';
import { AppsService } from '../shared/services/apps.service';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CoreModule,
        ReactiveFormsModule,
        JournalsRoutingModule,
        QuillModule
    ],
    declarations: [
        JournalListComponent,
        JournalDetailsComponent
    ],
    providers: [
        AppsService,
    ]
})

export class JournalsModule {}