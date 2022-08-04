class View {
  static errMessage(err){
    switch (err) {
      case 1:
        console.log("ERROR : READ THEATER FILE")
        break;  
      case 2:
        console.log("ERROR : READ CUSTOMER FILE")
        break; 
      case 3:
        console.log("Theater not found, please check your input")
        break;
      case 4:
        console.log("Seat already been booked,please choose another seat");
        break;
      case 5:
        console.log("Customer not found, please check your input");
        break;
      default:
        console.log("ERROR");
        break;
    }
  }

  static help(){
    console.log("node app.js help");
    console.log("node app.js theatersList");
    console.log("node app.js customersList");
    console.log("node app.js checkSeat <id_theater>");
    console.log("node app.js buyTicket <id_theater> <nama_penonton> <gender_penonton> <seat_number> <tipe_ticket>");
    console.log("node app.js ticketInfo <id_penonton>");
    console.log("node app.js changeTicket <id_penonton> <id_theater> <nomor_kursi>");
    console.log("node app.js changeTicket <id_penonton>");
    console.log("node app.js cancelTicket <id_penonton>");
    console.log("node app.js showCustomer <id_theater>");
  }

  static theatersList(data){
    data = data.map((el) => {
      el["Theater ID"] = el.id; delete el.id;
      el["Theater Name"] = el.name; delete el.name;
      el["Movie"] = el.movie; delete el.movie;
      delete el.customers;
      return el;
    });
    console.table(data);
  }

  static customersList(data){
    data = data.map((el) => {
      el["ID"] = el.id; delete el.id;
      el["Name"] = el.name; delete el.name;
      el["Gender"] = el.gender; delete el.gender;
      el["Theater Name"] = el.ticket.theaterName; delete el.ticket;
      return el;
    });
    console.table(data)
  }

  static checkSeat(data){
    console.log(`=====================`)
    console.log(`ID     : ${data.id}`)
    console.log(`Name   : ${data.name}`)
    console.log(`Movie  : ${data.movie}`)
    console.log(`=====================`)
    console.log(`    Seating Plan     `)
    console.log(` `);

    let col = ["A", "B", "C", "D", "E", "F"];
    let square = [
      ["A", "B", "C", "D", "E", "F"],
      [" ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " "],
    ];

    data.customers.forEach((data) => {
      let seat = data.ticket.seatNumber.split("-");
      let index = col.findIndex((el) => el === seat[0]);
      square[Number(seat[1])][index] = "X";
    });
    console.table(square);
  }


  // PART 2

  static buyTicket(newCust){
    console.log(`Success buy ticket for seat ${newcus.ticket.seatNumber} for ${newCust.ticket.theaterName} to watch ${newCust.ticket.movie}`);
  }

  static ticketInfo(idcustomer){
    
    console.log(`This ${idcustomer.ticket.type} ticket are booked for ${idcustomer.name} to watch ${idcustomer.ticket.movie} with seat number ${idcustomer.ticket.seatNumber}`);
  }

  static changeTicket(){
    console.log(`Ticket has been change to ${customer.ticket.theaterName} with seat ${customer.ticket.seatNumber}`);
  }

  static cancelTicket(){
    console.log(`Ticket for ${cust.name} has been cancelled`);
  }

  static showCustomer(){}
}

module.exports = View