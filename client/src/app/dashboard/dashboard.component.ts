import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appointments  = [];
  loggedUser = ""

  constructor(private _dataService : DataService,
              private _router: Router) 
  {
    this.loggedUser = this._dataService.getLogin();
  }

  ngOnInit() {
    console.log("Logged in user: ",this.loggedUser);
    this._dataService.apptsObservable.subscribe(appts=>this.appointments = appts);
    this._dataService.getAllAppointments();
  }

  onSubmit() {
    this._router.navigate(['/new']);
  }

  onDelete(appt) {
    this._dataService.delete(appt);
  }


}
