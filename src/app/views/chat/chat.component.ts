import { Component, OnInit } from '@angular/core';
import {MessengerCorporativoApiService} from '../../service/API/messenger-corporativo-api.service';
import {UserModel} from '../../shared/models/UserModel';
import {ServerCode} from '../../shared/models/server-code.enum';
import {LoaderComponent} from '../lodaer-component/loader.component';
import {MDBModalService, ToastService} from 'ng-uikit-pro-standard';
import {UserService} from '../../service/user.service';
import {ChatModel, SendMessage} from '../../shared/models/ChatModel';

@Component({
  selector: 'app-lists',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private loaderRef: any;
  private interval;
  timeLeft: number = 5;

  constructor(private service: MessengerCorporativoApiService, private mdbService: MDBModalService,  private alert: ToastService, private user: UserService) { }

  users: UserModel[];
  messages: ChatModel[];
  selectedUser: UserModel

  currentUSer: UserModel;
  text = '';
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

    this.selectedUser = row;

    this.service.getMenssagesByUserFromUserto(this.currentUSer.id_user, row.id_user).subscribe(value => {
      this.loaderRef.hide()
      if (value.Code === ServerCode.SUCCESS) {

        this.messages = value.Data.data
      }

    }, error => {

      this.loaderRef.hide()
      this.alert.info('Error al obtener la información')

    })
  }

  sendMessage() {


    if (this.text.length === 0) {
      return;
    }
    const sendMessage = new  SendMessage()
    sendMessage.id_user_from = this.currentUSer.id_user
    sendMessage.id_user_to = this.selectedUser.id_user
    sendMessage.type_message = '1'
    sendMessage.text_message = this.text

    this.text = ''
    this.service.sendMessage(sendMessage).subscribe(value => {
      this.loaderRef.hide()
      if (value.Code === ServerCode.SUCCESS) {
        console.log(value)
        this.chargeChat(this.selectedUser)
      }

    }, error => {

      this.loaderRef.hide()
      this.alert.info('Error al obtener la información')

    })
  }
}
