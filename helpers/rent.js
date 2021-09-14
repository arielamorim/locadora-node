const moment = require('moment');
const money = require('money-math');

const calcPrice = (rent) => {

    const startTime = moment(new Date(rent.rentDate), 'DD-MM-YYYY hh:mm:ss');
    const endTime = moment(new Date(), 'DD-MM-YYYY hh:mm:ss');
    // Minutes diff
    let minutesDiff = endTime.diff(startTime, 'minutes');
    if (minutesDiff >= 1) {
        // Start extra count
        startTime.add(1, 'm');
        // Get extra seconds
        let extraSeconds = endTime.diff(startTime, 'seconds');
        // Get extra money
        let percent = extraSeconds / 10;
        const extraMoney = money.percent(percent.toString() + "0.00", rent.originalPrice);
        let currentPrice = money.add(rent.originalPrice, extraMoney);
        // Return info to update
        return {
            "currentPrice": currentPrice,
            "returnDate": new Date(),
            "rentStatus": "closed" 
        };
    } else {
        return {
            "currentPrice": rent.originalPrice,
            "returnDate": new Date(),
            "rentStatus": "closed"
        }
    }
}

module.exports = {
    calcPrice
}