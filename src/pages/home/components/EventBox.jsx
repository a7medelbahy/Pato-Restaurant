import MoreBtn from "../../../components/MoreBtn";
import { useState, useEffect } from "react";

const EventBox = (props) => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMins, setTimerMins] = useState();
  const [timerSecs, setTimerSecs] = useState();
  let inerval;
  const startTimer = () => {
    let tempDate = new Date(),
      tempYear = tempDate.getFullYear(),
      tempMonth = tempDate.getMonth(),
      tempDay = tempDate.getDate();
    let futDate = new Date(
      tempYear,
      tempMonth,
      tempDay + props.eventBox.nDays,
      15,
      30,
      0
    );
    const futTime = futDate.getTime();

    inerval = setInterval(() => {
      const myTime = new Date().getTime(),
        remain = futTime - myTime,
        oneDay = 24 * 60 * 60 * 1000,
        oneHour = 60 * 60 * 1000,
        oneMin = 60 * 1000;
      let rDays = Math.floor(remain / oneDay),
        rHours = Math.floor((remain % oneDay) / oneHour),
        rMins = Math.floor((remain % oneHour) / oneMin),
        rSecs = Math.floor((remain % oneMin) / 1000);
      function decorateTime() {
        if (rDays < 10) {
          rDays = "0" + rDays;
        }
        if (rHours < 10) {
          rHours = "0" + rHours;
        }
        if (rMins < 10) {
          rMins = "0" + rMins;
        }
        if (rSecs < 10) {
          rSecs = "0" + rSecs;
        }
      }
      decorateTime();
      if (remain <= 0) {
        clearInterval(inerval.current);
      } else {
        setTimerDays(rDays);
        setTimerHours(rHours);
        setTimerMins(rMins);
        setTimerSecs(rSecs);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <div
      className="event-box mt-4 rounded overflow-hidden"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="row gy-5 align-items-center bg-white">
        <div className="col-lg-6">
          <div className="event-img">
            <img
              src={props.eventBox.img}
              className="img-fluid w-100 d-block"
              alt="EventImg"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="event-data px-3">
            <div className="data-content text-center">
              <h5 className="main-font">{props.eventBox.title}</h5>
              <p className="secondary-font mt-3">{props.eventBox.desc}</p>
              <div className="event-timer justify-content-evenly my-4 d-flex flex-wrap">
                <div className="timer-box">
                  <p>{timerDays}</p>
                  <small className="secondary-font fw-bold">Days</small>
                </div>
                <div className="timer-box">
                  <p>{timerHours}</p>
                  <small className="secondary-font fw-bold">Hours</small>
                </div>
                <div className="timer-box">
                  <p>{timerMins}</p>
                  <small className="secondary-font fw-bold">Mins</small>
                </div>
                <div className="timer-box">
                  <p>{timerSecs}</p>
                  <small className="secondary-font fw-bold">Secs</small>
                </div>
              </div>
              <MoreBtn path="/reservation" desc="View Details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
