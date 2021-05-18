import { NgModule } from '@angular/core';
import { AclModule } from '@allianz/taly-acl/angular';
import { ExampleSppLoginComponent } from './spp-login.component';
import { SppLoginModule } from '@itmp/building-blocks-service-provider-portal';

@NgModule({
  declarations: [ExampleSppLoginComponent],
  imports: [AclModule, SppLoginModule],
  exports: [ExampleSppLoginComponent]
})
export class ExampleSppLoginModule {
  static components() {
    return {
      'ExampleSppLoginComponent': ExampleSppLoginComponent
    };
  }
}
