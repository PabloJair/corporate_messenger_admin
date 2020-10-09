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
import {ModuleModel} from '../../shared/models/UserModuleModel';
import {ActivityAssigment} from '../../shared/models/ActivityAssigment';
import {ChatModel, SendMessage, SendMessageRespondeModel} from '../../shared/models/ChatModel';

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

  // Modules
  private  API_GET_PERMISSONS = 'user/modules'
  private  API_GET_NOTASSIGMENT_MODULE = 'user/notAssigmentModules'
  private  API_UPDATE_PERMISSION_MODULE = 'user/modules/updatePermission'
  private  API_ADD_PERMISSION_MODULE = 'user/modules/addToUser'
  private  API_DELETE_PERMISSION_MODULE = 'user/modules/delete'

  // Activities

  private API_GET_ACTIVITY_FOR_MOTH = 'assigment/for/moth/'
  private API_UPDATE_TIME_ASSIGMENT = 'assigment/updatetime/'
  private API_ADD_ACTIVITY_ASSIGMENT = 'assigment/add/'
  private API_EDIT_ACTIVITY_ASSIGMENT = 'assigment/edit/'

  private API_DELETE_ACTIVITY_ASSIGMENT = 'assigment/delete/'

  // CHAT

  private API_CHAT_ALL_USER = 'user/all'
  private API_CHAT_LASTMESSAGE = 'message/room/{idUser}/{idUserTo}/{date}'
  private API_CHAT_BYE_USER = 'message/by/'
  private API_CHAT_BYE_USER_FROM_USER_TO = 'message/userFrom/id_user_from/userTo/id_user_to/pagination/no'
  private API_CHAT_SEND_MESSAGE = 'message/send'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {

  }
  getUsersInformation( idCompany: number= 0, url: string= '', page: number= -1): Observable<ServerResponseModel<PaginationModel<UserModel>>> {
    let _url = (url === '') ? (`${this.PHP_API_SERVER}${this.API_GET_USER_INFORMATION}/${idCompany}/2`) : url

    if (page !== -1) {
      _url += '?page=' + page
    }
    return this.httpClient.get<ServerResponseModel<PaginationModel<UserModel>>>(_url);
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


  getAssigmentForMonth(idUser: number): Observable<ServerResponseModel<ActivityAssigment[]>>  {

    return this.httpClient.get<ServerResponseModel<ActivityAssigment[]>>
    (`${this.PHP_API_SERVER}${this.API_GET_ACTIVITY_FOR_MOTH}${idUser}`);

  }

  addAssigment(item: ActivityAssigment): Observable<ServerResponseModel<ActivityAssigment[]>>  {

    return this.httpClient.post<ServerResponseModel<ActivityAssigment[]>>
    (`${this.PHP_API_SERVER}${this.API_ADD_ACTIVITY_ASSIGMENT}`, item);

  }
  editAssigment(item: ActivityAssigment): Observable<ServerResponseModel<ActivityAssigment[]>>  {

    return this.httpClient.patch<ServerResponseModel<ActivityAssigment[]>>
    (`${this.PHP_API_SERVER}${this.API_EDIT_ACTIVITY_ASSIGMENT}${item.id_assgiment_of_activity}`, item);

  }


  getNotAssigmentModules(user: UserModel): Observable<ServerResponseModel<ModuleModel[]>>  {

    return this.httpClient.get<ServerResponseModel<ModuleModel[]>>
    (`${this.PHP_API_SERVER}${this.API_GET_NOTASSIGMENT_MODULE}/${user.id_user}`);

  }

  getPermission(user: UserModel): Observable<ServerResponseModel<ModuleModel[]>>  {

    return this.httpClient.get<ServerResponseModel<ModuleModel[]>>
    (`${this.PHP_API_SERVER}${this.API_GET_PERMISSONS}/${user.id_user}`);

  }
  updateUser(user: UserModel): Observable<ServerResponseModel<UserModel>>  {

    return this.httpClient.patch<ServerResponseModel<UserModel>>
    (`${this.PHP_API_SERVER}${this.API_CHANGE_STATUS}/${user.id_user}`, user);

  }

  addModuleToUser(data: any): Observable<ServerResponseModel<UserModel>>  {

    return this.httpClient.post<ServerResponseModel<UserModel>>
    (`${this.PHP_API_SERVER}${this.API_ADD_PERMISSION_MODULE}`, data);

  }

  updatePermission(info: ModuleModel , data: any): Observable<ServerResponseModel<UserModel>>  {

    return this.httpClient.patch<ServerResponseModel<UserModel>>
    (`${this.PHP_API_SERVER}${this.API_UPDATE_PERMISSION_MODULE}/${info.id_permission_user_application}`, data);

  }

  updateTimeAssigment(data: ActivityAssigment): Observable<ServerResponseModel<number>>  {

    return this.httpClient.patch<ServerResponseModel<number>>
    (`${this.PHP_API_SERVER}${this.API_UPDATE_TIME_ASSIGMENT}${data.id_assgiment_of_activity}`, data);

  }

  deleteActivityAssigment(data: number): Observable<ServerResponseModel<UserModel>>  {

    return this.httpClient.delete<ServerResponseModel<UserModel>>
    (`${this.PHP_API_SERVER}${this.API_DELETE_ACTIVITY_ASSIGMENT}${data}`);

  }

  deleteModule(data: ModuleModel): Observable<ServerResponseModel<UserModel>>  {

    return this.httpClient.delete<ServerResponseModel<UserModel>>
    (`${this.PHP_API_SERVER}${this.API_DELETE_PERMISSION_MODULE}/${data.id_permission_user_application}`);

  }

  getAllUserForChat(): Observable<ServerResponseModel<UserModel[]>>  {

    return this.httpClient.get<ServerResponseModel<UserModel[]>>
    (`${this.PHP_API_SERVER}${this.API_CHAT_ALL_USER}`);

  }

  getMenssagesBy(id_user: number): Observable<ServerResponseModel<ChatModel[]>>  {

    return this.httpClient.get<ServerResponseModel<ChatModel[]>>
    (`${this.PHP_API_SERVER}${this.API_CHAT_BYE_USER}${id_user}`);

  }
  getMenssagesByUserFromUserto(id_user_from: number, id_user_to: number): Observable<ServerResponseModel<PaginationModel<ChatModel>>>  {

    // tslint:disable-next-line:no-shadowed-variable
    let url2 = this.API_CHAT_BYE_USER_FROM_USER_TO.replace('id_user_from', id_user_from.toString())
    url2 = url2.replace('id_user_to', id_user_to.toString())
    url2 = url2.replace('no', '50')
    return this.httpClient.get<ServerResponseModel<PaginationModel<ChatModel>>>
    (`${this.PHP_API_SERVER}${url2}`);

  }

  sendMessage(data: SendMessage): Observable<ServerResponseModel<SendMessageRespondeModel>> {

    // tslint:disable-next-line:no-shadowed-variable
    return this.httpClient.post<ServerResponseModel<SendMessageRespondeModel>>
    (`${this.PHP_API_SERVER}${this.API_CHAT_SEND_MESSAGE}`, data);

  }
}




