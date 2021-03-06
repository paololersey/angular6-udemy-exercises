import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'div-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertStandardComponent implements OnInit {

  @Input() message: String;
  
  constructor() { }

  ngOnInit() {
  }

}
