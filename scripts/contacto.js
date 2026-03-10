(function() {
    'use strict';

    // ===== INICIALIZAR AOS =====
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });

    // ===== ANIMACIÓN DE NÚMEROS =====
    const stats = document.querySelectorAll('.stat-numero');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stat = entry.target;
          const finalValue = stat.textContent.replace('+', '');
          let currentValue = 0;
          const increment = Math.ceil(finalValue / 50);
          
          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
              stat.textContent = finalValue + '+';
              clearInterval(timer);
            } else {
              stat.textContent = currentValue + '+';
            }
          }, 30);
          
          observer.unobserve(stat);
        }
      });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));

})();