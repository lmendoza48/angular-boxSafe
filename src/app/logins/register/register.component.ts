import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: {name: string, message : string} = {name : '', message : ''};
  

  constructor(public auth : UsersService, private router : Router) { }

  ngOnInit() {
  }

  onRegister(form : NgForm){
    this.auth.signUpWithEmail(form.value)
        .then(()=>{
            form.reset()
            this.router.navigate(['/other'])
        }).catch((_error)=>{
          this.errorMessage = _error
          this.router.navigate(['/register'])
        })
  }

}
