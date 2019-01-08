import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Data } from '../../models/data';
import { DragulaService } from 'ng2-dragula';
import { MatDialogRef, MatDialog } from '@angular/material';
import { InformationComponent } from '../information/information.component';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})
export class InformationListComponent implements OnInit {

  dataList : Data[];
  step : number; 
  term : Object;
  dialogRef : MatDialogRef<InformationComponent>;

  constructor(public dataService : DataService, private dragula : DragulaService, public dialog : MatDialog) { 
    /*const bag: any = this.dragula.find('dataList-bag');
    if (bag !== undefined ) this.dragula.destroy('dataList-bag');
    this.dragula.createGroup("dataList-bag", {
      removeOnSpill: false
    });*/
  }

  ngOnInit() {
    var xx = this.dataService.getData();
    xx.snapshotChanges().subscribe(item => {
      this.dataList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.dataList.push(y as Data);
      })
    });
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(InformationComponent);
    this.dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed' + result );
     /* if(result != undefined){
        this.onItemClick(result);
      }*/
    });
  }

  onItemClick(emp : Data){
    this.dataService.selectedEmployee = Object.assign({}, emp);
    this.openDialog();
  }

  onDelete(emp : Data){
    if(confirm('Are you sure of delete this element!!!') == true){
      this.dataService.deleteDataInformation(emp);
    }
  }

  /*
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }*/

}
