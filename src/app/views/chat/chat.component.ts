import { Component, OnInit } from '@angular/core';
import {MessengerCorporativoApiService} from '../../service/API/messenger-corporativo-api.service';
import {UserModel} from '../../shared/models/UserModel';
import {ServerCode} from '../../shared/models/server-code.enum';
import {LoaderComponent} from '../lodaer-component/loader.component';
import {MDBModalService, ToastService} from 'ng-uikit-pro-standard';
import {UserService} from '../../service/user.service';
import {ChatModel} from '../../shared/models/ChatModel';

@Component({
  selector: 'app-lists',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private loaderRef: any;

  constructor(private service: MessengerCorporativoApiService, private mdbService: MDBModalService,  private alert: ToastService, private user: UserService) { }

  users: UserModel[];
  messages: ChatModel[];

  currentUSer: UserModel;
  ngOnInit() {

    this.loaderRef = this.mdbService.show(LoaderComponent)

    this.currentUSer = this.user.getCurrentUser
    this.service.getAllUserForChat().subscribe(value => {
      this.loaderRef.hide()
      if (value.Code === ServerCode.SUCCESS) {

        this.users = value.Data
      }

    }, error => {

      this.loaderRef.hide()
      this.alert.info('Error al obtener la información')

    })
  }

  chargeChat(row: UserModel) {


    this.service.getMenssagesBy(row.id_user).subscribe(value => {
      this.loaderRef.hide()
      if (value.Code === ServerCode.SUCCESS) {

        this.messages = value.Data
      }

    }, error => {

      this.loaderRef.hide()
      this.alert.info('Error al obtener la información')

    })
  }
}
