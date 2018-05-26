import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UserService {

private isUserLoggedIn;
private userName;
private  whoLogged = 'anonymous';

  constructor() {
    this.isUserLoggedIn = false;
   }

   setUserLoggedStatus(curStatus) {
    this.isUserLoggedIn = curStatus;
    this.whoLogged = 'admin';
   }

   getUserLoggedStatus(){
     return this.isUserLoggedIn;
   }
}
