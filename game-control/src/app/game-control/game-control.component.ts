import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  //refreshIntervalId: Timer
  @Output() countEvent: EventEmitter<number> = new EventEmitter<number>();
  count: number = 0;
  ref: number = 0;
  constructor() { }


  startGame() {
    this.count = 0;
    this.ref = window.setInterval(() => { this.count++; this.countEvent.emit(this.count); }, 1000);

  }

  stopGame() {
    clearInterval(this.ref);
    console.log(this.count)
  }

}
