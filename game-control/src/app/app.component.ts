import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayNumber: number[] = [];

  count: number;

  storeArray(count: number) {
    this.count = count;
    this.arrayNumber.push(count);
    console.log(this.arrayNumber);
  }

}
