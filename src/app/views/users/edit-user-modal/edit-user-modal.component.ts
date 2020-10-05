import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MDBModalRef, ModalOptions, ToastService} from 'ng-uikit-pro-standard';
import {UserModel} from '../../../shared/models/UserModel';
import AreaModel from '../../../shared/models/AreaModel';
import RolModel from '../../../shared/models/RolModel';
import {MessengerCorporativoApiService} from '../../../service/API/messenger-corporativo-api.service';
import {environment} from '../../../../environments/environment';
import {ServerCode} from '../../../shared/models/server-code.enum';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent implements OnInit, OnDestroy {
  @Output('onClose') onCloseEdit = new EventEmitter< EditUserModalComponent>()
  user: UserModel;
  areas: AreaModel[];
  roles: RolModel[];

  oStatus: boolean;
  oRol: boolean
  oArea: boolean
  statusOptionsSelect: any;


  public form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.email]),
    paternal_surname: new FormControl(null, [Validators.required, Validators.max(10), Validators.minLength(6)]),
    maternal_surname: new FormControl(null, [Validators.required, Validators.max(10), Validators.minLength(6)]),
    status: new FormControl(null, Validators.required),
    rol: new FormControl(null, Validators.required),
    area: new FormControl(null, Validators.required),
    phone_number: new FormControl(null, [Validators.required]),

  });



  private get name() {return this.form.get('name'); }
  private get paternal_surname() {return this.form.get('paternal_surname'); }
  private get maternal_surname() {return this.form.get('maternal_surname'); }
  private get status() { return this.form.get('status'); }
  private get area() { return this.form.get('area'); }
  private get rol() { return this.form.get('rol'); }
  private get phone() { return this.form.get('phone_number'); }


  constructor(public editUserModal: MDBModalRef,
              private  editUserConfig: ModalOptions,
              private service: MessengerCorporativoApiService,
              private alert: ToastService) {

    this.editUserConfig.show = true;
    this.editUserConfig.backdrop = false;
    this.editUserConfig.keyboard = false;
    this.editUserConfig.ignoreBackdropClick = true;

    this.editUserConfig.focus = true;
    this.editUserConfig.animated = true;
    this.editUserConfig.class =  'modal-side modal-top-right modal-notify modal-info'
    this.editUserConfig.containerClass = 'right'
    this.editUserConfig.scroll = true
    this.oStatus = true
    this.oRol = true
    this.oArea = true




  }




  ngOnInit(): void {

    this.name.setValue(this.user.name)
    this.paternal_surname.setValue(this.user.paternal_surname)
    this.maternal_surname.setValue(this.user.maternal_surname)
    this.status.setValue(this.user.status_user)
    this.rol.setValue(this.user.id_rol)
    this.area.setValue(this.user.id_area)
    this.phone.setValue(this.user.phone_number)
    this.statusOptionsSelect = environment.statusOptionsSelect


  }

  close() {
    this.onCloseEdit.emit(this)
    this.editUserModal.hide()

  }



  areaChange($event: any) {
    this.oArea = false
    this.service.changeArea(this.user.id_info_user_company, $event.value).
    subscribe(
        value => {this.alert.info(value.Message); this.oArea = true},
        error => {this.alert.error('No se puede conectar con el servidor');  this.oArea = true})

  }

  rolChange($event: any) {
    this.oRol = false

    this.service.changeRol(this.user.id_info_user_company, $event.value).
    subscribe(
      value => {this.alert.info(value.Message); this.oRol = true},
      error => {this.alert.error('No se puede conectar con el servidor');  this.oRol = true})
  }

  statusChange($event: any) {
    this.oStatus = false
    this.service.changeChangeStatus(this.user.id_user, $event.value).
    subscribe(
      value => {this.alert.info(value.Message); this.oStatus = true},
      error => {this.alert.error('No se puede conectar con el servidor');  this.oStatus = true})
  }

  ngOnDestroy(): void {
  }

  update() {
    const user = new UserModel()
    user.id_user = this.user.id_user
    user.name = this.name.value
    user.phone_number = this.phone.value
    user.maternal_surname = this.maternal_surname.value
    user.paternal_surname = this.paternal_surname.value

    this.service.updateUser(user).subscribe(value => {
      this.alert.info(value.Message)


    }, error => {
      this.alert.info('Error al actualizar')

    })

  }
}
