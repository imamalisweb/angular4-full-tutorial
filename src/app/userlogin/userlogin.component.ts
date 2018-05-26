import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { map } from 'rxjs/operators';
import { UserService }  from '../services/user.service';

class UserItem {
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
  curUsers;
  userDataRes;


  constructor(private router: Router, private http: Http, private myUserService: UserService) { }
  
  ngOnInit() {
     this.formdata = new FormGroup({
        uname: new FormControl('', Validators.compose([
           Validators.required,
           Validators.minLength(4)
        ])),
        passwd: new FormControl('', this.passwordvalidation)
     });
  }

 

  passwordvalidation(formcontrol) {
     if (formcontrol.value.length < 5) {
        return {'pwd' : true};
     }
  }
  onClickSubmit(data) {
     console.log(data.uname);

     if (data.uname === 'admin' && data.passwd === 'admin') {
        console.log('Login Successful');
        this.myUserService.setUserLoggedStatus(true);
        this.router.navigate( ['app-mainpage'] );
     }
  }
}