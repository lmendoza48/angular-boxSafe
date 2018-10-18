import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auths',
  templateUrl: './auths.component.html',
  styleUrls: ['./auths.component.css']
})
export class AuthsComponent implements OnInit {

  email : '';
  password : '';
  show : boolean = true;
  error : { name:string, message:string } = {name:'', message : ''};

  constructor(public authService : UsersService, private router : Router) { }

  ngOnInit() {
  }

  onLoginUser(){
    this.authService.loginWithEmail(this.email, this.password)
        .then(()=>{
          this.router.navigate(['/data'])
        }).catch((_error)=>{
          this.error = _error
          this.router.navigate(['/login'])
        })
  }
  changeType(){
    if(this.show == true){
        this.show = false;
    }else{
       this.show = true;
    }
  }
}
