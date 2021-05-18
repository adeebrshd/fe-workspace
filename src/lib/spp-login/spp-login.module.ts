import { NgModule } from '@angular/core';
import { SppLoginComponent } from './spp-login.component';
import { CommonModule } from '@angular/common';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { TalyCoreModule } from '@allianz/taly-core';
import { AclModule } from '@allianz/taly-acl/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxMessageModule } from '@aposin/ng-aquila/message';

@NgModule({
  declarations: [SppLoginComponent],
  imports: [
    CommonModule,
    TalyCoreModule,
    NxHeadlineModule,
    NxGridModule,
    NxFormfieldModule,
    NxInputModule,
    ReactiveFormsModule,
    NxButtonModule,
    NxMessageModule
  ],
  exports: [SppLoginComponent]
})
export class SppLoginModule {}
