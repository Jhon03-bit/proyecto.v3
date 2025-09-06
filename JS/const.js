document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger')
  const mainNav = document.querySelector('.main-nav')
  const overlay = document.querySelector('.overlay')
  const dropdownLinks = document.querySelectorAll('.nav-list li.dropdown > a')
  const backToTopBtn = document.getElementById('backToTopBtn')

  // 🔹 Menú hamburguesa
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mainNav.classList.toggle('active')
    overlay.classList.toggle('active')
  })

  // 🔹 Cerrar al tocar overlay
  overlay.addEventListener('click', () => {
    hamburger.classList.remove('active')
    mainNav.classList.remove('active')
    overlay.classList.remove('active')
  })

  // 🔹 Dropdowns móviles (con clic)
  dropdownLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 1000) {
        e.preventDefault()
        const parent = link.parentElement
        parent.classList.toggle('open')
      }
    })
  })

  // 🔹 Botón volver arriba
  window.addEventListener('scroll', () => {
    backToTopBtn.style.display =
      window.scrollY > 200 ? 'block' : 'none'
  })
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})

// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});
