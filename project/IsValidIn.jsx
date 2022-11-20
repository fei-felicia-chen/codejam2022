import classes from "./location.module.css";
import { Link } from "react-router-dom";

function IsValidIn() {
  let targetLong;
  let targetLat;
  let currLong;
  let currLat;

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

  function isValid(dist) {
    return dist < 1;
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
  };

  function successCallBack(position) {
    currLong = position.coords.longitude;
    currLat = position.coords.latitude;
    console.log(currLong, currLat, targetLong, targetLat);
    const dist = calcDist(currLong, currLat, targetLong, targetLat);
    console.log(dist);
    if (isValid(dist)) {
      // document.write("Check in success!");

      return (
        <div>
          <section>
            <h1 className={classes.header}>The Check In is a Success!</h1>
            <Link to="/">
              <button className={classes.btnB}>Back</button>
            </Link>
          </section>
        </div>
      );
    } else {
      // document.write("Check in failed, please be at the assigned location.");

      return (
        <div>
          <section>
            <h1 className={classes.header}>You are not at the right location!</h1>
            <Link to="/">
              <button className={classes.btnB}>Back</button>
            </Link>
          </section>
        </div>
      );
    }
  };

  const errorCallBack = (error) => {
    console.log(error);
  };

  setLocation(-73.57885, 45.50734);
  navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack, options);
  
}

export default IsValidIn;