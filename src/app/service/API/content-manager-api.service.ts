import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponseModel} from '../../shared/models/server-response-model';
import {ContactDirectoryModel} from '../../shared/models/contact-directory-model';
import {PositionWork} from '../../shared/models/position-work';
import {StoreModel} from '../../shared/models/store-model';
import {ExternalModuleModel} from '../../shared/models/ExternalModuleModel';
import {environment} from '../../../environments/environment';
import {ModuleModel, UserModel} from '../../shared/models/UserModuleModel';

@Injectable({
  providedIn: 'root'
})
export class ContentManagerApiService {

  private PHP_API_SERVER = !environment.production ? environment.urlServer + 'api/' : environment.urlServer + 'service/public/api/' ;

  private apiSearchByEco = 'contactdirectory/searchBy/'
  private apiPositionWork = 'position/all'
  private searchStoreBy = 'store/searchBy/'
  private apiSearchLikeStore = 'store/likeStoreBy/'
  private apiAddContactDirectory = 'contactdirectory/add'
  private apiDeleteContactDirectory = 'contactdirectory/delete/'
  private apiUpdateContactDirectory = 'contactdirectory/update'
  private getAllModuleExternal = 'external/all'
  private apiAddModuleExternal = 'external/add'
  private apiDeleteModuleExternal = 'external/delete/'
  private apiUpdateModuleExternal = 'external/update/'
  private apiGetUserModule = 'module-information/all'
  private apiGetModuleNotContentUer = 'moduleApp/noContentUser/'
  private apiGetAllStore = 'store/all'

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {

  }
   getContentDirectory(): Observable<ServerResponseModel<ContactDirectoryModel[]>> {

     return this.httpClient.get<ServerResponseModel<ContactDirectoryModel[]>>(
       `${this.PHP_API_SERVER}contentdirectory/all`);


   }
  getContactDirectoryBy(eco: String): Observable<ServerResponseModel<StoreModel>> {

    return this.httpClient.get<ServerResponseModel<StoreModel>>(
      `${this.PHP_API_SERVER}${this.apiSearchByEco}${eco}`);


  }


  getSearchStoreBy(eco: String): Observable<ServerResponseModel<StoreModel[]>> {

    return this.httpClient.get<ServerResponseModel<StoreModel[]>>(
      `${this.PHP_API_SERVER}${this.apiSearchByEco}${eco}`);


  }

  getLikeStoreBy(eco: String): Observable<ServerResponseModel<StoreModel[]>> {

    return this.httpClient.get<ServerResponseModel<StoreModel[]>>(
      `${this.PHP_API_SERVER}${this.apiSearchLikeStore}${eco}`);


  }

  updateContactDirectory(contactDirectory: ContactDirectoryModel): Observable<ServerResponseModel<String>> {


    return this.httpClient.patch<ServerResponseModel<String>>
    (`${this.PHP_API_SERVER}${this.apiUpdateContactDirectory}${contactDirectory.id_contact_directory}`, contactDirectory, this.httpOptions)


  }

  newContactDirectory(contactDirectory: ContactDirectoryModel): Observable<ServerResponseModel<String>> {


    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<ServerResponseModel<String>>(`${this.PHP_API_SERVER}${this.apiAddContactDirectory}`, JSON.stringify(contactDirectory), this.httpOptions)


  }


  deleteContactDirectory(eco: number): Observable<ServerResponseModel<String>> {


    // tslint:disable-next-line:max-line-length
    return this.httpClient.delete<ServerResponseModel<String>>(`${this.PHP_API_SERVER}${this.apiDeleteContactDirectory}${eco}`, this.httpOptions)


  }
  getAllPositionWork(): Observable<ServerResponseModel<PositionWork[]>> {

    return this.httpClient.get<ServerResponseModel<PositionWork[]>>(
      `${this.PHP_API_SERVER}${this.apiPositionWork}`);


  }


  deleteExtarnalModule(externalModule: number): Observable<ServerResponseModel<String>> {

    return this.httpClient.delete<ServerResponseModel<String>>(
      `${this.PHP_API_SERVER}${this.apiDeleteModuleExternal}${externalModule}`);
  }

  updateExternalModule(formData: FormData, externalModule: number): Observable<ServerResponseModel<String>> {

    return this.httpClient.post<ServerResponseModel<String>>(
      `${this.PHP_API_SERVER}${this.apiUpdateModuleExternal}${externalModule}?_method=PATCH`, formData);
  }
  addExternalModule(formData: FormData): Observable<ServerResponseModel<String>> {

    return this.httpClient.post<ServerResponseModel<String>>(
      `${this.PHP_API_SERVER}${this.apiAddModuleExternal}`, formData);
  }
  getAllExternalModule(): Observable<ServerResponseModel<ExternalModuleModel[]>> {

    return this.httpClient.get<ServerResponseModel<ExternalModuleModel[]>>(
      `${this.PHP_API_SERVER}${this.getAllModuleExternal}`);
  }


  getModulesForId(id: number): Observable<ServerResponseModel<ModuleModel[]>> {

    return this.httpClient.get<ServerResponseModel<ModuleModel[]>>(
      `${this.PHP_API_SERVER}${this.apiGetModuleNotContentUer}${id}`);
  }
  getAllUserModule(): Observable<ServerResponseModel<UserModel[]>> {

    return this.httpClient.get<ServerResponseModel<UserModel[]>>(
      `${this.PHP_API_SERVER}${this.apiGetUserModule}`);
  }
  getAllStore(): Observable<ServerResponseModel<StoreModel[]>> {

    return this.httpClient.get<ServerResponseModel<StoreModel[]>>(
      `${this.PHP_API_SERVER}${this.apiGetAllStore}`);


  }


}
