import {Component, Input, OnInit} from '@angular/core';
import {MessengerCorporativoApiService} from '../../../service/API/messenger-corporativo-api.service';
import {ServerCode} from '../../../shared/models/server-code.enum';
import {UserModel} from '../../../shared/models/UserModel';
import {LoaderComponent} from '../../lodaer-component/loader.component';
import {MDBModalService} from 'ng-uikit-pro-standard';
import {UserService} from '../../../service/user.service';
import PaginationModel from '../../../shared/models/PaginationModel';
import {EditUserModalComponent} from '../edit-user-modal/edit-user-modal.component';
import AreaModel from '../../../shared/models/AreaModel';
import RolModel from '../../../shared/models/RolModel';
import {PermissionUserModalComponent} from '../permission-user-modal/permission-user-modal.component';

@Component({
  selector: 'app-table2',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.scss']
})
// tslint:disable-next-line:class-name
export class InformationUserComponent implements OnInit {

  @Input() shadows = true;
  loaderRef

  tableData: UserModel[] = []
  total: number
  pagination: PaginationModel<UserModel> = new  PaginationModel()

  lastPageDisable: boolean
  nextPageDisable: boolean

  private sorted = false;

  constructor(private service: MessengerCorporativoApiService, private mdbService: MDBModalService, private currentUser: UserService) { }
  ngOnInit() {
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

  edit(selectedUser: UserModel) {

     const _areas: AreaModel[] = [];
    const _rols: RolModel[] = [];
    this.loaderRef = this.mdbService.show(LoaderComponent)

    this.service.getAllAreas().subscribe(areas => {
      if (areas.Code === ServerCode.SUCCESS) {
        // @ts-ignore
        areas.Data.forEach(area => _areas.push( { value: area.id_area, label: area.name_area}))
        this.service.getAllRol().subscribe(roles => {
          if (roles.Code === ServerCode.SUCCESS) {

            this.loaderRef.hide()
            // @ts-ignore
            roles.Data.forEach(rol => _rols.push({value: rol.id_rol, label: rol.name_rol}))
            this.mdbService.show(EditUserModalComponent, {data: {
                user: selectedUser,
                areas: _areas,
                roles: _rols
              }}).content.onCloseEdit.subscribe(v => {

                this.ngOnInit()
            })


          }

        })

      }

      }, error => {


    })

  }

  permission(row: UserModel) {
    this.loaderRef = this.mdbService.show(LoaderComponent)

    const _modulesNotAssigment: AreaModel[] = [];
    this.service.getNotAssigmentModules(row).subscribe(modulesnotAssigment => {


      if (modulesnotAssigment.Code === ServerCode.SUCCESS) {
        // @ts-ignore
        modulesnotAssigment.Data.forEach(moduleNot => _modulesNotAssigment.push({ value: moduleNot.id_company_module, label: moduleNot.name_module}))
        this.service.getPermission(row).subscribe(permission => {
          this.loaderRef.hide()

          this.mdbService.show(PermissionUserModalComponent, {data: {
              user: row,
              modulesNoyAssigment: _modulesNotAssigment,
              modulesAssigment: permission.Data
            }}).content.onCloseEdit.subscribe(v => {

            this.ngOnInit()
          })

        }, error => {
          this.loaderRef.hide()

        })

      }
    }, error => { this.loaderRef.hide()})
  }
}
