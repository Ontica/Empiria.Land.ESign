/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';

import { MainLayoutModule } from './main-layout/main-layout.module';

import { AppRoutingModule } from './app-routing.module';

import { EsignModule } from './views/esign/esign.module';

import { AppComponent } from './app.component';


@NgModule({

  bootstrap: [ AppComponent ],

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,
    MainLayoutModule,

    EsignModule,

    AppRoutingModule
  ],

})
export class AppModule { }
