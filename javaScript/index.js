

const btn = document.querySelector('#menu');

const close = document.querySelector('#close')
const links = document.querySelector('.nav__links')

btn.addEventListener('click', function(){
     links.style.display = 'block'
})
close.addEventListener('click', function(){
     links.style.display = ''
})


