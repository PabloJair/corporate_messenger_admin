import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';


import {Router} from '@angular/router';
import {UserModel} from '../../shared/models/UserModel';
import {MessengerCorporativoApiService} from '../../service/API/messenger-corporativo-api.service';
import {Subject} from 'rxjs';
import {EditUserModalComponent} from '../users/edit-user-modal/edit-user-modal.component';
import {MDBModalService} from 'ng-uikit-pro-standard';
import {AddActivityComponent} from './add-activity/add-activity.component';
import {LoaderComponent} from '../lodaer-component/loader.component';

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

  actions: CalendarEventAction[] = [

    {
      label: '<i class="fas fa-trash-alt fa-sm red-text pr-3" aria-hidden="true"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Deleted', event);
      }
    },
    {
      label: '<i class="fas fa-edit fa-sm indigo-text pr-3" aria-hidden="true"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
    {
      start: new Date(),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
      title: 'A 3 day event',
      color: this.colors.yellow,
      actions: this.actions,
      draggable: true
    },
    {
      start: new Date(),
      title: 'An event with no end date',
      color: this.colors.yellow,
      draggable: true
    }
  ];

  activeDayIsOpen = false;

  refresh: Subject<any> = new Subject();
  loaderRef
  user: UserModel;
  constructor(private router: Router, private service: MessengerCorporativoApiService, private mdbService: MDBModalService) {


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
      items.Data.forEach(value => {
        this.events.push(
          {
            start: new Date(`${value.start_date}T${value.start_time}`),
            end:  new Date(`${value.end_date}T${value.end_time}`),
            title: value.notes,
            color: this.getColorType(value.type_activity),
            actions: this.actions,
            draggable: true
          },

        )


        this.refresh.next()


      })

      this.loaderRef.hide()

    }, error => {


    })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (Date.parse(date.toDateString()) === Date.parse(this.viewDate.toDateString()) && this.activeDayIsOpen || events.length === 0) {
      this.activeDayIsOpen = false;

      this.mdbService.show(AddActivityComponent, {data: {
          user: this.user,
          selectedDate: this.castDate(date)

        }}).content.onCloseModal.subscribe(v => {

        this.ngOnInit()
      })
    } else {
      this.activeDayIsOpen = true;
      this.viewDate = date;
    }
  }

  castDate (date: Date) {

    const d = ('0' + date.getDate()).slice(-2);

// current month
    const month = ('0' + (date.getMonth() + 1)).slice(-2);

// current year
    const year = date.getFullYear();

    return year + '-' + month + '-' + d

  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action, event);
  }

}
