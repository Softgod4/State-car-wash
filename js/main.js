document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.getElementById('burger-button');
    const navbarSticky = document.getElementById('navbar-sticky');

    burgerButton.addEventListener('click', function() {
      navbarSticky.classList.toggle('hidden');
    });
  });