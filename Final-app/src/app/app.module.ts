import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';


import { AppComponent } from './app.component';
import { FinalSearchComponent } from './final-search/final-search.component';


@NgModule({
  declarations: [
    AppComponent,
    FinalSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
