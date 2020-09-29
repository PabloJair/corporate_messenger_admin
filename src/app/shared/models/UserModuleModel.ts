export class UserModel {
  token = '';
  id_user = -1;
  no_employee = '';
  name = '';
  paternal_surname = '';
  maternal_surname = '';
  email = '';
  photo_path = '';
  name_area = '';
  icon_area = '';
  name_company = '';
  logotype_company = '';
  id_company = 0;
  id_rol  = 0;
  name_rol = '';
  name_status_user = 0;
  modules: any[];


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

