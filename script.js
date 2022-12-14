const dt = document.querySelectorAll("dt")
dt.forEach(item => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("active")
    item.classList.toggle("active")
  })
})


const img = document.querySelector(".faq-img img")
const media = window.matchMedia("(max-width:876px)")
window.addEventListener("resize", () => {
  if(media.matches === true) {
    img.setAttribute("src", "./images/illustration-woman-online-mobile.svg")
  } else {
    img.setAttribute("src", "./images/illustration-box-desktop.svg")
  }
})