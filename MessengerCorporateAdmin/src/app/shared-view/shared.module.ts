import {MDBBootstrapModulesPro, ToastModule} from 'ng-uikit-pro-standard';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from '../main-layout/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
  ],
  declarations: [
    FooterComponent,

  ],
  exports: [

    MDBBootstrapModulesPro,
    FooterComponent,
  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
