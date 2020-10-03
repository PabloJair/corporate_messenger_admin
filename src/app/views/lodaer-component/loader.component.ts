import { Component, OnInit } from '@angular/core';
import {MDBModalRef, ModalOptions} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-lodaer-component',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public loaderModal: MDBModalRef, private  loaderConfig: ModalOptions) {

    this.loaderConfig.show = true;
    this.loaderConfig.backdrop = true;
    this.loaderConfig.keyboard = true;
    this.loaderConfig.focus = true;
    this.loaderConfig.animated = true;
    this.loaderConfig.class = 'modal-dialog modal-sm';
    this.loaderConfig.containerClass = ''
    this.loaderConfig.ignoreBackdropClick = false;

  }

  ngOnInit(): void {
  }

}
