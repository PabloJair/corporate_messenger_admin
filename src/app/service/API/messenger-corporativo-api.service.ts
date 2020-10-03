import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponseModel} from '../../shared/models/server-response-model';
import {ContactDirectoryModel} from '../../shared/models/contact-directory-model';
import {PositionWork} from '../../shared/models/position-work';
import {StoreModel} from '../../shared/models/store-model';
import {ExternalModuleModel} from '../../shared/models/ExternalModuleModel';
import {environment} from '../../../environments/environment';
import {UserModel} from '../../shared/models/UserModel';
import PaginationModel from '../../shared/models/PaginationModel';
import AreaModel from '../../shared/models/AreaModel';
import RolModel from '../../shared/models/RolModel';

@Injectable({
  providedIn: 'root'
})
export class MessengerCorporativoApiService {

  private PHP_API_SERVER = environment.HOST;

  private  API_GET_USER_INFORMATION = 'user/usersInformation'
  private  API_AREA = 'area/all'
  private  API_ROL = 'rol/all'
  private  API_CHANGE_ROL = 'user/changeRol'
  private  API_CHANGE_AREA = 'user/changeArea'
  private  API_CHANGE_STATUS = 'user/changeStatus'
  private  API_CHANGE_PROFILE = 'user/updateProfile'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {

  }

  getUsersInformation( idCompany: number= 0, url: string= ''): Observable<ServerResponseModel<PaginationModel<UserModel>>> {
    return this.httpClient.get<ServerResponseModel<PaginationModel<UserModel>>>(
      (url === '') ? (`${this.PHP_API_SERVER}${this.API_GET_USER_INFORMATION}/${idCompany}/2`) : url );
  }


  getAllAreas(): Observable<ServerResponseModel<AreaModel[]>> {
    return this.httpClient.get<ServerResponseModel<AreaModel[]>>(`${this.PHP_API_SERVER}${this.API_AREA}`);
  }

  getAllRol( ): Observable<ServerResponseModel<RolModel[]>>  {
    return this.httpClient.get<ServerResponseModel<RolModel[]>>(`${this.PHP_API_SERVER}${this.API_ROL}`);

  }


  changeRol(idUserInfo: number, idRol: number): Observable<ServerResponseModel<number>> {
    return this.httpClient.patch<ServerResponseModel<number>>
    (`${this.PHP_API_SERVER}${this.API_CHANGE_ROL}/${idUserInfo}/${idRol}`, null);
  }

  changeArea(idUserInfo: number, idArea: number): Observable<ServerResponseModel<number>>  {

    return this.httpClient.patch<ServerResponseModel<number>>
    (`${this.PHP_API_SERVER}${this.API_CHANGE_AREA}/${idUserInfo}/${idArea}`, null);

  }

  changeChangeStatus(idUserInfo: number, status: string): Observable<ServerResponseModel<number>>  {

    return this.httpClient.patch<ServerResponseModel<number>>
    (`${this.PHP_API_SERVER}${this.API_CHANGE_STATUS}/${idUserInfo}/${status}`, null);

  }


  updateUser(user: UserModel): Observable<ServerResponseModel<UserModel>>  {

    return this.httpClient.patch<ServerResponseModel<UserModel>>
    (`${this.PHP_API_SERVER}${this.API_CHANGE_STATUS}/${user.id_user}`, user);

  }
}




