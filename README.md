# Orvio

Proyecto final del curso de Desarrollo Web Front-end de Talento Tech .

## Cómo arrancó todo

Al principio hice la página que habíamos armado en clase, siguiendo la consigna del curso tal cual. Pero después se me ocurrió algo mejor: una amiga mía tiene una tienda de tecnología real en José León Suárez, y pensé que en vez de entregar un proyecto genérico podía armarle algo de verdad, que ella pudiera llegar a usar. Así que dejé la página de la clase de lado y arranqué de cero con Orvio.

## Qué es Orvio

Es una tienda online de tecnología: el cliente entra, mira el catálogo (auriculares, celulares, notebooks, smart TVs, relojes, accesorios), agrega lo que quiere a un carrito, y cuando termina, le manda el pedido directo al WhatsApp de la tienda con todo ya armado: productos, cantidades y total.

## Cómo lo fui armando

Arranqué por la estructura: hice el home, la tienda, el carrito, la sección "nosotros", contacto y políticas, todas conectadas entre sí con la misma navbar y footer.

Hice el carrito de compras guardando todo en localStorage, para que si el cliente cierra la página o la recarga, no pierda lo que ya había agregado.

Apliqué el envío del pedido por WhatsApp, así que armé una función que arma el mensaje solo: pone el nombre del cliente, la fecha, cada producto con su cantidad y precio, y el total al final, listo para mandar.

Agregué los modales de detalle de producto (tipo Mercado Libre), con imagen grande, precio, descripción y el botón para sumarlo al carrito directo desde ahí.

Hice el formulario de contacto con validación en JavaScript, para que no se pueda mandar vacío ni con un email mal escrito.

Armé el menú hamburguesa para que se vea bien en el celular, porque calculo que la mayoría de los clientes de mi amiga van a entrar desde el teléfono.

Metí notificaciones tipo toast en vez de los alerts feos de JavaScript, para que se sienta más prolijo.

Al principio traía los productos desde una API externa (DummyJSON) usando fetch, pero después lo cambié y pasé todo a un array armado por mí en el JS. Lo hice así para tener control total de los productos, precios e imágenes de la tienda real de mi amiga, sin depender de un servicio externo que en cualquier momento se puede caer o cambiar.

En el camino tuve que ir corrigiendo varias cosas: rutas rotas del script.js y de las imágenes cuando las páginas estaban adentro de /pages/, un HTML entero que se me había duplicado sin querer dentro de tienda.html, ids repetidos, y links del footer que no llevaban a ningún lado.

## Ayuda que usé

No lo hice sola de principio a fin: usé Gemini y Claude como apoyo para destrabarme en varias partes (sobre todo JavaScript), y también miré varios videos de YouTube para entender mejor algunas cosas antes de meter mano en el código. Todo lo que está en el proyecto lo terminé escribiendo, entendiendo y ajustando yo, pero no voy a decir que lo hice sin ayuda porque no sería justo.

## Tecnologías utilizadas

- HTML5 (semántico)
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (sin frameworks)

## Librerías externas

- **Font Awesome** — para los íconos (carrito, WhatsApp, redes sociales, etc.)
- **Google Fonts** — tipografías Space Grotesk e Inter

## Estructura del proyecto

```
├── index.html
├── pages/
│   ├── tienda.html
│   ├── carrito.html
│   ├── acercade.html
│   ├── contacto.html
│   └── politicas.html
├── estilos/
│   └── styles.css
├── script/
│   └── script.js
└── img/
```
