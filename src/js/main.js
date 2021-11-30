const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 1000,
  },
});

// opening and closing sidebar from sidebar toggle buttons
const sideBar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const sideNavLinks = document.querySelectorAll("aside .nav__link");

function closeSideMenu(navlinksOrsidebarToggle) {
  navlinksOrsidebarToggle.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    sidebarToggle.classList.toggle("active");
    sidebarOverlay.classList.toggle("active");
  });
}

sidebarToggle.addEventListener("click", closeSideMenu);

closeSideMenu(sidebarToggle);

// closing sidebar upon clicking the side navlinks
sideNavLinks.forEach((link) => {
  link.addEventListener("click", closeSideMenu);

  closeSideMenu(link);
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

// scrollspy functionality

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
