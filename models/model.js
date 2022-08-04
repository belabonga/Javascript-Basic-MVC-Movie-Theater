const fs = require("fs");
const {Theater, Customer, Factory} = require("./class");

class Model {
  // PART 1
  static readTheater(callback){
    fs.readFile('./data/theaters.json', 'utf-8', (err, data) => {
      if (err) callback({code: 1}, null);
      else {
        let theater = JSON.parse(data)
        let dataTheater = theater.map(el => new Theater(el.id, el.name, el.movie));
        callback(null, dataTheater);
      }
    })
  }
  
  // simplenya bisa pake : return theatersData
  
  static readCustomer(callback){
    fs.readFile('./data/customers.json', 'utf-8', (err, data) => {
      if (err) callback({code: 2}, null);
      else {
        let cust = JSON.parse(data)
        let dataCust = cust.map(el => new Customer(el.id, el.name, el.gender, el.ticket));
        callback(null, dataCust);
      }
    })
  }
  
  static checkSeat(id, callback){
    // READ THEATER DATA
    Model.readTheater((err, dataTheater) => {
      if (err) callback(err, null)
      else {
        dataTheater = dataTheater.find((el) => el.id === id)
        // READ CUSTOMER DATA
        Model.readCustomer((err, dataCust) => {
          if (err) callback(err, null)
          else {
            dataCust = dataCust.filter((el) => el.ticket.theaterName === dataTheater.name)
            dataTheater.customers = dataCust
            callback(null, dataTheater)
          }
        })
      } 
    })
  }

  // PART 2
  static save(data, pathFile, callback){ 
    fs.writeFile(pathFile, JSON.stringify(data, null, 2), (err) => {
      if (err) callback(err, null);
      else {
        let newCust = data[data.length - 1];
        callback(null, newCust);
      }
    });
  }
  
  static addCustomer(idTheater, name, gender, seatNumber, type, callback) {
    // READ CUSTOMER DATA
    Model.readCustomer((err, customers) => {
      if (err) callback(err, null);
      else {
        // CREATE NEW ID
        let newIdCust = customers[customers.length - 1].id + 1;

        // READ THEATER DATA
        Model.readTheater((err, theater) => {
          if (err) callback(err, null);
          else {
            let [selected] = theater.filter((el) => el.id == idTheater);
            if (selected) {
              let [seat] = customers.filter(
                (el) =>
                  el.ticket.seatNumber === seatNumber &&
                  el.ticket.theaterName === selected.name
              );
              if (seat) callback(err, null);
              else {
                let newTicket = {
                  theaterName: selected.name,
                  type: type,
                  movie: selected.movie,
                  seatNumber: seatNumber,
                };
                let newCustomer = new Customer(newIdCust, name, gender, newTicket);
                customers.push(newCustomer);
                callback(null, customers);
              }
            } else callback({code : 3});
          }
        });
      }
    });
  }

  static findCustomer(id, callback) {
    console.log(id);
    Model.readCustomer((err, data) => {
      if (err) callback(err, null);
      else {
        let customer = data.find(el => el.id === id);
        callback(null, customer);
      }
    });
  }

  static updateTicket(idCust, idTheater, seat, callback) {
    Model.readTheater((err, theater) => {
      if (err) callback(err, null);
      else {
        let [selectedTheater] = theater.filter((el) => el.id === idTheater);
        Model.findCustomer(idCust, (err, newPosition) => {
          if (err) callback(err, null);
          else {
            newPosition.ticket.seatNumber = seat;
            Model.readCustomer((err, customers) => {
              if (err) callback(err, null);
              else {
                let [bookedSeat] = customers.filter(
                  (el) =>
                    el.ticket.seatNumber === seat &&
                    el.ticket.theaterName === selectedTheater.name
                );
                if (bookedSeat) {
                  callback({ code: 4 }, null);
                } else {
                  customers.forEach((el, index) => {
                    if (el.id === idCust) {
                      customers[index] = newPosition;

                      Model.save(
                        customers,
                        "../movie-theater/data/customers.json",
                        (err) => {
                          if (err) callback(err, null);
                          else callback(null, newPosition);
                        }
                      );
                    }
                  });
                }
              }
            });
          }
        });
      }
    });
  }

  static deleteTicket(id, callback) {
    Model.readCustomer((err, customers) => {
      if (err) callback(err, null);
      else {
        let deletedCus = customers.find((el) => el.id === id);
        if (deletedCus) {
          customers = customers.filter((el) => el.id !== id);
          
          Model.save(customers, "../movie-theater/data/customers.json", (err) => {
              if (err) callback({ code: 2 }, null);
              else callback(null, deletedCus);
            }
          );
        } else callback({ code: 5 });
      }
    });
  }

  static showCustomerByTheater(){}
}

module.exports = Model