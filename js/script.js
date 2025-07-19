const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(link => {
  link.addEventListener('click', ()=>{
    navLinks.forEach(n => n.classList.remove('active'))
    link.classList.add('active')
  })
})



