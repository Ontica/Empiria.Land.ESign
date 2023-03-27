/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@app/shared/angular-material.module';
import { AngularFlexLayoutModule } from '@app/shared/angular-flex-layout.module';
import { SharedModule } from '@app/shared/shared.module';


import { EmpEsignGridComponent } from './emp-esign-grid.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';


import { SecureUrlPipe } from '@app/core/pipes/secure-url.pipe';

@NgModule({
  declarations: [EmpEsignGridComponent, DocumentViewerComponent, SecureUrlPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AngularMaterialModule,
    AngularFlexLayoutModule,
    SharedModule,
    
  ],
  exports: [ 
    EmpEsignGridComponent,
    DocumentViewerComponent
  ]
})
export class EsignModule { }
