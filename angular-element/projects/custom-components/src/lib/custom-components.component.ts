import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert/alert.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-custom-components',
  templateUrl: '<div [innerHTML]="content"></div>',
  styleUrls: ['']
})
export class CustomComponentsComponent {
  title = 'angular-element';
  content = null;
  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, { injector: injector });
    // js code
    customElements.define('my-alert', AlertElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message="This is an normal angular component"></my-alert>');
    }, 1000);
  }
}
