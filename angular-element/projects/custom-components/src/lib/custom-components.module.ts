import { NgModule } from '@angular/core';
import { CustomComponentsComponent } from './custom-components.component';
import { AlertComponent } from './alert/alert.component';
@NgModule({
  imports: [
  ],
  declarations: [CustomComponentsComponent, AlertComponent],
  exports: [CustomComponentsComponent, AlertComponent]
})
export class CustomComponentsModule { }
