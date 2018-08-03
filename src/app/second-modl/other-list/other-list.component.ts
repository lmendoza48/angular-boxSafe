import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '../../../../node_modules/@angular/material';
import { PopUpFormComponent } from '../pop-up-form/pop-up-form.component';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { InformationService } from '../../services/information.service';
import { Information } from '../../models/information';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css']
})
export class OtherListComponent implements OnInit {
  
  /** Data is all information in my DB */
  listInfor : Information[];
  dialogRef : MatDialogRef<PopUpFormComponent>;
  
  constructor(public servicesGetData : InformationService, public dialog : MatDialog) { }

  ngOnInit() {
    var x = this.servicesGetData.getInformation();
    x.snapshotChanges().subscribe(item => {
      this.listInfor = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.listInfor.push(y as Information);
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
      this.servicesGetData.insertInformationInBD(form.value);
      /*else
      this.dataServices.updateDataInformation(form.value); */  
    this.resetForm(form)
  }

  resetForm(form : NgForm){
    if(form != null)
    form.reset();
      this.servicesGetData.selectedData = {
        $key : null,
        name : '',
        description : Date.now(),
        comment : '',
    }
  }

  onDelete(informs : Information){
    if(confirm('Are you sure of delete this element!!!') == true){
      this.servicesGetData.deleteInformationBD(informs);
    }
  }
}
