import { Component, Input } from '@angular/core';
import { UserService } from './../service/user.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent{
  @Input() users: string[];
 /* @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }*/

  constructor(private userService: UserService) { }

  onSetToInactive(id: number) {
    this.userService.userSetToInactive.emit(id);
  }
}
