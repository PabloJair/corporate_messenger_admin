import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponseModel} from '../../shared/models/server-response-model';
import {ContactDirectoryModel} from '../../shared/models/contact-directory-model';
import {PositionWork} from '../../shared/models/position-work';
import {StoreModel} from '../../shared/models/store-model';
import {ExternalModuleModel} from '../../shared/models/ExternalModuleModel';
import {environment} from '../../../environments/environment';
import {UserModel} from './UserModel';
import PaginationModel from '../../shared/models/PaginationModel';

@Injectable({
  providedIn: 'root'
})
export class MessengerCorporativoApiService {

  private PHP_API_SERVER = environment.HOST;

  private  API_GET_USER_INFORMATION = 'user/usersInformation'
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
}




