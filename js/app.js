let counter = document.querySelector(`.number`);
let dys = document.querySelector(`.days`);

const int = setInterval(() => {
  // the normal date
  let now = new Date().getTime();
  // the desire date
  let desire = new Date(`Dec 25, 2025 23:59:59`).getTime();
  // the substraction of the two dates in milisecond
  let total = desire - now;
  // the desire date in days
  let days = Math.floor(total / 1000 / 60 / 60 / 24);
  // the desire date in hours
  let hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // the desire date in minutes
  let minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  // the desire date in seconds
  let seconds = Math.floor((total % (1000 * 60)) / 1000);
  counter.innerHTML = days < 10 ? `0${days}` : days;
  if (days == 1) {
    counter.innerHTML = hours > 10 ? `0${hours}` : hours;
    dys.innerHTML = `hours`;
  }
  if (hours == 1) {
    counter.innerHTML = minutes > 10 ? `0${minutes}` : minutes;
    dys.innerHTML = `minutes`;
  }
}, 1000);
