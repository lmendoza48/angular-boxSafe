import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  idUser:string;
  dataList : AngularFireList<any>;
  selectedEmployee : Data = new Data();

  constructor(public userServices : UsersService, public firebase : AngularFireDatabase) { }

  /** metodo para obtener el nombre de tabla 
   * y listar tambien los datos */
  getData(){
    this.idUser = this.userServices.currentUserId;
    this.dataList = this.firebase.list('employees_'+this.idUser);
    return this.dataList;
  }

  insertDataInformation(dataInfo : Data){
    this.dataList.push({
      name : dataInfo.name,
      description : dataInfo.description,
      comment : dataInfo.comment
    })
  }

  updateDataInformation(information : Data){
    this.dataList.update(information.$key,{
      name : information.name,
      description : information.description,
      comment : information.comment
    })
  }

  deleteDataInformation(information : Data){
    this.dataList.remove(information.$key)
  }

}
