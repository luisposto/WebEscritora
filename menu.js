document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const menuLinks = document.getElementById('menu-links');

  hamburger.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
  });

  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.classList.remove('show');
    });
  });
});

window.addEventListener('scroll', () => {
  const menuLinks = document.getElementById('menu-links');
  if(menuLinks) menuLinks.classList.remove('show');
});
