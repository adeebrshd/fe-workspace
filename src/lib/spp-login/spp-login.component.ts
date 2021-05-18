import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AbstractBuildingBlock
} from '@allianz/taly-core';
import { SppLoginResourcesDefinition, SPPLoginStateDefinition } from './spp-login.model';

@Component({
  selector: 'bb-spp-login',
  templateUrl: 'spp-login.component.html',
  styleUrls: ['spp-login.component.scss'],
  providers: [
    {
      provide: AbstractBuildingBlock,
      useExisting: SppLoginComponent
    }
  ]
})
export class SppLoginComponent extends AbstractBuildingBlock<
  {},
  SppLoginResourcesDefinition
> implements OnDestroy, OnInit {
  @Output() loginCallback = new EventEmitter();

  id = 'spp-login';
  data: SppLoginResourcesDefinition;
 
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit() {
  }

  setResources(data: SppLoginResourcesDefinition) {
    this.data = data;
  }

  onPageConnection() {
    this.commitCompletion();
  }

  login() {
    this.loginCallback.emit();
  }
  
  getState() {
    const stateValue:SPPLoginStateDefinition  = this.formGroup.value;

    return {
      ...stateValue
    };
  }

  ngOnDestroy() {}
}
