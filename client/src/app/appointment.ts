export class Appointment {
    constructor(
        public apptDate : Date = null,
        public apptTime : String = "",
        public complain : String = "",
        public patientName : String = ""
    ){}
}
