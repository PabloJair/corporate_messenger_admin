export class ServerResponseModel<T> {

  Code: ServerCode;
  Message: string;
  Data: T;
  Error?: any;
}

export enum ServerCode {
  SUCCESS = 200,
  ERROR = 300,
  INCOMPLETE_DATA = 310,
  ERROR_DATA = 320
}
