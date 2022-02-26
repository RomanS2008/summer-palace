const hamburger = document.querySelector('.header_wrapper_hamburger'),
    wrapper = document.querySelector('.header_wrapper_nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header_wrapper_hamburger_active');
    wrapper.classList.toggle('header_wrapper_nav_active')
})