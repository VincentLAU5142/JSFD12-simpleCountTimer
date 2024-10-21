import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
//It uses the setInterval browser API method to calculate 
//the spare time every second(1000 milliseconds).

//
//The standard hook useEffect  helps with the component's life-cycle 
//performs necessary cleanup like clearing the interval.
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  //days
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  //hours
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  //minutes
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  //seconds
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
