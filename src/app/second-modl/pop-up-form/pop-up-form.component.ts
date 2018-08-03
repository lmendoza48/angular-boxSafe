import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material';
import { OtherListComponent } from '../other-list/other-list.component';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.css']
})
export class PopUpFormComponent implements OnInit {

  name: String;
  lastName : String;

  constructor(public dialogRef: MatDialogRef<OtherListComponent>, public dataServices : DataService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
