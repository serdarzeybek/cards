import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlipModule} from 'ngx-flip';
import { ElementComponent } from './element/element.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material';
import {ElementService} from './element/element.service';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    FlipModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  exports: [
    MatGridListModule
  ],
  providers: [ElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
