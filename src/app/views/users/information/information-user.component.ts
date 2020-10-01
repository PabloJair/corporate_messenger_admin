import {Component, Input, OnInit} from '@angular/core';
import {MessengerCorporativoApiService} from '../../../service/API/messenger-corporativo-api.service';
import {ServerCode} from '../../../shared/models/server-code.enum';
import {UserModel} from '../../../service/API/UserModel';
import {LoaderComponent} from '../../lodaer-component/loader.component';
import {MDBModalService} from 'ng-uikit-pro-standard';
import {UserService} from '../../../service/user.service';
import PaginationModel from '../../../shared/models/PaginationModel';

@Component({
  selector: 'app-table2',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.scss']
})
// tslint:disable-next-line:class-name
export class InformationUserComponent implements OnInit {

  @Input() shadows = true;
  modalRef

  tableData: UserModel[] = []
  total: number
  pagination: PaginationModel<UserModel> = new  PaginationModel()

  lastPageDisable: boolean
  nextPageDisable: boolean

  private sorted = false;

  constructor(private service: MessengerCorporativoApiService, private mdbService: MDBModalService, private currentUser: UserService) { }
  ngOnInit() {
     this.modalRef = this.mdbService.show(LoaderComponent)
    this.lastPageDisable = false
    this.nextPageDisable = false

    this.service.getUsersInformation(this.currentUser.getCurrentUser.id_company)
      .subscribe(value => {
        this.modalRef.hide()

        if (value.Code === ServerCode.SUCCESS) {

          this.tableData = value.Data.data
          this.total =  value.Data.last_page
          this.pagination = value.Data
          this.lastPageDisable = this.pagination.current_page <= 1
          this.nextPageDisable = !(this.pagination.current_page <= this.pagination.last_page)
        }

      }, error => {
        this.modalRef.hide()


      })
  }

  sortBy(by: string | any): void {

    this.tableData.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }

  previous() {
    this.service.getUsersInformation(this.currentUser.getCurrentUser.id_company, this.pagination.prev_page_url)
      .subscribe(value => {
        this.modalRef.hide()

        if (value.Code === ServerCode.SUCCESS) {

          this.tableData = value.Data.data
          this.total =  value.Data.last_page
          this.pagination = value.Data

          this.lastPageDisable = (this.pagination.current_page === 1)
          this.nextPageDisable = (this.pagination.current_page === this.pagination.last_page)

        }

      }, error => {
        this.modalRef.hide()


      })
  }

  next() {

    this.service.getUsersInformation(this.currentUser.getCurrentUser.id_company, this.pagination.next_page_url)
      .subscribe(value => {
        this.modalRef.hide()

        if (value.Code === ServerCode.SUCCESS) {

          this.tableData = value.Data.data
          this.total =  value.Data.last_page
          this.pagination = value.Data

          this.lastPageDisable = (this.pagination.current_page === 1)
          this.nextPageDisable = (this.pagination.current_page === this.pagination.last_page)

        }

      }, error => {
        this.modalRef.hide()


      })

  }
}
