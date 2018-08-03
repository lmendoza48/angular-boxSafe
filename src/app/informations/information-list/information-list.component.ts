import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Data } from '../../models/data';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})
export class InformationListComponent implements OnInit {

  dataList : Data[];
  step : number; 

  constructor(public dataService : DataService) { }

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

  onItemClick(emp : Data){
    this.dataService.selectedEmployee = Object.assign({}, emp);
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
