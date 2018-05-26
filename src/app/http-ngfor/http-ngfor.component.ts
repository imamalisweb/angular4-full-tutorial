import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


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
}
