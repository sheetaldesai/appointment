import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from './appointment';

@Injectable()
export class DataService {

  apptsObservable = new BehaviorSubject([]);


  private login = {username:""};

  constructor(private _http : HttpClient) { }

  setLogin(name:string){
    this.login.username = name;
  }

  getLogin():string {
    return this.login.username;
  }

  getAllAppointments() {
    this._http.get('/appts').subscribe(
      (appts: any[])=>{
        console.log("Got appts from server: ",appts);
        this.apptsObservable.next(appts)
      }),
      error => console.log(error);
  }

  create(appt: Appointment) {

    console.log("Service adding appointment to the serer: ",appt);
    this._http.post('/appts', appt).subscribe(
      response => this.getAllAppointments(),
      errorResponse => console.log(errorResponse)
    );
  }

  delete(appt){
    console.log("Service deleting appointment ", appt);
    this._http.delete('/appts/'+appt._id).subscribe(response => {
      console.log(response);
      this.getAllAppointments();
    });
  }
}
