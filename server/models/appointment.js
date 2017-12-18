var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define Question schema
var AppointmentSchema = new mongoose.Schema({
    patientName : {type: String, required: true},
    complain: {type: String, required: true }, 
    apptDate : {type: Date, required: true},
    apptTime: {type: String, require: true}
}, {timestamps: true });

var appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = appointment;