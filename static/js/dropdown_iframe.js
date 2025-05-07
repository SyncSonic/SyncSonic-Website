document.addEventListener("DOMContentLoaded", function () {
  const account_dropdown = document.getElementById("settings-dropdown");
  const settings = document.getElementById("settings-button");

  function activate_dropdown(element) {
    element.style.display = "block";
  }
  settings.addEventListener("click", () => activate_dropdown(account_dropdown));

  window.onclick = function (event) {
    if (!settings.contains(event.target)) {
      account_dropdown.style.display = "none";
    }
  };
});
