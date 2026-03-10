(function() {
    'use strict';

    // ===== INICIALIZAR AOS =====
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });

    // ===== SLIDER MEJORADO =====
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;
    let isTransitioning = false;

    function showSlide(index) {
      if (isTransitioning) return;
      isTransitioning = true;

      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      
      currentSlide = index;

      setTimeout(() => {
        isTransitioning = false;
      }, 800);
    }

    function nextSlide() {
      if (isTransitioning) return;
      let next = currentSlide + 1;
      if (next >= slides.length) next = 0;
      showSlide(next);
    }

    function prevSlide() {
      if (isTransitioning) return;
      let prev = currentSlide - 1;
      if (prev < 0) prev = slides.length - 1;
      showSlide(prev);
    }

    function startSlider() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlider() {
      clearInterval(slideInterval);
      slideInterval = null;
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopSlider();
        nextSlide();
        startSlider();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        stopSlider();
        prevSlide();
        startSlider();
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopSlider();
        showSlide(index);
        startSlider();
      });
    });

    const slider = document.querySelector('.hero-slider');
    if (slider) {
      slider.addEventListener('mouseenter', stopSlider);
      slider.addEventListener('mouseleave', startSlider);
    }

    startSlider();

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