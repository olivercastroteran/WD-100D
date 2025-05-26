const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu(e) {
  mobileMenu.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMobileMenu);
