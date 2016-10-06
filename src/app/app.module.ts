import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RxjsKoredakeRoutingModule } from './app-routing.module';
import { StoreModule } from './store';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';

import { Page1Service } from './page1/page1.service';


@NgModule({
  declarations: [
    AppComponent, Page1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RxjsKoredakeRoutingModule,
    StoreModule
  ],
  providers: [Page1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
