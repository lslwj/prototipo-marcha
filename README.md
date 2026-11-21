# Prototipo semifuncional: Consulta de escalas para fisioterapeutas (Equipo 1)

## Cómo abrirlo
1. Descomprime la carpeta.
2. Abre `index.html` en el navegador (en computadora o en el teléfono).
3. Para probarlo en el teléfono (Samsung S25, iPhone 16 o iPhone 18 Pro), lo más práctico es publicar la carpeta en GitHub Pages o Netlify Drop y abrir el enlace desde el teléfono.

Se necesita conexión a internet para las tipografías (Google Fonts) y el video de YouTube. El resto funciona sin conexión.

## Flujo principal
Área motora → Marcha → (Componentes | Tipos de marcha | Giros) → elemento → visualización

| Pantalla | Archivo | Visualización |
|---|---|---|
| Área motora | `index.html` | Solo la tarjeta "Marcha" es navegable |
| Marcha | `marcha.html` | — |
| Componentes | `componentes.html` | — |
| Tipos de marcha | `tipos.html` | — |
| Giros | `giros.html` | — |
| Escala de Tinetti | `tinetti.html` | PDF (2 páginas) |
| Timed Up and Go | `tug.html` | Video de YouTube |
| GAIT | `gait.html` | PDF (7 páginas) |
| Escala WGS | `wgs.html` | PDF (2 páginas) |
| Test de Giro 360° | `giro360.html` | Sin visualización |

## Interacciones
- Flecha de regreso a la pantalla anterior y ruta de navegación (breadcrumb) en todas las pantallas. Cuando la ruta no cabe, los niveles iniciales se muestran como "…"; al tocarlos se ve la ruta completa.
- Buscador: filtra las tarjetas de la pantalla (ignora acentos).
- Visualizador de PDF en ventana modal con paginación y enlace para abrir el PDF completo.
- Reproductor de video en ventana modal.

## Estructura
```
index.html, marcha.html, ...   pantallas
css/styles.css                 estilos (colores y tipografías de Figma)
js/app.js                      íconos, breadcrumb, buscador y visualizador
assets/img/                    ilustraciones de las tarjetas
assets/pdf/                    PDFs originales y sus páginas en JPG
```
