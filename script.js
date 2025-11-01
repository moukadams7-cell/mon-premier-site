document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode
  const toggle = document.getElementById('darkModeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
  });

  // Formulaire
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.textContent = 'Message envoyé ! (Simulation)';
    message.style.color = '#27ae60';
    setTimeout(() => {
      form.reset();
      message.textContent = '';
    }, 3000);
  });
});