import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './layouts';

const LAYOUT_ROUTES = [...errorRoute];

@NgModule({
  imports: [RouterModule.forRoot([...LAYOUT_ROUTES])],
  exports: [RouterModule]
})
export class EnergyFluxAppRoutingModule {}
