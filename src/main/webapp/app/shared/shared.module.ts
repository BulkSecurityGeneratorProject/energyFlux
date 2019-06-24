import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EnergyFluxSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './header-navigation/navigation.component';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  imports: [EnergyFluxSharedCommonModule, PerfectScrollbarModule, NgbModule, RouterModule],
  declarations: [JhiLoginModalComponent, SidebarComponent, HasAnyAuthorityDirective, NavigationComponent],
  entryComponents: [JhiLoginModalComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    PerfectScrollbarModule,
    EnergyFluxSharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective,
    SidebarComponent,
    NavigationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EnergyFluxSharedModule {
  static forRoot() {
    return {
      ngModule: EnergyFluxSharedModule
    };
  }
}
