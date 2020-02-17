const request = require("request");
const foreCast = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/04106c915f9369521122a2ba4a67450b/" +
    longitude +
    "," +
    latitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Enable to Connect Weather App", undefined);
    } else if (response.body.error) {
      callback("Unable to find Location", undefined);
    } else {
      callback(undefined, {
        summary: response.body.daily.data[0].summary,
        currently: response.body.currently.temperature,
        rain_Chances: response.body.currently.precipProbability
      });
    }
  });
};
module.exports = foreCast;

//Skydark-weather-api----------------------------------------------------
// const url =
//   "https://api.darksky.net/forecast/04106c915f9369521122a2ba4a67450b/37.8267,-233";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Enable to Connect Weather app");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.daily.data[0].summary +
//         "It is currently " +
//         response.body.currently.temperature +
//         "degress out.There is " +
//         response.body.currently.precipProbability +
//         "% chance of rain."
//     );
//   }
// });
