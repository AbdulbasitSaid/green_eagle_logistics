let sideMenu = document.getElementById('side-menu');
let closeMemu = document.getElementById('close-menu');
sideMenu.classList.add('hidden');
let menuToggler = document.getElementById('menu-toggle');

menuToggler.addEventListener('click', () => {

    sideMenu.classList.toggle('hidden');
})
closeMemu.addEventListener('click', () => {

    sideMenu.classList.toggle('hidden');
})