export class UserModel {
  no_employee: string;
  name: string;
  lastname: string;
  second_lastname: string;
  email: string;
  photo_path: string;
  name_position_work: string;
  name_status_user: string;
  id_status_user: number;
  id_user:number;
  id_position_information: number;
  modules: ModuleModel[];
  collapsed: boolean;
  token:string;
  password: string;


}

export class ModuleModel {
  can_update: boolean;
  can_select: boolean;
  can_delete: boolean;
  can_create: boolean;
  id_module_app: number;
  id_module: number;

  name_module: string;
  id_permission_user_module: number;
  icon_module: string;
}

