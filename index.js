/* form search */
let searchButton = document.querySelector("#header-search")

document.querySelector("#header-search").addEventListener("click", function () {
  document.querySelector("#search-form").classList.add("active")
})

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#search-form").classList.remove("active")
})

/* section2-slider */
var swiper = new Swiper(".section2-list", {
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
/* section1-display */
let section1_title = document.querySelector(".section1-title h2")
let section1_content = document.querySelector(".section1-content-text")
let section1_image = document.querySelector(".section1-content-image")
window.addEventListener("load", function () {
    section1_title.classList.add("center");
    section1_content.classList.add("center");
    section1_image.classList.add("center");
})
/* section2-display */
let sections = document.querySelectorAll("section")
let offsetSec2 = sections[0].offsetTop + 600
let i =2
let currentTitle = ".section"+i+"-title" 
let currentList = ".section"+i+"-list" 

window.addEventListener("scroll",function () {
    let top = window.scrollY
    if( top > offsetSec2 ){
        document.querySelector(currentTitle).classList.add("center");
         document.querySelector(currentList).classList.add("center");
   }

   if( top < offsetSec2 ){
        document.querySelector(currentTitle).classList.remove("center");
        document.querySelector(currentList).classList.remove("center");
   }
})


