import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'hero-cmp',
  template: `
    <h1>Hello <span>{{ her.name }}</span></h1>
  `,
  styles: [
    `
    h1 spam {
      color: red;
    }
    `
  ]
})
class Hero {
  private hero: Hero;

  ngOnInit() {
    console.log('Initialized');
  }
}
  
