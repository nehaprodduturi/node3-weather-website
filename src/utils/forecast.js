const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/179e4c1aa55a1769e36d64673fa78e52/'
    + latitude +','+ longitude +'?units=si'


    request({url,json:true},(error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,body.daily.data[0].summary + 
                    ' It is currently ' + body.currently.temperature + 
                    ' degrees out. There is a ' + body.currently.precipProbability + 
                    '% chance of rain.' + 'Temperature high is ' + body.daily.data[0].temperatureHigh
                    + ' and low is ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast