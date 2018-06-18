import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  isAuth : boolean = false;
  isUserId : boolean = false;

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
