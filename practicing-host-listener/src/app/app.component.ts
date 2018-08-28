import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display = false;
  count = 0;
  countArray = [];
  class: String;

  @HostListener('click') toggleDisplay() {
    this.count++;
    this.countArray.push('Count : ' + this.count);
    this.display = !this.display;
  }
}


