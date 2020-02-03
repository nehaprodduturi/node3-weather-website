const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmVoYXByb2RkdXR1cmkiLCJhIjoiY2s1cndnb2dqMGhuNDNsbjVpM3o4czltdyJ9.6D8Yp3VT133WJvlrznPX4w&limit=1'
    request({url, json:true},(error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!',undefined)
        } else if (body.features.length === 0) {
            console.log('Invalid location')
            callback('Unable to find locationn. Try another search',undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode