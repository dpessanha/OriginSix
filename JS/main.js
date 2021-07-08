const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const link = document.querySelectorAll('nav ul li a')

for (const e of toggle) {
  e.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

for (const e of link) {
  e.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
