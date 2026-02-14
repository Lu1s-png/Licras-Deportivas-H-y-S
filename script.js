// Botón ☰ para abrir/cerrar menú principal
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Controlar el submenú de Productos en móviles
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault(); // evita que salte directamente a #productos
  dropdown.classList.toggle('open');
});
