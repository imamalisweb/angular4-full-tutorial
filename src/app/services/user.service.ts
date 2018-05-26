import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private isUserLoggedIn;
private userName;

  constructor() {
    this.isUserLoggedIn = false;
   }

   setUserLoggedStatus(curStatus) {
    this.isUserLoggedIn = curStatus;
   }

   getUserLoggedStatus(){
     return this.isUserLoggedIn;
   }
}
