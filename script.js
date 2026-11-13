// Small site enhancements. No framework or build step is required.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();
});
