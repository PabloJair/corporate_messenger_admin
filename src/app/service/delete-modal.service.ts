import { Injectable } from '@angular/core';
import {MDBModalRef, MDBModalService} from 'ng-uikit-pro-standard';
import {DeleteModalComponent} from '../views/delete-modal/delete-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteModalService {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) {

  }

  showDeleteModal() {


    this.modalRef = this.modalService.show(DeleteModalComponent, {

      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-dialog modal-frame modal-bottom',
      containerClass: '',
      animated: true,
      data: {
        buttonCancel: '',
        buttonOK: '',
        title: '',
        message: ''
      }
    });

    this.modalRef.content.onFinishDelete.subscribe(el => {

      console.log(el)
    })


  }
}
