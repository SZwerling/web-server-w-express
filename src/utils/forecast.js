const request = require("request");

const forecast = (latitude, longitude, callback) => {
   const url =
      "http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=" +
      latitude +
      "," +
      longitude +
      "&units=f";

   request({ url, json: true }, (error, {body} ) => {
      if (error) {
         //for complete lack of response
         callback("Cannot reach forecast api.", undefined);
      } else if (body.error) {
         callback("Unable to find location.", undefined);
      } else {
        const weather = body.current.weather_descriptions[0].toLowerCase()
         callback(undefined, `Currently it is ${weather} with a temperature of ${body.current.temperature} degrees`);
      }
   });
};

module.exports = forecast;

// const url = 'http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=' + latitude + ',' + longitude + '&units=f';
