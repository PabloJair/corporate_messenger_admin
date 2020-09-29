import {ContactDirectoryModel} from "./contact-directory-model";

export class StoreModel {

  id_store: number=0;
  id_state: number=0;
  country: string="";
  id_business: number=0;
  eco_store: string="";
  name_store: string="";
  direction_store: string="";
  ip_gateway_store: string="";
  type_gateway_store: string="";
  ip_gateway_2_store: string="";
  type_gateway_2_store: string="";
  ip_gateway_3_store: string="";
  type_gateway_3_store: string="";
  ip_gateway_4_store: string="";
  type_gateway_4_store: string="";
  address_lan_store: string="";
  cost_center_store: string="";
  mask_network_store: string="";
  engineer_name_store: string="";
  cell_phone_store: string="";
  name_bussiness: string="";

  contactDirectory :ContactDirectoryModel[]=[];
}
