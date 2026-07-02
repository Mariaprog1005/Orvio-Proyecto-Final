# Orvio

Proyecto final del curso de Desarrollo Web (Talento Tech ).

## ¿Qué es?

Orvio es una tienda online de tecnología. Es un sitio multipágina donde se pueden ver productos (auriculares, celulares, notebooks, smart TVs, relojes, accesorios), agregarlos a un carrito de compras y hacer el pedido por WhatsApp.

## Idea principal

La idea fue armar una tienda de tecnología completa y funcional, con una experiencia de compra simple: el usuario navega el catálogo, ve el detalle de cada producto en un modal, arma su carrito, lo edita las veces que quiera, y al final puede enviar el pedido directo por WhatsApp con todos los productos y el total ya armado en el mensaje.

Al principio arranqué consumiendo productos desde una API externa (DummyJSON) con fetch, pero después decidí pasar todo a datos locales hardcodeados en el JS para tener control total sobre los productos, precios e imágenes de mi propia tienda, sin depender de un servicio externo que podía cambiar o caerse.

## Qué hice

- Armé la estructura completa del sitio: home, tienda, carrito, nosotros, contacto y políticas, todas conectadas entre sí.
- Hice el carrito de compras con persistencia en localStorage, para que no se pierda si el usuario cierra o recarga la página.
- Implementé el envío del pedido por WhatsApp: arma automáticamente un mensaje con el nombre del cliente, la fecha, el listado de productos con cantidades y precios, y el total.
- Agregué modales de detalle de producto (estilo Mercado Libre) con imagen, precio, descripción y botón para agregar al carrito.
- Hice el formulario de contacto con validación en JavaScript (campos requeridos y formato de email).
- Armé el menú responsive con hamburguesa para mobile.
- Agregué notificaciones tipo toast para reemplazar los alerts nativos.
- Saqué la dependencia de la API externa y pasé todos los productos a un array local, para no depender de servicios de terceros.
- Corregí varios bugs en el camino: rutas relativas rotas al llamar el script.js y las imágenes desde las páginas dentro de /pages/, un HTML duplicado que había quedado pegado dentro de tienda.html, ids repetidos, y links del footer que no andaban.

## Tecnologías utilizadas

- HTML5 (semántico)
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript ( sin frameworks)
  (utilice como apoyo Gemini y Claude IA)

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
