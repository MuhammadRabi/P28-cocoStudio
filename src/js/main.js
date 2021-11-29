const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 1000,
  },
});

// menu toggle logic

const sideBar = document.querySelector("aside");
const menuToggle = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  menuToggle.classList.toggle("active");
  closeMenu.classList.toggle("active");
});

// scroll to top functionality

let scrollTop = document.querySelector(".scroll-to-top");

function scrolltoTop(toTop) {
  toTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

window.addEventListener("scroll", () => {
  window.scrollY > 700
    ? scrollTop.classList.add("active")
    : scrollTop.classList.remove("active");
  scrolltoTop(scrollTop);
});

// scrollspy

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav__link");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`.nav__link[href*=${id}`)
          .classList.add("active");
        // in case there is sidebar
        document
          .querySelector(`aside .nav__link[href*=${id}`)
          .classList.add("active");
      });
    }
  });
});
