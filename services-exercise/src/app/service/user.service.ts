
import { Component, EventEmitter, Input, Output, Injectable } from '@angular/core';

@Injectable()
export class UserService {
    users: string[];
    userSetToActive = new EventEmitter<number>();
    userSetToInactive = new EventEmitter<number>();

    getUsers() {
        return this.users;
    }
}
