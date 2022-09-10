const darkwhite = document.querySelector('.dw');
const background = document.querySelector('.bg');

darkwhite.addEventListener('click', () => {
    darkwhite.classList.toggle('active');
    background.classList.toggle('active');
})
