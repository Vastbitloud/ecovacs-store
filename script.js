// Smooth scroll for menu links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  form.reset();
});