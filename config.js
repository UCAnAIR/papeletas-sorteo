// ─────────────────────────────────────────────────────────────
//  Configuración del generador de papeletas · UCA&Air
//
//  Para CAMBIAR EL DISEÑO basta con sustituir «plantilla.pdf»
//  por la nueva exportación de Canva (PDF estándar). En el
//  diseño, escribe el texto del marcador (por defecto «0000»)
//  en cada sitio donde deba ir el número. La herramienta los
//  detecta sola, da igual cuántas papeletas haya por hoja.
// ─────────────────────────────────────────────────────────────
window.CONFIG = {
  // Archivo con el diseño (en esta misma carpeta)
  plantilla: "plantilla.pdf",

  // Texto que marca dónde va el número en el diseño
  marcador: "0000",

  // Cifras del número (4 → 0007, 0123, 1234…)
  cifras: 4,

  // Fuente del número (TTF u OTF en esta carpeta) y su color (hex)
  fuente: "fuente.ttf",
  color: "#000000",

  // Orden de numeración dentro de cada hoja:
  //   "filas"    → izquierda a derecha y luego hacia abajo
  //   "columnas" → de arriba abajo y luego la siguiente columna
  orden: "filas",

  // Máximo de papeletas por PDF (para no colgar el navegador)
  maximo: 5000,

  // Ajuste fino del recuadro que tapa el marcador, en proporción
  // al tamaño de letra. Solo tocar si se ve un resto del «0000»
  // o si el recuadro pisa otro texto.
  tapar: { izquierda: 0.08, derecha: 0.08, abajo: 0.22, arriba: 0.80 },
};
