function updateDateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
  const formattedDate = now.toLocaleDateString(options);
  document.getElementById("date-time").textContent = `${formattedDate} ${formattedTime}`;
}

// Update the date/time initially and every second
updateDateTime();
setInterval(updateDateTime, 1000);

var newBox = drawBox(80, 25);
document.getElementById("oneBlock").innerHTML = newBox;
