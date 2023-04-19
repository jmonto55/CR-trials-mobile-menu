document.querySelector('.menu-bars').addEventListener('click', () => {
  document.querySelector('#mobile-nav').classList.toggle('invisible');
});

document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('#mobile-nav').classList.toggle('invisible');
});

document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#mobile-nav').classList.toggle('invisible');
  });
});