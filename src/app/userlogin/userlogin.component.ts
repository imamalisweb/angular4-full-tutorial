import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { map } from 'rxjs/operators';

class SearchItem {
  constructor(public id: string,
              public name: string,
              public username: string) {
  }
}
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']  
})

export class UserloginComponent implements OnInit {
  formdata;
  constructor(private router: Router, private http: Http) { }
  ngOnInit() {
     this.formdata = new FormGroup({
        uname: new FormControl('', Validators.compose([
           Validators.required,
           Validators.minLength(6)
        ])),
        passwd: new FormControl('', this.passwordvalidation)
     });
  }

  getUserData() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      (res: Response) => {
        const userDataRes = res.json().map(item => {
          return new SearchItem(
            item.id,
            item.name,
            item.username);
        });
        console.log(userDataRes);
      }
    );

 }

  passwordvalidation(formcontrol) {
     if (formcontrol.value.length < 5) {
        return {'pwddd' : true};
     }
  }
  onClickSubmit(data) {
     console.log(data.uname);
     if (data.uname === 'systemadmin' && data.passwd === 'admin123') {
        alert('Login Successful');
        this.router.navigate( ['app-mainpage'] );
     }
  }
}