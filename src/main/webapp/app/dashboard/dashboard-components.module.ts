import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';

import { IncomeCounterComponent } from './dashboard-components/income-counter/income-counter.component';
import { ProjectCounterComponent } from './dashboard-components/project-counter/project-counter.component';
import { ProjectComponent } from './dashboard-components/project/project.component';
import { RecentcommentComponent } from './dashboard-components/recent-comment/recent-comment.component';
import { RecentmessageComponent } from './dashboard-components/recent-message/recent-message.component';
import { SocialSliderComponent } from './dashboard-components/social-slider/social-slider.component';
import { TodoComponent } from './dashboard-components/to-do/todo.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { PageAnalyzerComponent } from './dashboard-components/page-analyzer/pa.component';
import { WidgetComponent } from './dashboard-components/widget/widget.component';
import { CustomerSupportComponent } from './dashboard-components/customer-support/cs.component';
import { TotalEarningComponent } from './dashboard-components/total-earnings/te.component';
import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
import { EarningComponent } from './dashboard-components/earning-report/earning-report.component';
import { ActivityComponent } from './dashboard-components/activity-timeline/activity.component';

@NgModule({
  imports: [FormsModule, CommonModule, NgbModule, ChartsModule, ChartistModule],
  declarations: [
    IncomeCounterComponent,
    ProjectCounterComponent,
    ProjectComponent,
    RecentcommentComponent,
    RecentmessageComponent,
    SocialSliderComponent,
    TodoComponent,
    ProfileComponent,
    PageAnalyzerComponent,
    WidgetComponent,
    CustomerSupportComponent,
    TotalEarningComponent,
    FeedsComponent,
    EarningComponent,
    ActivityComponent
  ],
  exports: [
    IncomeCounterComponent,
    ProjectCounterComponent,
    ProjectComponent,
    RecentcommentComponent,
    RecentmessageComponent,
    SocialSliderComponent,
    TodoComponent,
    ProfileComponent,
    PageAnalyzerComponent,
    WidgetComponent,
    CustomerSupportComponent,
    TotalEarningComponent,
    FeedsComponent,
    EarningComponent,
    ActivityComponent
  ]
})
export class DashboardComponentsModule {}