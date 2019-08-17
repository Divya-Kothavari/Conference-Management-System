import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PopoverComponent } from './popover/popover.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TagComponent } from './tag/tag.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
    {
        path: 'data-display',
        data: {
            title: 'Data Display'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: 'avatar',
                component: AvatarComponent,
                data: {
                    title: 'Avatar'
                }
            },
            {
                path: 'badge',
                component: BadgeComponent,
                data: {
                    title: 'Badge'
                }
            },
            {
                path: 'calendar',
                component: CalendarComponent,
                data: {
                    title: 'Calendar'
                }
            },
            {
                path: 'card',
                component: CardComponent,
                data: {
                    title: 'Card'
                }
            },
            {
                path: 'carousel',
                component: CarouselComponent,
                data: {
                    title: 'Carousel'
                }
            },
            {
                path: 'collapse',
                component: CollapseComponent,
                data: {
                    title: 'Colllapse'
                }
            },
            {
                path: 'comment',
                component: CommentComponent,
                data: {
                    title: 'Comment'
                }
            },
            {
                path: 'descriptions',
                component: DescriptionsComponent,
                data: {
                    title: 'Descriptions'
                }
            },
            {
                path: 'empty',
                component: EmptyComponent,
                data: {
                    title: 'Empty'
                }
            },
            {
                path: 'list',
                component: ListComponent,
                data: {
                    title: 'List'
                }
            },
            {
                path: 'popover',
                component: PopoverComponent,
                data: {
                    title: 'Popover'
                }
            },
            {
                path: 'statistic',
                component: StatisticComponent,
                data: {
                    title: 'Statistic'
                }
            },
            {
                path: 'table',
                component: TableComponent,
                data: {
                    title: 'Table'
                }
            },
            {
                path: 'tabs',
                component: TabsComponent,
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'tag',
                component: TagComponent,
                data: {
                    title: 'Tags'
                }
            },
            {
                path: 'timeline',
                component: TimelineComponent,
                data: {
                    title: 'Timeline'
                }
            },
            {
                path: 'tooltip',
                component: TooltipComponent,
                data: {
                    title: 'Tooltip'
                }
            },
            {
                path: 'tree',
                component: TreeComponent,
                data: {
                    title: 'Tree'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsDataDisplayRoutingModule { }
