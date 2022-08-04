const Controller = require('./controllers/controller.js')

let [a, b, c, d, e] = process.argv.slice(2)

switch (a) {
    case "help":
        Controller.help();
        break;
    
    case "theatersList":
        Controller.theaterList();
        break;
            
    case "customersList":
        Controller.customerList();
        break;
        
    case "checkSeat":
        Controller.checkSeats(+b);
        break;
    
    case "buyTicket":
        Controller.buyTicket(a, +b, c, d, e);
        break;

    case "ticketInfo":
        Controller.ticketInfo(+a);
        break;

    case "changeTicket":
        Controller.changeTicket(+a, +b, c);
        break;

    case "cancelTicket":
        Controller.cancelTicket(+a);
        break;

    case "showCustomer":
        Controller.showCustomer(+a);
        break;

    default:
        Controller.help();
        break;
}