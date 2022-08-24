import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PuzzleService} from "./puzzle.service";
import {UtilityService} from "./utility.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PuzzleService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
