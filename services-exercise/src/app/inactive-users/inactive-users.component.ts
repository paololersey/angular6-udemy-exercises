import { Component, Input } from '@angular/core';
import { UserService } from './../service/user.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UserService) { }


  onSetToActive(id: number) {
    this.userService.userSetToActive.emit(id);
  }
}
