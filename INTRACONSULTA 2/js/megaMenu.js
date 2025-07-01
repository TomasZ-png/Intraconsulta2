document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('otrasOperacionesBtn');
  const menu = document.getElementById('megaMenu');
  const overlay = document.getElementById('megaMenuOverlay');
  const closeBtn = document.getElementById('closeMegaMenu');

  function openMenu() {
    menu.style.display = 'block';
    overlay.style.display = 'block';
  }
  function closeMenu() {
    menu.style.display = 'none';
    overlay.style.display = 'none';
  }
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    openMenu();
  });
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
}); 