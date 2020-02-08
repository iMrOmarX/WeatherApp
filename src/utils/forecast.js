const request = require('request')

const forecast = (latitude , longtitude , callback) => {
    const url = 'https://api.darksky.net/forecast/b2bffeff4b316c51e43d5a4e12d6d228/'+ latitude + ',' + longtitude + '?units=si'
    request({url, json: true} , (error , {body}) =>{

        if(error) {
            callback('Unable to connect to weather services' , undefined)
        } else if (body.error) { 
            callback("Unable to find the location", undefined)
        } else {
            const {temperature , precipProbability} = body.currently
            const {summary} = body.daily.data[0]
            callback(undefined , summary + ' It is currently ' + temperature + ' degrees out. There is a ' + precipProbability*100 + '% chance of rain. \nHigh: ' + body.daily.data[0].temperatureHigh +" deg")
        }
    })
}

module.exports = forecast