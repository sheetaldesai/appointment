import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Appointment } from '../appointment';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  appointment = new Appointment();
  today = Date.now();

  appointments = []
  invalidDate = {error:""}
  selectNewDate = {error:""}
  requiredDate = {error:""}
  formValid = {error:""}
  timeError = {error: ""}

  constructor(private _router: Router,
    private _dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submit clicked");
    //this.validateTime(this.appointment.apptTime);
    
    if (this.validateDate(this.appointment.apptDate)) {
      this.formValid.error = "There are some errors on the form. Please fix them and try again"
    } else {
      this.appointment.patientName = this._dataService.getLogin();
      console.log("Adding new appointment ", this.appointment);
      this._dataService.create(this.appointment);
      this._router.navigate(['/dashboard']);
    }
  }

  onCancel(){
    console.log("Cancel clicked");
    this._router.navigate(['/dashboard']);

  }

  validateTime(apptTime)  {
    console.log(apptTime);
    console.log(typeof apptTime);
  }
  validateDate(apptDate) : Boolean {
    
    let currentDate = new Date();
    console.log("Current date: ", currentDate)
    console.log("Appt date: ", apptDate);
    console.log(typeof currentDate)
    var err = false;
    
    if (apptDate == null) {
      console.log("Date is required");
      this.requiredDate.error = "Date is required";
      err = true;
    } else {
      this.requiredDate.error = ""
    }
    if (apptDate < currentDate) {
      //console.log("error");
      this.invalidDate.error = "Invalid date. Select current or future date"
      console.log(this.invalidDate.error);
      err = true;
    } else {
      this.invalidDate.error = "";
    }

    if (!this.checkNumAppointments(apptDate))
    {
      this.selectNewDate.error = "This day is already full. Please select new Date"
      err = true;
    } else {
      this.selectNewDate.error = ""      
    }
    console.log("Returning ", err)
    return err;
  }

  checkNumAppointments(newDate) : Boolean{
    this._dataService.apptsObservable.subscribe(appts=>this.appointments = appts);
    //this._dataService.getAllAppointments();
    var count = 0;
    for (var i = 0; i < this.appointments.length; i++){
      console.log(this.appointments[i]['apptDate']);
      if (this.appointments[i]['apptDate'] == newDate) {
        console.log("Incrementing count")
        count++;
      }
    }
    console.log("Count: ",count)
    if (count >= 3) {
      return false;
    } else {
      return true;
    }
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
}

}
