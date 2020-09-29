import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MDBModalRef, ModalOptions} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  @Output('onOK') onOK = new EventEmitter();
  @Output('onCancel') onCancel = new EventEmitter();
  constructor(public modalRef: MDBModalRef, private  config: ModalOptions) {



    this.config.show = true;
    this.config.backdrop = true;
    this.config.keyboard = true;
    this.config.focus = true;
    this.config.animated = true;
    this.config.class = 'modal-dialog modal-frame modal-bottom';
    this.config.containerClass = ''
    this.config.ignoreBackdropClick = false;

  }

    buttonCancel = ''
    buttonOK = ''
    title = ''
    message = ''


  ngOnInit(): void {





  }

  ok() {
    this.modalRef.hide()
    this.onOK.emit()

  }
  cancel() {
    this.onCancel.emit()

  }
}
