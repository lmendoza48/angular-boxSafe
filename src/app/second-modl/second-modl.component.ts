import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-second-modl',
  templateUrl: './second-modl.component.html',
  styleUrls: ['./second-modl.component.css']
})
export class SecondModlComponent implements OnInit {

  isAuth: Boolean;
  isUserId: Boolean;

  constructor(public auth : UsersService) { }

  ngOnInit() {
    this.isAuth = this.auth.isUserEmailLoggedIn;
    if(this.auth.currentUserId != undefined)
      this.isUserId = true;
  }

  getBack(){
    this.auth.signOut();
  }

}
