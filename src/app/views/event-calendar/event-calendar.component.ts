import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent} from 'angular-calendar';


import {Router} from '@angular/router';
import {UserModel} from '../../shared/models/UserModel';
import {MessengerCorporativoApiService} from '../../service/API/messenger-corporativo-api.service';
import {Subject} from 'rxjs';
import {MDBModalService, ToastService} from 'ng-uikit-pro-standard';
import {AddOrEditActivityComponent} from './add-or-Edit-activity/add-or-edit-activity.component';
import {LoaderComponent} from '../lodaer-component/loader.component';
import {ActivityAssigment} from '../../shared/models/ActivityAssigment';
import {ServerCode} from '../../shared/models/server-code.enum';
import * as temp from 'moment'; const moment = temp['default'];


@Component({
  selector: 'app-event-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  view = 'month';
  viewDate: Date = new Date();
  colors: any = {
    CREADA: {
      primary: '#43BD02',
      secondary: '#FAE3E3'
    },
    START: {
      primary: '#02BD76',
      secondary: '#D1E8FF'
    },
    CANCEL: {
      primary: '#D89A0D',
      secondary: '#FDF1BA'
    },
    INACTIVE: {
      primary: '#7602BD',
      secondary: '#FDF1BA'
    },
    INCLUDED: {
      primary: '#D80D10',
      secondary: '#FDF1BA'
    },
    FINISHED: {
      primary: '#0D50D8',
      secondary: '#FDF1BA'
    },
    UNKNOWN: {
      primary: '#0D50D8',
      secondary: '#FDF1BA'
    }
  };
  activeDayIsOpen = false;
  refresh: Subject<any> = new Subject();
  loaderRef
  user: UserModel;
  assigmentActivities: ActivityAssigment[];
  actions: CalendarEventAction[] = [

    {
      label: '<i class="fas fa-trash-alt fa-sm red-text pr-3" aria-hidden="true"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.delete(event.id as number);
      }
    },
    {
      label: '<i class="fas fa-edit fa-sm indigo-text pr-3" aria-hidden="true"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.edit(event.id as number)
      }
    }
  ];

  events: CalendarEvent[] = [];


  constructor(private router: Router,
              private service: MessengerCorporativoApiService,
              private mdbService: MDBModalService,
              private alert: ToastService) {
    if ( this.router.getCurrentNavigation().extras.state === undefined) {
      this.router.navigate(['/user-event']).then(r => {})
      return
    }
    this.user = this.router.getCurrentNavigation().extras.state.user





  }

  getColorType(type: string) {

    switch (type) {
      case '1': return this.colors.CREADA;
      case '2': return this.colors.START;
      case '3': return this.colors.CANCEL;
      case '4': return this.colors.INACTIVE;
      case '5': return this.colors.INCLUDED
      case '6': return this.colors.FINISHED;

    }
  }

  ngOnInit() {
    this.loaderRef = this.mdbService.show(LoaderComponent)
    this.service.getAssigmentForMonth(this.user.id_user).subscribe(items => {
      this.events = []

      this.assigmentActivities = items.Data
      this.assigmentActivities.forEach(value => {
        this.events.push(
          {
            start: new Date(`${value.start_date}T${value.start_time}`),
            end:  new Date(`${value.end_date}T${value.end_time}`),
            title: value.notes,
            color: this.getColorType(value.type_activity),
            actions: this.actions,
            draggable: true,
            id: value.id_assgiment_of_activity
          })
        this.refresh.next()
      })
      this.loaderRef.hide()
    }, error => {


    })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (Date.parse(date.toDateString()) === Date.parse(this.viewDate.toDateString()) && this.activeDayIsOpen || events.length === 0) {
      this.activeDayIsOpen = false;
      this.add(date)
    } else {
      this.activeDayIsOpen = true;
      this.viewDate = date;
    }
  }

  castDate (date: Date) {
    return moment(date).format('YYYY-MM-DD')
  }


  castTime (date: Date) {
    return  moment(date).format('HH:mm:ss')
  }
  eventChangeOnlyDay({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    const item = new ActivityAssigment();
    item.start_date = this.castDate(newStart)
    item.end_date = this.castDate(newEnd)
    item.id_assgiment_of_activity = event.id  as number
    this.loaderRef = this.mdbService.show(LoaderComponent)
     this.service.updateTimeAssigment(item).subscribe(value => {
       this.loaderRef.hide()

       if (value.Code === ServerCode.SUCCESS) {

         this.updateLocalActivity(item)
         this.alert.success(value.Message, 'Atención!!')

       } else {
         this.alert.error('No se puede conectar  con el servidor', 'Atención!!')
         this.ngOnInit()
       }

     }, error => {

       this.loaderRef.hide()
       this.alert.error('No se puede conectar  con el servidor', 'Atención!!')

     })
  }


  updateLocalActivity(item: ActivityAssigment) {

    this.assigmentActivities.forEach(v => {

      if (item.id_assgiment_of_activity === v.id_assgiment_of_activity) {

        v.end_time = item.end_time ?? v.end_time
        v.start_time = item.start_time ?? v.start_time
        v.start_date = item.start_date ?? v.start_date
        v.end_date = item.end_date ?? v.end_date
        this.refresh.next()

        return;
      }}
    )

  }

  eventChangeDayTime({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    const item = new ActivityAssigment();
    item.start_time = this.castTime(newStart)
    item.end_time = this.castTime(newEnd)
    item.start_date = this.castDate(newStart)
    item.end_date = this.castDate(newEnd)
    item.id_assgiment_of_activity = event.id  as number
    this.loaderRef = this.mdbService.show(LoaderComponent)
    this.service.updateTimeAssigment(item).subscribe(value => {
      this.loaderRef.hide()

      if (value.Code === ServerCode.SUCCESS) {
        this.updateLocalActivity(item)
        this.alert.success(value.Message, 'Atención!!')

      } else {
        this.alert.error('No se puede conectar  con el servidor', 'Atención!!')
        this.ngOnInit()
      }

    }, error => {

      this.loaderRef.hide()
      this.alert.error('No se puede conectar  con el servidor', 'Atención!!')

    })
  }




  eventChangeOnlyTime({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    const item = new ActivityAssigment();

    item.start_time = this.castTime(newStart)
    item.end_time = this.castTime(newEnd)
    item.id_assgiment_of_activity = event.id  as number
    this.loaderRef = this.mdbService.show(LoaderComponent)
    this.service.updateTimeAssigment(item).subscribe(value => {
      this.loaderRef.hide()

      if (value.Code === ServerCode.SUCCESS) {
        this.updateLocalActivity(item)
        this.alert.success(value.Message, 'Atención!!')

      } else {
        this.alert.error('No se puede conectar  con el servidor', 'Atención!!')
        this.ngOnInit()
      }

    }, error => {

      this.loaderRef.hide()
      this.alert.error('No se puede conectar  con el servidor', 'Atención!!')

    })
  }



  add( date: Date) {
    this.mdbService.show(AddOrEditActivityComponent, {data: {
        user: this.user,

        selectedDate: this.castDate(date),
        isEdit: false
      }}).content.onCloseModal.subscribe(v => {

      this.ngOnInit()
    })

  }
  edit(id: number) {
    this.mdbService.show(AddOrEditActivityComponent, {data: {
        user: this.user,

        editAssigmentActivity : this.assigmentActivities.find(value => value.id_assgiment_of_activity === id),
        isEdit: true
      }}).content.onCloseModal.subscribe(v => {

      this.ngOnInit()
    })

  }
  delete(id: number) {
    this.loaderRef = this.mdbService.show(LoaderComponent)

    this.service.deleteActivityAssigment(id).subscribe(value => {
      this.loaderRef.hide()

      if (value.Code === ServerCode.SUCCESS) {
        this.refresh.next();
        this.alert.success(value.Message, 'Atención!!')
        this.events = this.events.filter(o => o.id !== id)

      } else {
        this.alert.error('No se puede conectar  con el servidor', 'Atención!!')
      }

    }, error => {

      this.loaderRef.hide()
      this.alert.error('No se puede conectar  con el servidor', 'Atención!!')

    })
  }
  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action, event);
  }

}
