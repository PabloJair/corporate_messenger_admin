import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MDBModalRef, ModalOptions, ToastService} from 'ng-uikit-pro-standard';
import {MessengerCorporativoApiService} from '../../../service/API/messenger-corporativo-api.service';
import {UserModel} from '../../../shared/models/UserModel';
import {ModuleModel} from '../../../shared/models/UserModuleModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServerCode} from '../../../shared/models/server-code.enum';

@Component({
  selector: 'app-permission-user-modal',
  templateUrl: './permission-user-modal.component.html',
  styleUrls: ['./permission-user-modal.component.scss']
})
export class PermissionUserModalComponent implements OnInit {
  @Output('onClose') onCloseEdit = new EventEmitter<PermissionUserModalComponent>()
  user: UserModel;
  modulesNoyAssigment: ModuleModel[];

  modulesAssigment: ModuleModel[];
  public form: FormGroup = new FormGroup({
    module: new FormControl(null, Validators.required),
  });
  oNewModule: boolean;
  private get module() {return this.form.get('module'); }


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

  }

  ngOnInit(): void {


    this.oNewModule = false;

  }

  close() {
    this.onCloseEdit.emit(this)
    this.editUserModal.hide()

  }


  permissionChange($event: any, row: ModuleModel, data: string) {

    this.service.updatePermission(row, {[data]: $event.checked}).
    subscribe(
      value => {

        this.alert.info(value.Message);
        this.close()
      },
      error => {
        this.alert.error('No se puede conectar con el servidor');
      })  }

  update() {

  }

  delete(row: ModuleModel) {
    this.service.deleteModule(row).
    subscribe(
      value => {

        this.alert.info(value.Message);
        this.close()
      },
      error => {
         this.alert.error('No se puede conectar con el servidor');
      })

  }

  onSelectedModule($event) {

  }

  addModule() {

    this.oNewModule = true ;
    console.log(this.module.value)
    this.service.addModuleToUser({'id_info_user_company': this.user.id_info_user_company, 'id_company_module': this.module.value}).
    subscribe(
      value => {
        this.oNewModule = false ;

        this.alert.info(value.Message);
        this.close()
      },
      error => {
        this.alert.error('No se puede conectar con el servidor');
      })


  }
}
