import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IMyOptions, MDBModalRef, MDBModalService, ModalOptions, ToastService} from 'ng-uikit-pro-standard';
import {MessengerCorporativoApiService} from '../../../service/API/messenger-corporativo-api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivityAssigment} from '../../../shared/models/ActivityAssigment';
import {UserModel} from '../../../shared/models/UserModel';
import {LoaderComponent} from '../../lodaer-component/loader.component';
import {ServerCode} from '../../../shared/models/server-code.enum';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  @Output('onClose') onCloseModal = new EventEmitter< AddActivityComponent>()
  user: UserModel;
  selectedDate: string;
  loaderRef
  options = [
    {value: '1', label: 'Actividad'},
    {value: '2', label: 'Reunion'},
    {value: '3', label: 'Vacaciones'},
    {value: '4', label: 'Incapacidad'},
    {value: '5', label: 'Permisos'}
  ];

  public myDatePickerOptions: IMyOptions = {
    // Your options
  };
  constructor(public modalRef: MDBModalRef,
              private  editUserConfig: ModalOptions,
              private service: MessengerCorporativoApiService,
              private alert: ToastService,
              private mdbService: MDBModalService) {
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
  public form: FormGroup = new FormGroup({
    start_date: new FormControl(null, [Validators.required]),
    end_date: new FormControl(null, [Validators.required]),
    start_time: new FormControl(null, [Validators.required ]),
    end_time: new FormControl(null, Validators.required),
    notes: new FormControl(null, Validators.required),
    type_activity: new FormControl(null, Validators.required),

  });

  private get start_date() {return this.form.get('start_date'); }
  private get end_date() {return this.form.get('end_date'); }
  private get start_time() {return this.form.get('start_time'); }
  private get end_time() { return this.form.get('end_time'); }
  private get notes() { return this.form.get('notes'); }
  private get type_activity() { return this.form.get('type_activity'); }

  ngOnInit(): void {
    this.start_date.setValue(this.selectedDate)
    this.end_date.setValue(this.selectedDate)


  }


  close() {
    this.onCloseModal.emit(this)
    this.modalRef.hide()

  }

  add() {

    this.loaderRef = this.mdbService.show(LoaderComponent)

    const item: ActivityAssigment = new ActivityAssigment()

    item.start_date = this.start_date.value;
    item.end_date = this.end_date.value;
    item.start_time = this.start_time.value;
    item.end_time = this.end_time.value;
    item.notes = this.notes.value;
    item.type_activity = this.type_activity.value;
    item.id_user = this.user.id_user;
    item.status_activity = '1'


    this.service.addAssigment(item).subscribe(value => {
        this.loaderRef.hide()

        if (value.Code === ServerCode.SUCCESS) {
          this.alert.info('Agregado correctamente')

          this.close()
        }

      },
       error => {
         this.alert.info('Error al actualizar')


       })

  }
}
