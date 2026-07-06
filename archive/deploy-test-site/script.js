function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleString();
}
updateClock();
setInterval(updateClock, 1000);
