const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const link = document.querySelectorAll('nav ul li a')
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

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

// Mudar o header da página quando der scroll
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
})
