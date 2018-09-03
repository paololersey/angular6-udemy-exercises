import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/*import { AlertComponent } from './alert/alert.component';*/
// import { CustomComponentsModule } from './../../projects/custom-components/dist';
import { CustomComponentsComponent } from './../../dist/custom-components';

 import { AlertComponent  } from './../../dist/custom-components';
@NgModule({
  declarations: [
    AppComponent,
    CustomComponentsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent]
  entryComponents: [CustomComponentsComponent]
})
export class AppModule { }
