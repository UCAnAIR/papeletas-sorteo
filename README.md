# Generador de papeletas del sorteo

Página estática que genera, en el navegador, un PDF con las papeletas numeradas del sorteo.
No necesita servidor ni base de datos: basta con alojar esta carpeta tal cual (por ejemplo en GitHub Pages).

## Uso

- Abre la página, escribe «Desde» y «Hasta» y pulsa **Generar PDF**.
- Enlace directo con el intervalo ya puesto (genera el PDF al abrirlo): `https://ucanair.github.io/papeletas-sorteo/?desde=101&hasta=200`.
- Las casillas aceptan espacios, «Nº 101», «#101», «0101», «1.000», números pegados desde una hoja e
  incluso «101-200» o «101 a 200» en una sola casilla. Si hay letras, decimales, negativos o un número
  demasiado alto, la casilla se marca en rojo con el motivo. Si los números están al revés se ordenan, y si
  solo hay uno se genera una papeleta.
- Desde Google Sheets, en una columna de la hoja de registro (B = desde, C = hasta):
  `=HIPERVINCULO("https://ucanair.github.io/papeletas-sorteo/?desde="&B2&"&hasta="&C2; "Imprimir")`

Para probarla en tu ordenador hay que servirla (abrir `index.html` con doble clic no funciona): por ejemplo
`python -m http.server` dentro de la carpeta y abrir http://localhost:8000.

## Cambiar el diseño

1. En Canva, escribe `0000` (el texto de `marcador` en `config.js`) donde deba ir cada número. Puede haber
   tantas papeletas por hoja como quieras; la página las encuentra sola.
2. Descarga el diseño como **PDF estándar** y sustituye `plantilla.pdf` por él (mismo nombre).
3. Si cambias la letra del número, pon el nuevo `.ttf` como `fuente.ttf` (o cambia `fuente` en `config.js`).

El resto de opciones (cifras, color, orden de numeración, ajuste del recuadro que tapa el `0000`) están
explicadas en `config.js`.

## Archivos

| Archivo         | Qué es                                                                    |
| --------------- | ------------------------------------------------------------------------- |
| `index.html`    | La página                                                                 |
| `config.js`     | Opciones                                                                  |
| `plantilla.pdf` | Diseño de la hoja de papeletas                                            |
| `fuente.ttf`    | Letra del número (Great Vibes, licencia OFL)                              |
| `lib/`          | pdf-lib 1.17.1, @pdf-lib/fontkit 1.1.1 y pdfjs-dist 3.11.174 (copias fijas) |
