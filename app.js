const geoCode = require("./utils/geocode");
const foreCast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please Provide Location to find");
} else {
  geoCode(address, (error, data) => {
    // console.log(("error", error));
    // console.log("data", data);
    if (error) {
      return console.log(error);
    }

    foreCast(data.latitude, data.longitude, (error, foreCast) => {
      if (error) {
        return console.log(error);
      }

      console.log("Location:-", data.location);
      console.log(foreCast);
    });
  });
}
