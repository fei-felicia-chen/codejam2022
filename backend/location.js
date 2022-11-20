let targetLong;
let targetLat;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
};

const sucessCallBack = (position) => {
  const long = position.coords.longitude;
  const lat = position.coords.latitude;
  if (Math.abs(long - targetLong) < 1000 && Math.abs(lat - targetLat) < 1000)
    return true;
  else return false;
};

const errorCallBack = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(
  sucessCallBack,
  errorCallBack,
  options
);
