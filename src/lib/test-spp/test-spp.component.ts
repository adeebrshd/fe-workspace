import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractBuildingBlock, createBuildingBlockProvider } from '@allianz/taly-core';
import { autoFormBindingFactory, FormBindingReturnValue } from '@allianz/taly-acl/form-support';
import { untilDestroyed } from 'ngx-take-until-destroy';

export interface TestSppResources {
  resourcesData: string;
}

export interface TestSppState {
  stateData: string;
}

const bindAclWithForm = autoFormBindingFactory();

@Component({
  selector: 'bb-test-spp',
  templateUrl: 'test-spp.component.html',
  styleUrls: ['test-spp.component.scss'],
  providers: [createBuildingBlockProvider(TestSppComponent)]
})
export class TestSppComponent
  extends AbstractBuildingBlock<TestSppState, TestSppResources>
  implements OnDestroy, OnInit {

  id = 'test-bb'
  
  myState: TestSppState = {
    stateData: ''
  };

  formGroup = new FormGroup({
    person: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    })
  });

  aclFormBinding: FormBindingReturnValue;

  ngOnInit() {
    this.setupAclBinding();
  }

  setupAclBinding() {
    this.aclFormBinding = bindAclWithForm(this.acl, this.formGroup);
    this.aclFormBinding.stream$.pipe(untilDestroyed(this)).subscribe();
  }

  setResources(data: TestSppResources) {
    console.log('Resources: ', data);
  }

  setState(data: TestSppState) {
    console.log('State: ', data);
  }

  getState(): TestSppState {
    return this.myState;
  }

  onPageConnection() {
    this.commitCompletion();
  }

  ngOnDestroy() {}
}
