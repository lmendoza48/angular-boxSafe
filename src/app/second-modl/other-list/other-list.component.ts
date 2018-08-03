import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../models/data';
import { MatDialog, MatDialogRef } from '../../../../node_modules/@angular/material';
import { PopUpFormComponent } from '../pop-up-form/pop-up-form.component';
import { UsersService } from '../../services/users.service';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css']
})
export class OtherListComponent implements OnInit {
  
  /** Data is all information in my DB */
  listInfor : Data[];
  dialogRef : MatDialogRef<PopUpFormComponent>;
  name: String;
  lastName: String;
  
  constructor(public servicesGetData : DataService, public dialog : MatDialog, public dataServices : DataService) { }

  ngOnInit() {
    var x = this.servicesGetData.getData();
    x.snapshotChanges().subscribe(item => {
      this.listInfor = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.listInfor.push(y as Data);
      })
    });
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(PopUpFormComponent);
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result );
      if(result != undefined){
        this.onSubmit(result);
      }
    });
  }

  onSubmit(form : NgForm) {
    if(form.value.$key == null )
      this.dataServices.insertDataInformation(form.value);
      else
      this.dataServices.updateDataInformation(form.value);  
    this.resetForm(form)
  }

  resetForm(form : NgForm){
    if(form != null)
    form.reset();
      this.dataServices.selectedEmployee = {
        $key : null,
        name : '',
        description : Date.now(),
        comment : '',
    }
  }

  onDelete(informs : Data){
    if(confirm('Are you sure of delete this element!!!') == true){
      this.dataServices.deleteDataInformation(informs);
    }
  }
}
