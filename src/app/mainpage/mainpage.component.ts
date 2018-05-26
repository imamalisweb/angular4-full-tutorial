import { Component, OnInit } from '@angular/core';
import { UserService }  from '../services/user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private myUserService: UserService) { }

  ngOnInit() {
    console.log(this.myUserService.getUserLoggedStatus());
  }

}
