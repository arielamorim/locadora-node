const moment = require('moment');

const calcPrice = () => {

    const data = {
        "_id": "613ecc341b02cdb8a62e853d",
        "idUser": "1234567",
        "idMovies": ["5"],
        "originalPrice": 20,
        "rentDate": "2021-09-13T18:57:40.546Z",
        "__v": 0,
        "currentPrice": 20
    }

    var startTime = moment("2021-09-13T18:57:40.546Z", 'DD-MM-YYYY hh:mm:ss');
    var endTime = moment("2021-09-13T18:58:50.546Z", 'DD-MM-YYYY hh:mm:ss');

    var minutesDiff = endTime.diff(startTime, 'minutes');
    console.log('Minutes:' + minutesDiff);

    var secondsDiff = endTime.diff(startTime, 'seconds');
    console.log('Seconds:' + secondsDiff);

    if (minutesDiff >= 1) {
        secondsDiff = endTime.diff(startTime.add(1, 'm'), 'seconds') / 10;
        data.currentPrice = data.currentPrice + ((data.currentPrice * secondsDiff) / 100);
        console.log('originalPrice -> ', data.originalPrice);
        console.log('currentPrice -> ', data.currentPrice);
    }
}


// calcRentPrice(someRent);

module.exports = {
    calcPrice
}