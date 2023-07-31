/*===================== MENU SHOW Y HIDDEN =====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===================== MENU SHOW =====================*/
// Validate if constants exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===================== MENU HIDDEN =====================*/
// Validate  if constants exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}


/*===================== REMOVE MENU MOBILE  =====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===================== ACCORDION SKILLS =====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggeleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggeleSkills)
})

/*===================== QUALIFICATTION TABS =====================*/


/*===================== SERVICES MODAL =====================*/


/*===================== PORTFOLIO SWIPER =====================*/


/*===================== TESTIMONIAL =====================*/


/*===================== SCROLL SECTION ACTIVE LINK =====================*/


/*===================== CHANGE BACKGROUND HEADER =====================*/