import {ModuleModel} from './UserModuleModel';

export  class UserModel {
  public token = ''
  public name_rol = ''
  public description_rol = ''
  public description_area = ''
  public icon_area = ''
  public name_area = ''
  public name_company = ''
  public id_info_user_company = 0
  public id_user = 0
  public id_company = 0
  public id_area = 0
  public id_rol = 0
  public no_employee = ''
  public name = ''
  public paternal_surname = ''
  public maternal_surname = ''
  public email = ''
  public photo_path = ''
  public updated_at = ''
  public created_at = ''
  public phone_number = ''
  public status_user = ''
  public device_id = ''
  public active = 0
  public deleted_at = ''
  public activation_token = ''
  public logotype_company = ''

  modules: ModuleModel[];

}
