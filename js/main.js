const icon = document.querySelector('.icon');
const ctaButton = document.querySelector('.huddle__cta');
const heroText = document.querySelector('.huddle__hero__text');
const body = document.querySelector('body');
const socialIcon = document.querySelectorAll('.social');

icon.addEventListener('click', () =>{
icon.classList.toggle('light');
ctaButton.classList.toggle('light');
heroText.classList.toggle('light');
body.classList.toggle('light');


socialIcon.forEach(function(e) {
e.classList.toggle('light');
});
});