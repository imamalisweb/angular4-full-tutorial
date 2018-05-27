import { Injectable } from '@angular/core';
//import { mariasql } from "node_modules/mariasql/node_modules/node";
//import { mariasql } from 'mariasql';

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

   getUserLoggedStatus() {
     return this.isUserLoggedIn;
   }

   runSelectCmd() {
  //  http://localhost/db-to-api-master/db-to-api-master/

   }


}
