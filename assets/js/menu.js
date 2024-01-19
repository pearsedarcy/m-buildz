// Make Menu close when clicked
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("ul#menu li a").forEach((menu) => {
    menu.addEventListener("click", function () {
      document.getElementById("nav-toggle-box").checked = false;
    });
  });
});
