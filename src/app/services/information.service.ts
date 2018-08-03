import { Injectable } from '@angular/core';
import { Information } from '../models/information';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  idUser:string;
  informationList : AngularFireList<any>;
  selectedData : Information = new Information();

  constructor(public firebase : AngularFireDatabase, public userServices : UsersService) { }

  getInformation(){
    this.idUser = this.userServices.currentUserId;
    this.informationList = this.firebase.list('information_'+this.idUser);
    return this.informationList;
  }

  insertInformationInBD(dataInfo : Information){
    var dateD = Date.now();
    dataInfo.description = dateD;
    this.informationList.push({
      name : dataInfo.name,
      description : dataInfo.description,
      comment : dataInfo.comment
    })
  }

  deleteInformationBD(information : Information){
    this.informationList.remove(information.$key)
  }
}
