(function() {
    'use strict';

    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // ===== MENÚ MÓVIL MEJORADO =====
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    const dropdown = document.getElementById('productosDropdown');
    const dropdownBtn = document.getElementById('dropdownBtn');
    
    function toggleMenu() {
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('menu-abierto');
      
      const icon = hamburger.querySelector('i');
      if (nav.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
        if (dropdown) dropdown.classList.remove('active');
      }
    }

    function cerrarMenu() {
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-abierto');
      hamburger.querySelector('i').className = 'fas fa-bars';
      if (dropdown) dropdown.classList.remove('active');
    }

    if (hamburger) {
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
      });
    }

    if (overlay) {
      overlay.addEventListener('click', cerrarMenu);
    }

    // Dropdown en móvil
    if (dropdown && dropdownBtn) {
      dropdownBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          e.stopPropagation();
          dropdown.classList.toggle('active');
          
          const icon = dropdownBtn.querySelector('i');
          icon.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      });
    }

    // Cerrar menú al hacer clic en enlaces
    document.querySelectorAll('.nav-link, .submenu a').forEach(link => {
      link.addEventListener('click', (e) => {
        if (link === dropdownBtn && window.innerWidth <= 900) return;
        if (window.innerWidth <= 900) cerrarMenu();
      });
    });

    // Cerrar menú al redimensionar
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && nav.classList.contains('active')) {
        cerrarMenu();
      }
      
      if (dropdown && dropdown.classList.contains('active') && window.innerWidth > 900) {
        dropdown.classList.remove('active');
        if (dropdownBtn) dropdownBtn.querySelector('i').style.transform = 'rotate(0deg)';
      }
    });

    // ===== TECLA ESCAPE (para cerrar menú) =====
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        cerrarMenu();
      }
    });

})();