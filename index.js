const hamburger = document.getElementById('ham');
const navUl = document.getElementById('bar');

hamburger.addEventListener('click' , () => {
    navUl.classList.toggle('show');
});