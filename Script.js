"use strict";
const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

// To set the time hands
const setTimeHands = function () {
  const timer = new Date();
  const seconds = timer.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutes = timer.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hours = timer.getHours();
  const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
};

const setTime = function () {
  const time = new Date();
  //  Seconds
  const seconds = time.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  // Minutes
  const minutes = time.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  // Hours
  const hours = time.getHours();
  const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
};

setTimeHands();

setInterval(setTime, 500);
