const Model = require('../models/model.js')
const View = require('../views/view.js')


class Controller {
  // PART 1
  static help(){
    View.help();
  }

  static theaterList(){
    Model.readTheater((err, data) => {
      err ? View.errMessage(err) : View.theatersList(data)
    });
  }

  static customerList(){
    Model.readCustomer((err, data) => {
      err ? View.errMessage(err) : View.customersList(data)
    });
  }

  static checkSeats(id){
    Model.checkSeat(id, (err, data) => {
      err ? View.errMessage(err) : View.checkSeat(data)
    });
  }

  // PART 2
  static buyTicket(idTheater, name, gender, seatNumber, type) {
    Model.addCustomer(idTheater, name, gender, seatNumber, type, Model.save, (err, newCust) => {
      err ? View.errorMessage(err) : View.buyTicket(newCust);
    });
  }

  static ticketInfo(id) {
    Model.findCustomer(id, (err, data) => {
      err ? View.errorMessage(err) : View.ticketInfo(data);
    });
  }

  static changeTicket(idCus, idTheater, seatNumber) {
    Model.updateTicket(idCus, idTheater, seatNumber, (err, data) => {
      err ? View.errorMessage(err) : View.changeTicket(data);
    });
  }

  static cancelTicket(id) {
    Model.deleteTicket(id, (err, data) => {
      err ? View.errorMessage(err) : View.deleteTicket(data);
    });
  }

  static showCustomer(id) {
    Model.checkSeat((err, data) => {
      err ? View.errorMessage(err) : View.checkSeatWithName(data);}, id);
  }
}

module.exports = Controller;