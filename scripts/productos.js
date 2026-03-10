(function() {
  'use strict';

  // ===== INICIALIZAR AOS =====
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
  });

  // ===== LEER PARÁMETRO DE LA URL =====
  function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Variables globales
  let categoriaActual = 'todos';

  // ===== CARGAR PRODUCTOS =====
  function cargarProductos(categoria = 'todos') {
    const grid = document.getElementById('productosGrid');
    if (!grid) return;
    
    categoriaActual = categoria;
    
    // Actualizar clase activa en botones de filtro
    document.querySelectorAll('.filtro-btn').forEach(btn => {
      btn.classList.remove('active');
      if (categoria === 'todos' && btn.textContent.trim() === 'TODOS') {
        btn.classList.add('active');
      } else if (categoria !== 'todos' && btn.textContent.toLowerCase().includes(categoria.replace('-', ' '))) {
        btn.classList.add('active');
      }
    });

    // Filtrar productos
    const productosFiltrados = categoria === 'todos' 
      ? productos 
      : productos.filter(p => p.categoria === categoria);

    // Generar HTML
    let html = '';
    productosFiltrados.forEach(p => {
      html += `
        <div class="producto-card" data-categoria="${p.categoria}">
          <div class="producto-imagen">
            <img src="${p.imagen}" alt="${p.nombre}">
            <span class="producto-tag">${p.categoriaTexto}</span>
          </div>
          <div class="producto-info">
            <span class="producto-categoria">${p.categoriaTexto}</span>
            <h3>${p.nombre}</h3>
            <p class="producto-descripcion">${p.descripcionCorta}</p>
            <button class="btn-ver-detalle" onclick="verDetalle(${p.id})">
              <i class="fas fa-eye"></i> VER DETALLE
            </button>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  }

  // ===== VER DETALLE EN MODAL =====
  window.verDetalle = function(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const modalContenido = document.getElementById('modalContenido');
    const modalOverlay = document.getElementById('modalOverlay');

    let caracteristicasHTML = '';
    producto.caracteristicas.forEach(c => {
      caracteristicasHTML += `<li><i class="fas fa-check-circle"></i> ${c}</li>`;
    });

    let tagsHTML = '';
    producto.tags.forEach(t => {
      tagsHTML += `<span class="modal-tag">${t}</span>`;
    });

    modalContenido.innerHTML = `
      <div class="modal-grid">
        <div class="modal-imagen">
          <span class="modal-imagen-badge">${producto.categoriaTexto}</span>
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="modal-info">
          <span class="modal-categoria-badge">${producto.categoriaTexto}</span>
          <h2>${producto.nombre}</h2>
          <p class="modal-descripcion">${producto.descripcionLarga}</p>
          
          <div class="modal-caracteristicas">
            <h3><i class="fas fa-clipboard-list"></i> Características técnicas</h3>
            <ul>
              ${caracteristicasHTML}
            </ul>
          </div>

          <div class="modal-tags">
            ${tagsHTML}
          </div>

          <div class="modal-botones">
            <button class="btn-cotizar" onclick="cerrarModal(); document.getElementById('contacto').scrollIntoView({behavior: 'smooth'});">
              <i class="fas fa-file-invoice"></i> SOLICITAR COTIZACIÓN
            </button>
            <a href="https://wa.me/7714043195?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(producto.nombre)}%20-%20${encodeURIComponent(producto.categoriaTexto)}" target="_blank" class="btn-whatsapp">
              <i class="fab fa-whatsapp"></i> WHATSAPP
            </a>
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.classList.add('modal-abierto');
  };

  // ===== CERRAR MODAL =====
  window.cerrarModal = function() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-abierto');
  };

  // ===== FILTRAR PRODUCTOS =====
  window.filtrarProductos = function(categoria) {
    cargarProductos(categoria);
    
    // Scroll suave hacia la sección de productos
    const productosSection = document.querySelector('.productos-section');
    if (productosSection) {
      productosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ===== INICIALIZAR =====
  document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay categoría en la URL
    const categoriaUrl = getParameterByName('categoria');
    
    if (categoriaUrl) {
      cargarProductos(categoriaUrl);
    } else {
      cargarProductos('todos');
    }

    // Modal events
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
      // Cerrar con Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          cerrarModal();
        }
      });

      // Cerrar click fuera
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
          cerrarModal();
        }
      });
    }
  });
})();