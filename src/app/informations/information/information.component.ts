import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { DataService } from '../../services/data.service';
import { UsersService } from '../../services/users.service';
import { MatDialogRef } from '@angular/material';
import { InformationListComponent } from '../information-list/information-list.component';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  isAuth : boolean = false;

  constructor(public dataservices : DataService, public userServices : UsersService, public dialogRef : MatDialogRef<InformationListComponent>) { }

  ngOnInit() {
  }

  /** metodo para traer los datos del formmulario
   * metodo se llama igual al nombre en el form create
   */
  onSubmit(form : NgForm)
  {
    if(form.value.$key == null )
      this.dataservices.insertDataInformation(form.value);
      else
      this.dataservices.updateDataInformation(form.value);  
    this.resetForm(form);
    this.onClose();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.reset();
    this.dataservices.selectedEmployee = {
      $key : null,
      name : '',
      description : Date.now(),
      comment : '',
    }
  }
  
  onClose(): void {
    this.resetForm();
    this.dialogRef.close();
  }

 /* onLogout(){
    this.userServices.signOut();
  }*/

}
