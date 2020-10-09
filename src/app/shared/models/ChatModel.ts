export class  ChatModel {

  id_message: number;
  time_stamp: string;
  text_message: string;
  type_message: string;
  id_user_to: number;
  id_user_from: number;
  photo_user_to: string;
  photo_user_from: string;

  name_user_from: string;
  name_user_to: string
}
export class SendMessage {
  id_user_from: number;
  id_user_to: number;
  type_message: string;
  text_message: string;

}
export class SendMessageRespondeModel {
  code_status: number;
  message_status: string;
  id_message: number;

}
