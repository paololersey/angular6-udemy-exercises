import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponentComponent } from './even-component/even-component.component';
import { OddComponentComponent } from './odd-component/odd-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenComponentComponent,
    OddComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
