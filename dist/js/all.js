const swiper=new Swiper(".swiper",{autoplay:{delay:1e3}}),sideBar=document.querySelector("aside"),sidebarToggle=document.querySelector(".sidebar-toggle"),sidebarOverlay=document.querySelector(".sidebar-overlay"),sideNavLinks=document.querySelectorAll("aside .nav__link");function closeSideMenu(e){e.addEventListener("click",(()=>{sideBar.classList.toggle("active"),sidebarToggle.classList.toggle("active"),sidebarOverlay.classList.toggle("active")}))}sidebarToggle.addEventListener("click",closeSideMenu),closeSideMenu(sidebarToggle),sideNavLinks.forEach((e=>{e.addEventListener("click",closeSideMenu),closeSideMenu(e)}));let scrollTop=document.querySelector(".scroll-to-top");function scrolltoTop(e){e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}window.addEventListener("scroll",(()=>{window.scrollY>700?scrollTop.classList.add("active"):scrollTop.classList.remove("active"),scrolltoTop(scrollTop)}));let sections=document.querySelectorAll("section"),navLinks=document.querySelectorAll(".nav__link");window.addEventListener("scroll",(()=>{sections.forEach((e=>{let o=window.scrollY,s=e.offsetTop,l=e.offsetHeight,t=e.getAttribute("id");o>s&&o<s+l&&navLinks.forEach((e=>{e.classList.remove("active"),document.querySelector(`.nav__link[href*=${t}`).classList.add("active"),document.querySelector(`aside .nav__link[href*=${t}`).classList.add("active")}))}))}));
//# sourceMappingURL=all.js.map