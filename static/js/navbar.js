document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("navbar-hamburger");
  const navbar_links = document.getElementById("navbar-links");

  hamburger.addEventListener("click", async () => {
    console.log("clicked");
    console.log(navbar_links);
    navbar_links.toggleAttribute("active");
  });
});
