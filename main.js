function updateDateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
  const formattedDate = now.toLocaleDateString(options);
  document.getElementById("date-time").textContent = `${formattedDate} ${formattedTime}`;
}

// Update the date/time initially and every second
updateDateTime();
setInterval(updateDateTime, 1000);
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const parentNode = toggle.parentElement;
      const children = parentNode.querySelector(".children");

      if (children) {
        if (children.style.display === "none" || !children.style.display) {
          children.style.display = "block";
          toggle.textContent = "-"; // Collapse indicator
        } else {
          children.style.display = "none";
          toggle.textContent = "+"; // Expand indicator
        }
      }
    });
  });
});
