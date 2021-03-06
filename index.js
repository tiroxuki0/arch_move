
/* header visible/hidden */
window.onscroll = () =>{
  if(window.scrollY > 50){
    document.querySelector(".header .container .menu").classList.remove("active")
  }
}

/* navbar */
document.querySelector("#bar").addEventListener("click", function () {
  document.querySelector("#bar").classList.toggle("fa-times")
  document.querySelector(".header .container .menu").classList.toggle("active")
})

/* form search */
let searchButton = document.querySelector("#header-search")

document.querySelector("#header-search").addEventListener("click", function () {
  document.querySelector("#search-form").classList.add("active")
})

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#search-form").classList.remove("active")
})
/* click outside form search */

document.querySelector("#search-form").addEventListener("click", function (evt) {
  let outsideSearch = document.querySelector("#search-form")
  targetElement = evt.target
  if(targetElement == outsideSearch){
    document.querySelector("#search-form").classList.remove("active")
    document.querySelector("#search-box").value = null
  }
})

/* press ESC to close form search or close form sign in */

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode == 27){
    document.querySelector("#search-form").classList.remove("active")
    document.querySelector("#search-box").value = null

    document.querySelector(".form-wrapper").classList.remove("active")
  document.querySelector(".form-toggle").classList.remove("visible")
    document.querySelector(".form-panel.one").classList.remove("hidden")
    document.querySelector(".form-panel.two").classList.remove("active")
    document.querySelector(".form").style.height = panelOne + "px"
  }
})

/* form search end */

/* form signin start */

/* form signin active */
document.querySelector("#sign-in").addEventListener("click", function () {
  document.querySelector(".form-wrapper").classList.add("active")
})

/* form signin effect */
let panelOne = document.querySelector(".form-panel.one").offsetHeight
let panelTwo = document.querySelector(".form-panel.two").scrollHeight
window.addEventListener("load", function () {

  document.querySelector(".form-panel.two").addEventListener("click", function (e){
    e.preventDefault()
    document.querySelector(".form-toggle").classList.add("visible")
    document.querySelector(".form-panel.one").classList.add("hidden")
    document.querySelector(".form-panel.two").classList.add("active")
    document.querySelector(".form").style.height = panelTwo + "px"
  })
  
  document.querySelector(".form-toggle").addEventListener("click",function (e) {
    e.preventDefault()
    document.querySelector(".form-toggle").classList.remove("visible")
    document.querySelector(".form-panel.one").classList.remove("hidden")
    document.querySelector(".form-panel.two").classList.remove("active")
    document.querySelector(".form").style.height = panelOne + "px"
  })
})

/* form signin close */
document.getElementById("close-signin").addEventListener("click", function (){
  document.querySelector(".form-wrapper").classList.remove("active")
  document.querySelector(".form-toggle").classList.remove("visible")
    document.querySelector(".form-panel.one").classList.remove("hidden")
    document.querySelector(".form-panel.two").classList.remove("active")
    document.querySelector(".form").style.height = panelOne + "px"
})

/* click outside form signin */

document.querySelector("#form-wrapper").addEventListener("click", function (evt) {
  let outside = document.querySelector("#form-wrapper")
  targetElement = evt.target
  if(targetElement == outside){
    document.querySelector(".form-wrapper").classList.remove("active")
    document.querySelector(".form-toggle").classList.remove("visible")
    document.querySelector(".form-panel.one").classList.remove("hidden")
    document.querySelector(".form-panel.two").classList.remove("active")
    document.querySelector(".form").style.height = panelOne + "px"
  }
})


/* form signin end */

/* document.getElementById("form-wrapper").addEventListener("click", function (e) {
  if(e.target != document.querySelector(".form")) {
    document.querySelector(".form-wrapper").classList.remove("active")
  }  
}) */


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

/* section2-slider */
var swiper = new Swiper(".section2-list", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* show elements follow window scroll */
let offsetSec2 = sections[2].offsetTop - 250
let offsetSec3 = sections[3].offsetTop - 250
let offsetSec4 = sections[4].offsetTop - 400
let offsetSec5 = sections[5].offsetTop - 300


window.addEventListener("scroll",function () {
    let top = window.scrollY
    /* sec2 */
    if( top > offsetSec2 ){
        document.querySelector("#section2-title").classList.add("center");
        document.querySelector("#section2-content").classList.add("center");
      }
    /* sec3 */
    if( top > offsetSec3 ){
        document.querySelector("#section3-title").classList.add("center");
        document.querySelector("#section3-content .section3-image").classList.add("center");
        document.querySelector("#section3-content .section3-list").classList.add("center");
      }
    /* sec4 */
    if( top > offsetSec4 ){
        document.querySelector("#section4-title").classList.add("center");
         document.querySelector("#section4-content").classList.add("center");
        }
    /* sec5 */
    if( top > offsetSec5 ){
        document.querySelector("#section5-title").classList.add("center");
         document.querySelector("#section5-content").classList.add("center");
        }
})

/* loader */
function loader() {
  document.querySelector(".loader-container").classList.add("end-load")
  document.querySelector("body").style.overflow = "scroll";
}
function end_load() {
  setTimeout(loader, 500)
}
window.onload = () =>{
  end_load()
}
