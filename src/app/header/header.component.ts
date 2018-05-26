import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogged = false;

  constructor(private myUserService: UserService) { }

  ngOnInit() {
    this.isUserLogged = this.myUserService.getUserLoggedStatus();
    console.log(this.myUserService.getUserLoggedStatus());
  }

}
