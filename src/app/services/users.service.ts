import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Users } from '../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList : AngularFireList<any>;
  authState : any = null;
  userSelected : Users = new Users;

  constructor(private firebase : AngularFireAuth, private db : AngularFireDatabase, private router : Router) {
    this.firebase.authState.subscribe((auth) =>{
      this.authState = auth
    });
   }

   get isUserAnonymousLoggedIn() : boolean {
    return (this.authState != null) ? this.authState.isAnonymous : false 
  }

  get currentUserId() : string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName() : string {
    return this.authState['email']
  }

  get currentUser() : any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
   if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
     return true
   } else {
     return false
   }
 }

 //** Crear Usuario */
 signUpWithEmail(userList : Users) {
   return this.firebase.auth.createUserWithEmailAndPassword(userList.email, userList.password)
     .then((user) => {
       this.authState = user,
       this.saveUser(userList),
       this.loginWithEmail(userList.email , userList.password)
     })
     .catch(error => {
       console.log(error)
       throw error
     });
 }

 //** Ingresar Usuario */
 loginWithEmail(email: string, password: string) {
   return this.firebase.auth.signInWithEmailAndPassword(email, password)
     .then((user) => {
       this.authState = user
     })
     .catch(error => {
       console.log(error)
       throw error
     });
 }
 
 //**Cerrar session */
 signOut() {
   this.firebase.auth.signOut();
   this.router.navigate(['/'])
 }
 
 /** Save User Information */
 saveUser(userS : Users){
   this.db.list('users').push({
     email : userS.email,
     name : userS.name,
     password : userS.password,
     status : true      
   })
 }

}
