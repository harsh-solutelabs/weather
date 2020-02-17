const request = require("request");

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

geoCode("admedabad", (error, data) => {
  console.log(("error", error));
  console.log("data", data);
});
