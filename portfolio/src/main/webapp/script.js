const toggleNav = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".nav-link");

// show navbar menu on small screen devices
toggleNav.addEventListener("click", () => {
  navMenu.classList.toggle("show-nav");
});

// close navbar menu and set active css class to clicked nav link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // remove active css class from all nav link
    navLinks.forEach((link) => link.classList.remove("active"));
    // add active css class to clicked link
    this.classList.add("active");
    // hide nav menu
    navMenu.classList.remove("show-nav");
  });
});

// apply a util class to our nav once we reach a certain scroll threshold
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("navbar-scrolled");
  } else {
    nav.classList.remove("navbar-scrolled");
  }
});
