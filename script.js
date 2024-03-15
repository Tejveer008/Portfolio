window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar');
    header.classList.toggle('navbarDark', window.scrollY > 100);
});