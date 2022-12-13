const dt = document.querySelectorAll("dt")
dt.forEach(item => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("active")
    item.classList.toggle("active")
  })
})