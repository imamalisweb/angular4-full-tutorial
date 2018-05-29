import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Headers, RequestOptions } from '@angular/http';


class UserItem {
  constructor(public id: string,
              public name: string,
              public username: string) {
  }
}

@Component({
  selector: 'app-http-ngfor',
  templateUrl: './http-ngfor.component.html',
  styleUrls: ['./http-ngfor.component.css']
})
export class HttpNgforComponent implements OnInit {
  userDataRes;
  userDataResPhp;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }

  getUserData() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
     .subscribe(
       (res: Response) => {
          this.userDataRes = res.json().map(item => {
           return new UserItem(
             item.id,
             item.name,
             item.username);
         });
         console.log(this.userDataRes);
       }
     );
  }


  getUserDataPhp() {
    //header("Content-type:application/json");

    this.http.post(' http://localhost/db-to-api-master/db-to-api-master/')
    .subscribe(
      (res: Response) => {
         this.userDataResPhp = res.json().map(item => {
          return new UserItem(
            item.id,
            item.name,
            item.username);
        });
        console.log(this.userDataResPhp);
      }
    );

  }
  
  /* ------Observable----------------
    --- you need to create a new file  with the Interface 
    export interface USerAbstr {
  id: string;
  name: string;
  username: string;  
}


  getUsers(): Observable<USerAbstr[]> {
    return this._http
        .get('https://jsonplaceholder.typicode.com/users')
        .map((response: Response) => <USerAbstr[]> response.json())
        // .do(data => console.log(data))
        .catch(this.handleError);
  }

  getUser(id: string): Observable<USerAbstr> {
    return this.getUsers()
    .map((_users: USerAbstr[]) => _users.find(_users => _users.id === id))
    .do(data => console.log(data));
  }

    private handleError(error: Response) {
    console.error(error);
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }
  */
  
  
}
