import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material';
import { OtherListComponent } from '../other-list/other-list.component';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.css']
})
export class PopUpFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OtherListComponent>, public dataServices : InformationService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
