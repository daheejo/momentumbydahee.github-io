const clockTitle = document.querySelector(".js-clock");
const Christmas = new Date("December 25, 2022 00:00:00");

function tillChristmas() {
  const now = new Date();
  const howmuchLeft = Christmas - now;
  const daysLeft = Math.floor(howmuchLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((howmuchLeft / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((howmuchLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((howmuchLeft / 1000) % 60);
  clockTitle.innerHTML = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
}

tillChristmas();
setInterval(tillChristmas, 1000);