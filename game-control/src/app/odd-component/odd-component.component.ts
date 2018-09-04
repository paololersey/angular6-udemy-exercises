import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-component',
  templateUrl: './odd-component.component.html',
  styleUrls: ['./odd-component.component.css']
})
export class OddComponentComponent implements OnInit {

  constructor() { }

  @Input()
  oddCount: number;
  ngOnInit() {
  }

}
