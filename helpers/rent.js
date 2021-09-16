const money = require('money-math');
const dateFns = require('date-fns');

const calcPrice = (rent, status, update = true) => {

    let currentPrice = rent.originalPrice;
    
    // Calculate Date
    if (dateFns.differenceInMinutes(new Date(), new Date(rent.rentDate)) >= 1) {
        let extraSeconds = dateFns.differenceInSeconds(new Date(), new Date(rent.rentDate));
        
        // Get extra money
        let percent = extraSeconds / 10;
        const extraMoney = money.percent(percent.toString() + "0.00", rent.originalPrice);
        currentPrice = money.add(rent.originalPrice, extraMoney);
        
        // Return info to update
        if (update) {
            return {
                "currentPrice": currentPrice,
                "returnDate": status === "closed" ? new Date() : "-",
                "rentStatus": status,
                "rentDeadline": dateFns.addMinutes(new Date(rent.rentDate), 1)
            };
        } else {
            rent.currentPrice = currentPrice,
                rent.returnDate = status === "closed" ? new Date() : "-",
                rent.rentStatus = status,
                rent.rentDeadline = dateFns.addMinutes(new Date(rent.rentDate), 1)
            return rent;
        }

    }
}

module.exports = {
    calcPrice
}