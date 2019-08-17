import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ComponentsDataDisplayRoutingModule } from "./components-data-display-routing.module";

import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CommentComponent } from './comment/comment.component';
import { DescriptionsComponent } from './descriptions/descriptions.component';
import { EmptyComponent } from './empty/empty.component';
import { ListComponent } from './list/list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { PopoverComponent } from './popover/popover.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TagComponent } from './tag/tag.component'
import { TimelineComponent } from './timeline/timeline.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';

import { RandomUserService } from '../../shared/services/random-user.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        HighlightModule,
        ComponentsDataDisplayRoutingModule,
        InfiniteScrollModule
    ],
    exports: [],
    declarations: [
        AvatarComponent,
        BadgeComponent,
        CalendarComponent,
        CardComponent,
        CarouselComponent,
        CollapseComponent,
        CommentComponent,
        DescriptionsComponent,
        EmptyComponent,
        ListComponent,
        PopoverComponent,
        StatisticComponent,
        TableComponent,
        TabsComponent,
        TagComponent,
        TimelineComponent,
        TooltipComponent,
        TreeComponent
    ],
    providers: [RandomUserService],
})

export class ComponentsDataDisplayModule { }
