const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const link = document.querySelectorAll('nav ul li a')
const header = document.querySelector('#header')
const btTop = document.querySelector('.back-to-top')
const sections = document.querySelectorAll('main section[id]')
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

// Testimonials carousel slider Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
})

// ScrollReveal: mostrar elementos conforme a seção aparece.
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials testimonials,
  #contact .text, #contact .button,
  footer .brand, footer .social
`,
  { interval: 100 }
)

// Link ativo no menu
function activeMenuLink() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (let section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
    const startCheckpoint = checkpoint >= sectionTop
    const endCheckpoint = checkpoint <= sectionTop + sectionHeight

    if (startCheckpoint && endCheckpoint) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Mudar o header da página quando der scroll
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
    // Botão voltar para o topo
    btTop.classList.remove('hidden')
    // Marcar link como ativo na sessão
    activeMenuLink()
  } else {
    // scroll é menor que a altura do header
    header.classList.remove('scroll')
    // Botão voltar para o topo
    btTop.classList.add('hidden')
  }
})
