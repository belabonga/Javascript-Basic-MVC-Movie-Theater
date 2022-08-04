const Model = require("./model")

class Theater {
    constructor(id, name, movie) {
        this.id = id
        this.name = name
        this.movie = movie
        this.customers = []
    }
  } 
  
  
class Customer {
    constructor(id, name, gender, ticket) {
        this.id = id
        this.name = name
        this.gender = gender
        this.ticket = Factory.ticket(ticket)
    }
}

class Ticket {
    #seatNumber
    constructor(theaterName, type, movie, seatNumber) {
        this.theaterName = theaterName
        this.type = type
        this.movie = movie
        this.#seatNumber = seatNumber
    }

    // getter
    get seatNumber(){
        return this.#seatNumber
    }
}

class Regular extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, "Regular", movie, seatNumber)
    }
}
class IMAX extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, "IMAX", movie, seatNumber)
        
    }
}
class Premier extends Ticket {
    constructor(theaterName, movie, seatNumber) {
        super(theaterName, "Premier", movie, seatNumber)
    }
}

class Factory {
    static ticket(ticketInfo){
        let { theaterName, type, movie, seatNumber } = ticketInfo
        if (type === "Regular"){ return ticketInfo = new Regular (theaterName, movie, seatNumber)}
        else if (type === "IMAX"){ return ticketInfo = new IMAX (theaterName, movie, seatNumber)}
        else if (type === "Premiere"){ return ticketInfo = new Premier (theaterName, movie, seatNumber)}
    }
}

// let result = new Customer(1, "shania", "F", {theaterName: "Cinema 21", type : "IMAX", movie: "HAHA", seatNumber: "A-1"})
// console.log(result)

module.exports = {Theater, Customer, Factory}