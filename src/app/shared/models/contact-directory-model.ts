export class ContactDirectoryModel {

  id_contact_directory: number;
  name: string;
  lastname: string;
  second_lastname: string;
  phone: string;
  phone_2: string;
  phone_3: string;
  updated_at: string;
  name_position_work: string;
  id_job_work: number;
  id_store: number;
  id_state: State;
  country: string;
  id_business: number;
  eco_store: string;
  name_store: string;
  direction_store: string;
  ip_gateway_store: string;
  type_gateway_store: string;
  ip_gateway_2_store: string;
  type_gateway_2_store: string;
  ip_gateway_3_store: string;
  type_gateway_3_store: string;
  ip_gateway_4_store: string;
  type_gateway_4_store: string;
  address_lan_store: string;
  cost_center_store: string;
  mask_network_store: string;
  engineer_name_store: string;
  cell_phone_store: string;
  name_bussiness:String;


   getStateString(){
    var toString="";
    return
  }
}

enum State {
  Aguascalientes = 1,
  Baja_California,
  Baja_California_Sur,
  Campeche,
  Chiapas,
  Chihuahua,
  Coahuila_de_Zaragoza,
  Colima,
  Distrito_Federal,
  Durango,
  Guanajuato,
  Guerrero,
  Hidalgo,
  Jalisco,
  Mexico,
  Michoacan,
  Morelos,
  Nayarit,
  Nuevo_Leon,
  Oaxaca,
  Puebla,
  Queretaro,
  Quintan_Roo,
  SanLuis_Potosi,
  Sinaloa,
  Sonora,
  Tabasco,
  Tamaulipas,
  Tlaxcala,
  Veracruz,
  Yucatan,
  Zacatecas


}
