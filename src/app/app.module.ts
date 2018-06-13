import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { InformationsComponent } from './informations/informations.component';
import { InformationComponent } from './informations/information/information.component';
import { InformationListComponent } from './informations/information-list/information-list.component';
import { LoginsComponent } from './logins/logins.component';
import { AuthsComponent } from './logins/auths/auths.component';
import { RegisterComponent } from './logins/register/register.component';
import { UsersService } from './services/users.service';
import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
  path: '' , 
  component:LoginsComponent 
  },
  { 
  path: 'data', 
  component: InformationsComponent 
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    InformationsComponent,
    InformationComponent,
    InformationListComponent,
    LoginsComponent,
    AuthsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes //route where my app
    )
  ],
  providers: [ 
    UsersService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
