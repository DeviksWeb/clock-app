let hoursClock = document.querySelector("#hours");
let minutesClock = document.querySelector("#minutes");
let secondsClock = document.querySelector("#seconds");

const countTime = () => {

  let hoursTime = new Date().getHours();
  let minutesTime = new Date().getMinutes();
  let secondsTime = new Date().getSeconds();
  

  hoursClock.innerHTML = hoursTime;
  minutesClock.innerHTML = minutesTime;
 	secondsClock.innerHTML = secondsTime;
	
}

let interval = setInterval(countTime);