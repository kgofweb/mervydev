// DOM elements
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const main = document.querySelector('main');

// Event listner
toggle.addEventListener('click', showMenu);
navLinks.forEach(nav => nav.addEventListener('click', linkAction));

// Show menu
function showMenu() {
   nav.classList.toggle('show');
   
   if(nav.classList.contains('show')) {
      main.style.filter = 'blur(2px)';
   } else {
      main.style.filter = 'blur(0px)';
   }
}

// Active and remove menu
function linkAction() {
   // Active link
   navLinks.forEach(nL => nL.classList.remove('active'));
   this.classList.add('active');

   // Remove menu mobile
   nav.classList.remove('show');

   if(nav.classList.contains('show')) {
      main.style.filter = 'blur(2px)';
   } else {
      main.style.filter = 'blur(0px)';
   }
}

// Animation with Scroll Reveal
const sr = ScrollReveal({
   origin: 'top',
   distance: '80px',
   duration: 2000,
   reset: true
});

// Scroll Home
sr.reveal('.home-title', {});

sr.reveal('.button', {
   delay: 200
});

sr.reveal('.home-social-icon', {
   interval: 200
});

// About scroll
sr.reveal('.about-subtitle', {
   delay: 300
});

sr.reveal('.about-subtitle-2', {
   delay: 500
});

sr.reveal('.about-text', {
   delay: 600
});

// Skills scroll
sr.reveal('.skills__subtitle', {});

sr.reveal('.skills__text', {});

sr.reveal('.skills__data', {
   interval: 200
});

sr.reveal('.skills__img', {
   delay: 600
});

// Porftolio
sr.reveal('.portfolio__img', {
   interval: 200
});

// Contact Scroll
sr.reveal('.contact__info', {
   interval: 200
})

sr.reveal('.contact__input', {
   interval: 200
});

sr.reveal('.contact__button', {
   interval: 200
});