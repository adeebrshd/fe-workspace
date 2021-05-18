import { Component } from '@angular/core';
import { TestSppResources, TestSppState } from '@itmp/building-blocks-service-provider-portal';

@Component({
  selector: 'example-test-spp',
  templateUrl: 'test-spp.component.html'
})
export class ExampleTestSppComponent {
  resourcesExample: TestSppResources = {
    resourcesData: 'Sample string in Resources'
  };
  stateExample: TestSppState = {
    stateData: 'Sample string in State'
  };
}
