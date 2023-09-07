let clockItem = document.querySelector(".clock");
let timer = document.querySelector("#timer");
let homeScreen = document.querySelector(".phone_screen");
let timerScreen = document.querySelector(".phone_timer_screen");
let goBackFromTimer = document.querySelector(".return");

let stopInterval = setInterval(() => {
  clockItem.innerHTML = new Date().toLocaleTimeString("it-IT");
}, 1000);

let timerOpen = function () {
  homeScreen.style.display = "none";
  timerScreen.style.display = "block";
};

let homeOpen = function () {
  homeScreen.style.display = "block";
  timerScreen.style.display = "none";
};

timer.addEventListener("click", timerOpen);
goBackFromTimer.addEventListener("click", homeOpen);

//////////

let timer_2 = null;

let Timer_ele = document.querySelector(".time");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".Stop");

function timeProccess() {
  let sec = 0;
  let min = 0;
  timer_2 = setInterval(() => {
    Timer_ele.innerHTML = `${min} :` + sec;
    sec++;
    if (sec > 60) {
      sec = 0;
      min++;
    }
  }, 1000);
}

function stopTime() {
  clearInterval(timer_2);
}

stopBtn.addEventListener("click", stopTime);
startBtn.addEventListener("click", timeProccess);

// //////////////

let alarmScreen = document.querySelector(".phone_alarm_screen");
let alarmIcon = document.querySelector(".Alarm");
let gobackFromAlarm = document.querySelector(".phone_alarm_screen .return");

let alarmOpen = () => {
  homeScreen.style.display = "none";
  alarmScreen.style.display = "block";
};

let alarmClose = () => {
  homeScreen.style.display = "block";
  alarmScreen.style.display = "none";
};
alarmIcon.addEventListener("click", alarmOpen);
gobackFromAlarm.addEventListener("click", alarmClose);

// ///////////////////////////////
let playAlarm = document.querySelector(".set_alarm");
let stopAlarm = document.querySelector(".stop_alarm");
let timeSet = document.querySelector("#alarm_timeset");
let audio = document.querySelector(".audio");
let alarmWarn = document.querySelector(".alarm_warning");
console.log(timeSet.value);
let takenTime = null;
playAlarm.addEventListener("click", () => {
  takenTime = timeSet.value;
  alarmWarn.innerHTML = "Time is Set";
});

setInterval(() => {
  alarmWarn.innerHTML = "";
}, 3000);

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString("it-IT");
  if (time === `${takenTime}:00`) {
    audio.play();
  }
}, 1000);

stopAlarm.addEventListener("click", () => {
  audio.pause();
});

// /////////

let batteryPromise = navigator.getBattery();
let battery = document.querySelector(".battery");
let batteryPercentage = document.querySelector(".battery_percentage");

batteryPromise.then((batteryObject) => {
  console.log("IsCharging", batteryObject.charging);
  console.log("Percentage", batteryObject.level);

  battery.style.background = `linear-gradient(90deg, green ${
    batteryObject.level * 100
  }%, rgba(255, 255, 255, 0) ${
    batteryObject.level * 100
  }%, rgba(255, 255, 255, 0) 100%)`;
  batteryPercentage.innerHTML = `${batteryObject.level}%`;
});
