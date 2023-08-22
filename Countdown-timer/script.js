const newYearDate = "1 Jan 2024";
const Days = document.querySelector("#Days");
const Hours = document.querySelector("#Hours");
const Mins = document.querySelector("#Mins");
const Seconds = document.querySelector("#Seconds");
const updateTime = () => {
  const newYear = new Date("1 Jan 2024");
  const now = new Date();
  const secondsRemaining = Math.floor((newYear - now) / 1000); // Convert to seconds
  let days = Math.floor(secondsRemaining / 86400);
  let hours = Math.floor((secondsRemaining % 86400) / 3600);
  let minutes = Math.floor((secondsRemaining % 3600) / 60);
  let seconds = secondsRemaining % 60;

  if(hours < 10){
    hours = `0${hours}`;
  }
  if(minutes < 10){
    minutes = `0${minutes}`;
  }
  if(seconds < 10){
    seconds = `0${seconds}`;
  }

  Days.innerHTML= days
  Hours.innerHTML= hours
  Mins.innerHTML= minutes
  Seconds.innerHTML= seconds
};
updateTime();
setInterval(() => {
    updateTime();
}, 1000);
