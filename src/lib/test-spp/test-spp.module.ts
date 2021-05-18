import { NgModule } from '@angular/core';
import { TestSppComponent } from './test-spp.component';
import { CommonModule } from '@angular/common';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { TalyCoreModule } from '@allianz/taly-core';
import { AclModule } from '@allianz/taly-acl/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxInputModule } from '@aposin/ng-aquila/input';

@NgModule({
  declarations: [TestSppComponent],
  imports: [
    AclModule,
    CommonModule,
    TalyCoreModule,
    NxHeadlineModule,
    NxGridModule,
    NxFormfieldModule,
    NxInputModule,
    ReactiveFormsModule
  ],
  exports: [TestSppComponent]
})
export class TestSppModule {}
