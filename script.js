// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionner le bouton
  const bouton = document.querySelector('button');
  
  // Sélectionner le titre principal
  const titre = document.querySelector('header h1');

  // 1. Alerte au clic sur le bouton
  bouton.addEventListener('click', () => {
    alert('Bravo Tayé ! Tu maîtrises HTML, CSS et maintenant JavaScript ! 🚀');
  });

  // 2. Changer la couleur du titre au clic
  titre.addEventListener('click', () => {
    const couleurs = ['#e74c3c', '#f39c12', '#27ae60', '#3498db', '#9b59b6'];
    const couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
    titre.style.color = couleurAleatoire;
  });

  // 3. Message secret après 3 clics sur le bouton
  let clics = 0;
  bouton.addEventListener('click', () => {
    clics++;
    if (clics === 3) {
      const secret = document.createElement('p');
      secret.textContent = 'Secret débloqué : Tu vas devenir un GRAND développeur !';
      secret.style.color = '#f1c40f';
      secret.style.fontWeight = 'bold';
      secret.style.textAlign = 'center';
      secret.style.marginTop = '20px';
      document.querySelector('main').appendChild(secret);
    }
  });
});