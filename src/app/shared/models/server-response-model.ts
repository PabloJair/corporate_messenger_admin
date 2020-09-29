import {ServerCode} from "./server-code.enum";

export class ServerResponseModel<T> {

  Code: ServerCode;
  Message: string;
  Data: T;
  Error?: any;
}
