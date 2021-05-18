import { NgModule } from '@angular/core';
import { AclModule } from '@allianz/taly-acl/angular';
import { ExampleTestSppComponent } from './test-spp.component';
import { TestSppModule } from '@itmp/building-blocks-service-provider-portal';

@NgModule({
  declarations: [ExampleTestSppComponent],
  imports: [AclModule, TestSppModule],
  exports: [ExampleTestSppComponent]
})
export class ExampleTestSppModule {
  static components() {
    return {
      'ExampleTestSppComponent': ExampleTestSppComponent
    };
  }
}
