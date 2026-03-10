// ===== BASE DE DATOS DE PRODUCTOS =====
const productos = [
  // Tubería Galvanizada
  {
    id: 1,
    nombre: "Tubería Galvanizada",
    categoria: "tuberia-galvanizada",
    categoriaTexto: "TUBERÍA GALVANIZADA",
    imagen: "/Imagenes/Productos/Galvanizado.png",
    descripcionCorta: "Tubería de acero galvanizado por inmersión en caliente.",
    descripcionLarga: "Tubería de acero al carbón con recubrimiento de zinc que la protege contra la corrosión. Ideal para líneas de agua. Resistente a la intemperie.",
    caracteristicas: [
      "Diámetros: 1/2\" a 12\"",
      "Cédula 40 y 80",
      "Longitud: 6.4 metros",
      "Roscada en ambos extremos",
      "Norma ASTM A53"
    ],
    tags: ["Galvanizada", "Agua", "Estructural"]
  },

  // Válvulas y Llaves
  {
    id: 3,
    nombre: "Válvula de Compuerta",
    categoria: "valvulas",
    categoriaTexto: "VÁLVULAS",
    imagen: "Imagenes/productos/Vcompuerta.png",
    descripcionCorta: "Válvula de compuerta para apertura/cierre total.",
    descripcionLarga: "Válvula de compuerta con vástago ascendente, ideal para aplicaciones que requieren apertura total o cierre total sin restricción al flujo.",
    caracteristicas: [
      "Diámetros: 1/2\" a 24\"",
      "Presión: Clase 150, 300",
      "Extremos: bridados, roscados",
      "Material: Bronce, hierro, acero"
    ],
    tags: ["Compuerta", "Apertura total", "Industrial"]
  },
  {
    id: 4,
    nombre: "Válvula de Esfera",
    categoria: "valvulas",
    categoriaTexto: "VÁLVULAS",
    imagen: "Imagenes/productos/Vesfera.png",
    descripcionCorta: "Válvula de esfera para apertura y cierre rápido.",
    descripcionLarga: "Válvula de esfera de 1/4 de vuelta para apertura y cierre rápido. Ideal para aplicaciones de uso frecuente. Disponible en bronce, acero inoxidable y PVC.",
    caracteristicas: [
      "Diámetros: 1/4\" a 8\"",
      "Dos piezas y tres piezas",
      "Palanca o mariposa",
      "Material: Bronce, acero, PVC"
    ],
    tags: ["Esfera", "Apertura rápida", "Industrial"]
  },
  {
    id: 5,
    nombre: "Llave de Nariz",
    categoria: "valvulas",
    categoriaTexto: "VÁLVULAS",
    imagen: "Imagenes/productos/Llnariz.png",
    descripcionCorta: "Llave de nariz para control de flujo en instalaciones.",
    descripcionLarga: "Llave de nariz fabricada en latón forjado, ideal para instalaciones hidráulicas domésticas y comerciales. Permite un control preciso del flujo de agua.",
    caracteristicas: [
      "Diámetros: 1/2\", 3/4\", 1\"",
      "Material: Latón forjado",
      "Maneral de aluminio",
      "Para agua hasta 125 PSI"
    ],
    tags: ["Llave nariz", "Agua", "Doméstico"]
  },
  {
    id: 6,
    nombre: "Válvula de Retención (Check)",
    categoria: "valvulas",
    categoriaTexto: "VÁLVULAS",
    imagen: "Imagenes/productos/check.png",
    descripcionCorta: "Válvula check para evitar flujo inverso.",
    descripcionLarga: "Válvula de retención tipo check para evitar el flujo inverso en tuberías. Disponible en tipo columpio, pistón o bola. Ideal para bombas y sistemas hidráulicos.",
    caracteristicas: [
      "Diámetros: 1/2\" a 12\"",
      "Tipo: Columpio, pistón",
      "Material: Bronce, hierro",
      "Roscada o bridada"
    ],
    tags: ["Check", "Retención", "Flujo inverso"]
  },
  // Medidores
  {
    id: 10,
    nombre: "Medidor de Agua",
    categoria: "medidores",
    categoriaTexto: "MEDIDORES",
    imagen: "Imagenes/productos/Medidor.png",
    descripcionCorta: "Medidor de agua tipo chorro múltiple.",
    descripcionLarga: "Medidor de agua potable tipo chorro múltiple con lectura directa. Ideal para medir consumo en casas, departamentos y comercios. Aprobado por CONAGUA.",
    caracteristicas: [
      "Diámetros: 1/2\", 3/4\", 1\"",
      "Caudal: 1.5 a 30 m³/h",
      "Lectura directa en m³",
      "Cuerpo de bronce"
    ],
    precio: "$450 - $1,200",
    tags: ["Agua", "Medidor", "Consumo"]
  },
  {
    id: 11,
    nombre: "Manómetro",
    categoria: "medidores",
    categoriaTexto: "MEDIDORES",
    imagen: "Imagenes/productos/Manometro.png",
    descripcionCorta: "Manómetro para medición de presión.",
    descripcionLarga: "Manómetro tipo bourdon para medición de presión en sistemas hidráulicos, neumáticos y de vapor. Caja de acero inoxidable y glicerina.",
    caracteristicas: [
      "Diámetro: 2.5\", 4\"",
      "Rangos: 0-100, 0-300 PSI",
      "Conexión: 1/4\" NPT",
      "Precisión ±1.5%"
    ],
    precio: "$180 - $450",
    tags: ["Presión", "Manómetro", "Instrumento"]
  },

  // Fierro Fundido
  {
    id: 15,
    nombre: "Codo Fierro Fundido 90°",
    categoria: "fierro-fundido",
    categoriaTexto: "FIERRO FUNDIDO",
    imagen: "Imagenes/productos/Codofofo.png",
    descripcionCorta: "Codo de fierro fundido para drenaje y alcantarillado.",
    descripcionLarga: "Codo de fierro fundido para sistemas de drenaje, alcantarillado y ventilación. Resistente y duradero, con campana y espiga para unión hermética.",
    caracteristicas: [
      "Diámetros: 2\" a 12\"",
      "Ángulo: 90°, 45°",
      "Unión campana-espiga",
      "Con empaque de hule"
    ],
    precio: "$85 - $950",
    tags: ["Fierro fundido", "Drenaje", "Alcantarillado"]
  },

  // Soportería
  {
    id: 18,
    nombre: "Abrazadera tipo Omega",
    categoria: "soporteria",
    categoriaTexto: "SOPORTERÍA",
    imagen: "Imagenes/productos/Abrazadera.png",
    descripcionCorta: "Abrazadera metálica para sujeción de tuberías.",
    descripcionLarga: "Abrazadera tipo omega fabricada en acero galvanizado con tornillería incluida. Ideal para fijar tuberías a muros, techos y estructuras.",
    caracteristicas: [
      "Diámetros: 1/2\" a 12\"",
      "Material: Acero galvanizado",
      "Con empaque de neopreno",
      "Tornillería incluida"
    ],
    precio: "$12 - $220",
    tags: ["Abrazadera", "Sujeción", "Soporte"]
  }
];