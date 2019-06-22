import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EnergyFluxSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EnergyFluxSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EnergyFluxSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EnergyFluxSharedModule {
  static forRoot() {
    return {
      ngModule: EnergyFluxSharedModule
    };
  }
}
