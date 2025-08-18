const countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const duration = countDownDate - now;

  if (duration < 0) {
    clearInterval(interval);
    updateDuration(0);
    return;
  }
  updateDuration(duration);
}, 1000);
function updateDuration(duration) {
  const hours = Math.floor(
    (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}
