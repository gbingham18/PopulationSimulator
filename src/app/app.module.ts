import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NvD3Module} from 'ng2-nvd3';

import 'd3';
import 'nvd3';

import { GraphsComponent } from './graphs/graphs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
