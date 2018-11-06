import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  @ViewChild('selectbox') selectbox: ElementRef;
  subscription: any;
  subscriptions: any[] = [{
    code: 'A',
    description: 'Advanced'
  }, {
    code: 'B',
    description: 'Basic'
  }, {
    code: 'P',
    description: 'Pro'
  }];

  submit() {
    console.log('password = ' + this.form.value.password +
    ', subscription = ' + this.form.value.subscription + ', email = ' + this.form.value.email );
  }

  ngOnInit() {
    this.subscription = 'A';
  }
}
