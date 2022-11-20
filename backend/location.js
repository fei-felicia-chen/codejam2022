
let targetLong;
let targetLat;

function setLocation(long, lat) {
  targetLat = lat;
  targetLong = long;
}

function calcDist(long1, lat1, long2, lat2) {
  long1 = (long1 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  long2 = (long2 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let dlong = long2 - long1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlong / 2), 2);
  let c = 2 * Math.asin(Math.sqrt(a));
  let r = 6371;
  return c * r;
}

function toMain() {
  location.href = "/";
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
};

const sucessCallBack = (position) => {
  const long = position.coords.longitude;
  const lat = position.coords.latitude;
  let dist = calcDist(long, lat, targetLong, targetLat);
  if (dist < 1) return true;
  else return false;
};

const errorCallBack = (error) => {
  console.log(error);
};

const valid = navigator.geolocation.getCurrentPosition(
  sucessCallBack,
  errorCallBack,
  options
);

function isValidIn(long, lat) {
  setLocation(long, lat);
  const valid = navigator.geolocation.getCurrentPosition(
    sucessCallBack,
    errorCallBack,
    options
  );
  if (valid) {
    document.write("Check in success!");
  } else {
    document.write("Check in failed, please be at the assigned location.");
  }
  setTimeout(toMain(), 5000);
}

function isValidOut(long, lat) {
  setLocation(long, lat);
  const valid = navigator.geolocation.getCurrentPosition(
    sucessCallBack,
    errorCallBack,
    options
  );
  if (valid) {
    document.write("Check out success!");
  } else {
    document.write("Check out failed, please be at the assigned location.");
  }
  setTimeout(toMain(), 5000);
}
export default isValidLocation;
