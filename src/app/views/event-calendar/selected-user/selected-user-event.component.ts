import {Component, Input, OnInit} from '@angular/core';
import {MessengerCorporativoApiService} from '../../../service/API/messenger-corporativo-api.service';
import {MDBModalService} from 'ng-uikit-pro-standard';
import {UserService} from '../../../service/user.service';
import {LoaderComponent} from '../../lodaer-component/loader.component';
import {ServerCode} from '../../../shared/models/server-code.enum';
import {UserModel} from '../../../shared/models/UserModel';
import PaginationModel from '../../../shared/models/PaginationModel';
import {NavigationExtras, Route, Router} from '@angular/router';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user-event.component.html',
  styleUrls: ['./selected-user-event.component.scss']
})
export class SelectedUserEventComponent implements OnInit {
  @Input() shadows = true;
  tableData: UserModel[] = []
  total: number
  pagination: PaginationModel<UserModel> = new  PaginationModel()
  loaderRef
  lastPageDisable: boolean
  nextPageDisable: boolean

  private sorted = false;
  constructor(private service: MessengerCorporativoApiService,
              private mdbService: MDBModalService, private currentUser: UserService, private router: Router) {


  }

  ngOnInit(): void {

    this.loaderRef = this.mdbService.show(LoaderComponent)

    this.lastPageDisable = false
    this.nextPageDisable = false

    this.service.getUsersInformation(this.currentUser.getCurrentUser.id_company)
      .subscribe(value => {
        this.loaderRef.hide()

        if (value.Code === ServerCode.SUCCESS) {

          this.tableData = value.Data.data
          this.total =  value.Data.last_page
          this.pagination = value.Data
          this.lastPageDisable = this.pagination.current_page <= 1
          this.nextPageDisable = !(this.pagination.current_page <= this.pagination.last_page)
        }

      }, error => {
        this.loaderRef.hide()


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
        this.loaderRef.hide()

        if (value.Code === ServerCode.SUCCESS) {

          this.tableData = value.Data.data
          this.total =  value.Data.last_page
          this.pagination = value.Data

          this.lastPageDisable = (this.pagination.current_page === 1)
          this.nextPageDisable = (this.pagination.current_page === this.pagination.last_page)

        }

      }, error => {
        this.loaderRef.hide()


      })
  }

  next() {

    this.service.getUsersInformation(this.currentUser.getCurrentUser.id_company, this.pagination.next_page_url)
      .subscribe(value => {
        this.loaderRef.hide()

        if (value.Code === ServerCode.SUCCESS) {

          this.tableData = value.Data.data
          this.total =  value.Data.last_page
          this.pagination = value.Data

          this.lastPageDisable = (this.pagination.current_page === 1)
          this.nextPageDisable = (this.pagination.current_page === this.pagination.last_page)

        }

      }, error => {
        this.loaderRef.hide()


      })

  }


  showEvents(row: UserModel) {

    const navigationExtras: NavigationExtras = {state: {user: row}}
    this.router.navigate(['/user-event/calendar'], navigationExtras).then(r => {})

  }

  addEvents(row: UserModel) {

  }

  goToPage(number: number) {
    this.service.getUsersInformation(this.currentUser.getCurrentUser.id_company, '', number)
      .subscribe(value => {
        this.loaderRef.hide()

        if (value.Code === ServerCode.SUCCESS) {

          this.tableData = value.Data.data
          this.total =  value.Data.last_page
          this.pagination = value.Data

          this.lastPageDisable = (this.pagination.current_page === 1)
          this.nextPageDisable = (this.pagination.current_page === this.pagination.last_page)

        }

      }, error => {
        this.loaderRef.hide()


      })
  }
}
