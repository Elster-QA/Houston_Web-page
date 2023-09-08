


document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.tex, .maintex');

  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });


      document.querySelector('.sidebar').classList.remove('active');
    });
  });
});


















