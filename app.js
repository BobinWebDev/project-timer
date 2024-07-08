document.addEventListener("DOMContentLoaded", function () {
  function updateDateTime() {
    const now = new Date();
    const day = now.getDate(); // Get today's date
    const hour = now.getHours(); // Get current hour
    const minute = now.getMinutes(); // Get current minute
    const second = now.getSeconds(); // Get current second

    document.getElementById("day").innerText = day < 10 ? "0" + day : day;
    document.getElementById("hour").innerText = hour < 10 ? "0" + hour : hour;
    document.getElementById("minute").innerText = minute < 10 ? "0" + minute : minute;
    document.getElementById("second").innerText =  second < 10 ? "0" + second : second;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime(); // initial call to set the values immediately
});

