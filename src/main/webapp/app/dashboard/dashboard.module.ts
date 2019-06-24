import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { EnergyFluxSharedModule } from 'app/shared';
import { DASHBOARD_ROUTE, DashboardComponent } from '.';
import { DashboardComponentsModule } from './dashboard-components.module';

@NgModule({
  imports: [EnergyFluxSharedModule, ChartsModule, ChartistModule, DashboardComponentsModule, RouterModule.forChild([DASHBOARD_ROUTE])],
  declarations: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EnergyFluxDashboardModule {}
