// orvio — script/script.js

// catalogo de productos.

const PRODUCTOS = [
  // inicio (6 card)
  {
    id: 1,
    nombre: "Auriculares Bluetooth inalámbricos",
    categoria: "Auriculares",
    precio: 48900,
    img: "auriculares.jpg",
    descripcion:
      "Auriculares inalámbricos con cancelación de ruido activa, hasta 30 hs de batería y conexión Bluetooth 5.3. Ideales para música, llamadas y videollamadas.",
    badge: null,
    specs: {
      Conectividad: "Bluetooth 5.3",
      Batería: "30 hs",
      "Cancelación de ruido": "Activa",
      Garantía: "12 meses",
    },
  },
  {
    id: 2,
    nombre: "Smartwatch con monitor de salud",
    categoria: "Smartwatches",
    precio: 89900,
    img: "relojes.jpg",
    descripcion:
      "Reloj inteligente con pantalla AMOLED, GPS integrado, monitor de frecuencia cardíaca, SpO2 y notificaciones desde el celular. Resistente al agua.",
    badge: null,
    specs: {
      Pantalla: 'AMOLED 1.4"',
      GPS: "Integrado",
      Resistencia: "5 ATM",
      Batería: "7 días",
    },
  },
  {
    id: 3,
    nombre: "iPhone 15 — 128 GB",
    categoria: "Smartphones",
    precio: 1349900,
    img: "iphone.png",
    descripcion:
      "Chip A16 Bionic, cámara principal de 48 MP, pantalla Super Retina XDR de 6.1 pulgadas y conector USB-C. La mejor experiencia iOS en tu mano.",
    badge: "Últimas unidades",
    specs: {
      Almacenamiento: "128 GB",
      Pantalla: '6.1" OLED',
      Cámara: "48 MP",
      Chip: "A16 Bionic",
    },
  },
  {
    id: 4,
    nombre: 'Notebook 15.6" — Intel i5 / 16 GB RAM',
    categoria: "Notebooks",
    precio: 749900,
    img: "notebook.png",
    descripcion:
      "Laptop con procesador Intel Core i5 de 12.ª generación, 16 GB de RAM DDR4 y SSD de 512 GB. Pantalla Full HD antirreflejo, ideal para trabajo y estudio.",
    badge: null,
    specs: {
      Procesador: "Intel Core i5",
      RAM: "16 GB DDR4",
      Almacenamiento: "512 GB SSD",
      Pantalla: '15.6" Full HD',
    },
  },
  {
    id: 5,
    nombre: 'Smart TV 50" 4K UHD',
    categoria: "Televisores",
    precio: 529900,
    img: "smartv.png",
    descripcion:
      "Televisor inteligente 4K con Android TV, Wi-Fi integrado, HDR10+ y acceso a todas las plataformas de streaming. Panel LED de alta luminosidad.",
    badge: null,
    specs: {
      Resolución: "4K UHD",
      Sistema: "Android TV",
      HDR: "HDR10+",
      Conectividad: "Wi-Fi / HDMI x3",
    },
  },
  {
    id: 6,
    nombre: "Kit de accesorios para celular",
    categoria: "Accesorios",
    precio: 12900,
    img: "accesorios.png",
    descripcion:
      "Kit completo con funda protectora, vidrio templado, cable USB-C y soporte de escritorio. Compatible con la mayoría de smartphones actuales.",
    badge: null,
    specs: {
      Incluye: "Funda + vidrio + cable + soporte",
      Material: "TPU resistente",
      Compatible: "Universal",
      Garantía: "6 meses",
    },
  },

  // tienda (productos adicionales)
  {
    id: 7,
    nombre: "Auriculares in-ear premium",
    categoria: "Auriculares",
    precio: 32900,
    img: "auricular1.png",
    descripcion:
      "Auriculares in-ear con micrófono incorporado, aislación pasiva de ruido y drivers de 10 mm. Cable trenzado antienredos.",
    badge: null,
    specs: {
      Driver: "10 mm",
      Micrófono: "Incorporado",
      Cable: "Trenzado 1.2 m",
      Conector: "3.5 mm",
    },
  },
  {
    id: 8,
    nombre: "Smartwatch deportivo — GPS + Pulsómetro",
    categoria: "Smartwatches",
    precio: 129900,
    img: "reloj1.png",
    descripcion:
      "Reloj deportivo con más de 100 modos de entrenamiento, GPS dual, oxímetro y batería de hasta 14 días. Correa intercambiable.",
    badge: null,
    specs: {
      Batería: "14 días",
      GPS: "Dual",
      Deportes: "+100 modos",
      Resistencia: "IP68",
    },
  },
  {
    id: 9,
    nombre: "iPhone 15 Pro — 256 GB",
    categoria: "Smartphones",
    precio: 1849900,
    img: "iphone1.png",
    descripcion:
      "Chip A17 Pro, cámara de 48 MP con zoom óptico 5x, cuerpo de titanio y pantalla ProMotion de 120 Hz.",
    badge: "Últimas unidades",
    specs: {
      Almacenamiento: "256 GB",
      Pantalla: '6.1" ProMotion 120Hz',
      Cámara: "48 MP + Zoom 5x",
      Chip: "A17 Pro",
    },
  },
  {
    id: 10,
    nombre: "Notebook gamer — RTX 4060 / 32 GB RAM",
    categoria: "Notebooks",
    precio: 1590000,
    img: "notebook1.png",
    descripcion:
      "Laptop gamer con GPU NVIDIA RTX 4060, Intel Core i7, 32 GB DDR5 y SSD NVMe de 1 TB. Pantalla 144 Hz.",
    badge: null,
    specs: {
      GPU: "RTX 4060 8GB",
      CPU: "Intel Core i7",
      RAM: "32 GB DDR5",
      Pantalla: '15.6" 144Hz',
    },
  },
  {
    id: 11,
    nombre: 'Smart TV 43" Full HD',
    categoria: "Televisores",
    precio: 329900,
    img: "smartv-1.jpg",
    descripcion:
      "Televisor Full HD con Roku TV integrado, acceso directo a Netflix, Disney+ y YouTube. Tres entradas HDMI y control de voz.",
    badge: null,
    specs: {
      Resolución: "Full HD 1080p",
      Sistema: "Roku TV",
      Entradas: "HDMI x3 / USB x2",
      Control: "Voz incluido",
    },
  },
  {
    id: 12,
    nombre: "Parlante Bluetooth portátil",
    categoria: "Parlantes",
    precio: 44900,
    img: "parlante1.png",
    descripcion:
      "Parlante portátil resistente al agua IPX7, sonido 360° de 20W, batería de 12 hs y micrófono para llamadas.",
    badge: null,
    specs: {
      Potencia: "20W RMS",
      Batería: "12 hs",
      Resistencia: "IPX7",
      Bluetooth: "5.0",
    },
  },
  {
    id: 13,
    nombre: "iPad 10.ª generación — 64 GB Wi-Fi",
    categoria: "Tablets",
    precio: 619900,
    img: "ipad1.png",
    descripcion:
      "iPad con chip A14 Bionic, pantalla Liquid Retina de 10.9 pulgadas, cámara de 12 MP y conector USB-C.",
    badge: null,
    specs: {
      Chip: "A14 Bionic",
      Pantalla: '10.9" Liquid Retina',
      Almacenamiento: "64 GB",
      Cámara: "12 MP",
    },
  },
  {
    id: 14,
    nombre: 'Tablet Android 10" — 4 GB / 128 GB',
    categoria: "Tablets",
    precio: 189900,
    img: "tablet.jpg",
    descripcion:
      "Tablet Full HD de 10 pulgadas, procesador octa-core, 4 GB de RAM y 128 GB de almacenamiento.",
    badge: null,
    specs: {
      Pantalla: '10" Full HD',
      RAM: "4 GB",
      Almacenamiento: "128 GB",
      Batería: "6000 mAh",
    },
  },
  {
    id: 15,
    nombre: "Mouse inalámbrico ergonómico",
    categoria: "Accesorios",
    precio: 21900,
    img: "mouse1.png",
    descripcion:
      "Mouse inalámbrico con DPI ajustable 800-3200, receptor USB nano y diseño ergonómico para uso prolongado.",
    badge: null,
    specs: {
      DPI: "800 / 1600 / 3200",
      Conexión: "USB 2.4 GHz",
      Batería: "12 meses (AAA)",
      Botones: "6 botones",
    },
  },
  {
    id: 16,
    nombre: "Teclado mecánico gaming — Switch Red",
    categoria: "Accesorios",
    precio: 87900,
    img: "teclado1.png",
    descripcion:
      "Teclado mecánico full-size con switches red lineales, retroiluminación RGB por tecla y anti-ghosting N-Key rollover.",
    badge: null,
    specs: {
      Switch: "Red (Lineal)",
      Retroiluminación: "RGB por tecla",
      "Anti-ghosting": "N-Key Rollover",
      Cable: "USB-C desmontable",
    },
  },
  {
    id: 17,
    nombre: "Funda protectora para iPhone",
    categoria: "Accesorios",
    precio: 8900,
    img: "funda1.jpg",
    descripcion:
      "Funda de TPU resistente con bordes reforzados, compatible con iPhone 13/14/15. Protección contra caídas de hasta 1.5 m.",
    badge: null,
    specs: {
      Material: "TPU + PC",
      Compatible: "iPhone 13 / 14 / 15",
      Protección: "Caídas hasta 1.5 m",
      Peso: "28 g",
    },
  },
  {
    id: 18,
    nombre: "Proyector portátil Full HD",
    categoria: "Otros",
    precio: 229900,
    img: "proyector.jpg",
    descripcion:
      "Proyector compacto Full HD nativo, 350 lúmenes, altavoz integrado de 5W, entrada HDMI y USB.",
    badge: null,
    specs: {
      Resolución: "Full HD 1080p",
      Luminosidad: "350 ANSI lúmenes",
      Audio: "Altavoz 5W",
      Entradas: "HDMI / USB / AUX",
    },
  },
];

// la ruta de imagenes :
// se calcula al momento de renderizar,no al cargar el archivo.

function getImgPath(nombreArchivo) {
  var enPages = window.location.pathname.indexOf("/pages/") !== -1;
  return (enPages ? "../img/" : "img/") + nombreArchivo;
}

// renderizar grillas.

function renderizarProductos() {
  var homeGrid = document.getElementById("homeGrid");
  if (homeGrid) {
    homeGrid.innerHTML = PRODUCTOS.slice(0, 6).map(crearCardHTML).join("");
  }

  var storeGrid = document.getElementById("storeGrid");
  if (storeGrid) {
    storeGrid.innerHTML = PRODUCTOS.map(crearCardHTML).join("");
  }

  setupFilters();
}

function crearCardHTML(p) {
  var ruta = getImgPath(p.img);
  var badge = p.badge ? '<span class="card-badge">' + p.badge + "</span>" : "";
  return (
    '<div class="product-card" data-cat="' +
    p.categoria +
    '">' +
    '<div class="card-img-wrap">' +
    '<img src="' +
    ruta +
    '" alt="' +
    p.nombre +
    '" loading="lazy" />' +
    badge +
    "</div>" +
    '<div class="card-body">' +
    '<span class="card-category">' +
    p.categoria +
    "</span>" +
    '<div class="card-title">' +
    p.nombre +
    "</div>" +
    "<div>" +
    '<span class="card-price">' +
    formatPeso(p.precio) +
    "</span>" +
    "</div>" +
    '<div class="card-actions">' +
    '<button class="btn-card-primary" onclick="addToCart(PRODUCTOS[' +
    (p.id - 1) +
    '])">' +
    '<i class="fa-solid fa-bag-shopping"></i> Agregar' +
    "</button>" +
    '<button class="btn-card-outline" onclick="openModal(' +
    p.id +
    ')">Ver detalle</button>' +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

// utilidades.

function formatPeso(n) {
  return (
    "$" +
    n.toLocaleString("es-AR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  );
}

// carrito.

var CART_KEY = "carritoDeCompras";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(producto) {
  var cart = getCart();
  var idx = cart.findIndex(function (i) {
    return i.id === producto.id;
  });
  if (idx > -1) {
    cart[idx].cantidad++;
  } else {
    cart.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      img: producto.img,
      cantidad: 1,
    });
  }
  saveCart(cart);
  updateCartBadge();
  showToast("✓ " + producto.nombre + " agregado al carrito");
}

function removeFromCart(id) {
  saveCart(
    getCart().filter(function (i) {
      return i.id !== id;
    }),
  );
  updateCartBadge();
  renderCartSidebar();
}

function changeQty(id, delta) {
  var cart = getCart();
  var idx = cart.findIndex(function (i) {
    return i.id === id;
  });
  if (idx === -1) return;
  cart[idx].cantidad = Math.max(1, cart[idx].cantidad + delta);
  saveCart(cart);
  renderCartSidebar();
}

function clearCart() {
  saveCart([]);
  updateCartBadge();
  renderCartSidebar();
}

function updateCartBadge() {
  var total = getCart().reduce(function (s, i) {
    return s + i.cantidad;
  }, 0);
  document.querySelectorAll(".cart-count").forEach(function (el) {
    el.textContent = total;
    el.style.display = total > 0 ? "flex" : "none";
  });
}

// sidebar carrito.

function openCart() {
  document.getElementById("cartOverlay") &&
    document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartSidebar") &&
    document.getElementById("cartSidebar").classList.add("open");
  renderCartSidebar();
}

function closeCart() {
  document.getElementById("cartOverlay") &&
    document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartSidebar") &&
    document.getElementById("cartSidebar").classList.remove("open");
}

function renderCartSidebar() {
  var cart = getCart();
  var itemsEl = document.getElementById("cartItems");
  var footerEl = document.getElementById("cartFooter");
  if (!itemsEl) return;

  if (cart.length === 0) {
    var enPages = window.location.pathname.indexOf("/pages/") !== -1;
    itemsEl.innerHTML =
      '<div class="cart-empty">' +
      '<i class="fa-solid fa-cart-shopping"></i>' +
      "<p>Tu carrito está vacío</p>" +
      '<a href="' +
      (enPages ? "" : "pages/") +
      'tienda.html" style="color:var(--accent);font-size:.85rem;">Ver productos →</a>' +
      "</div>";
    if (footerEl) footerEl.style.display = "none";
    return;
  }

  if (footerEl) footerEl.style.display = "flex";

  itemsEl.innerHTML = cart
    .map(function (item) {
      return (
        '<div class="cart-item" data-id="' +
        item.id +
        '">' +
        '<div class="cart-item-img">' +
        '<img src="' +
        getImgPath(item.img) +
        '" alt="' +
        item.nombre +
        '">' +
        "</div>" +
        "<div>" +
        '<div class="cart-item-name">' +
        item.nombre +
        "</div>" +
        '<div class="cart-item-price">' +
        formatPeso(item.precio * item.cantidad) +
        "</div>" +
        '<div class="cart-item-qty">' +
        '<button class="qty-btn" onclick="changeQty(' +
        item.id +
        ',-1)">−</button>' +
        '<span class="qty-val">' +
        item.cantidad +
        "</span>" +
        '<button class="qty-btn" onclick="changeQty(' +
        item.id +
        ',1)">+</button>' +
        "</div>" +
        "</div>" +
        '<button class="cart-remove-btn" onclick="removeFromCart(' +
        item.id +
        ')">' +
        '<i class="fa-solid fa-xmark"></i>' +
        "</button>" +
        "</div>"
      );
    })
    .join("");

  var subtotal = cart.reduce(function (s, i) {
    return s + i.precio * i.cantidad;
  }, 0);
  document.getElementById("cartSubtotal").textContent = formatPeso(subtotal);
  document.getElementById("cartTotal").textContent = formatPeso(subtotal);
}

// modal detalle.

function openModal(idProducto) {
  var p = PRODUCTOS.find(function (x) {
    return x.id === idProducto;
  });
  if (!p) return;
  var m = document.getElementById("productModal");
  if (!m) return;

  m.querySelector("#modalImg").src = getImgPath(p.img);
  m.querySelector("#modalImg").alt = p.nombre;
  m.querySelector("#modalCategory").textContent = p.categoria;
  m.querySelector("#modalTitle").textContent = p.nombre;
  m.querySelector("#modalPrice").textContent = formatPeso(p.precio);
  m.querySelector("#modalDesc").textContent = p.descripcion;

  m.querySelector("#modalSpecs").innerHTML = Object.entries(p.specs)
    .map(function (entry) {
      return (
        '<div class="modal-spec-row">' +
        '<span class="modal-spec-label">' +
        entry[0] +
        "</span>" +
        '<span class="modal-spec-val">' +
        entry[1] +
        "</span>" +
        "</div>"
      );
    })
    .join("");

  m.querySelector("#modalAddBtn").onclick = function () {
    addToCart(p);
    closeModal();
  };
  m.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  var modal = document.getElementById("productModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// toast

function showToast(msg) {
  var container = document.getElementById("toastContainer");
  if (!container) return;
  var el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + msg;
  container.appendChild(el);
  setTimeout(function () {
    el.remove();
  }, 3200);
}

// navbar mobil

function toggleMobileMenu() {
  var m = document.getElementById("mobileMenu");
  if (m) m.classList.toggle("open");
}

// pedido whatsapp

function enviarWhatsApp() {
  var cart = getCart();
  if (cart.length === 0) {
    showToast("El carrito está vacío");
    return;
  }

  var nombreEl = document.getElementById("waNombre");
  var nombre =
    nombreEl && nombreEl.value.trim() ? nombreEl.value.trim() : "Cliente";
  var fecha = new Date().toLocaleString("es-AR", {
    dateStyle: "short",
    timeStyle: "short",
  });
  var items = cart
    .map(function (i) {
      return (
        "- " +
        i.cantidad +
        "x " +
        i.nombre +
        " " +
        formatPeso(i.precio * i.cantidad)
      );
    })
    .join("\n");
  var total = cart.reduce(function (s, i) {
    return s + i.precio * i.cantidad;
  }, 0);

  var msg =
    "*ORVIO - Pedido Online*\n" +
    "---------------------------\n" +
    "*Cliente:* " +
    nombre +
    "\n" +
    "*Fecha:* " +
    fecha +
    "\n\n" +
    "*Detalle del pedido:*\n" +
    items +
    "\n\n" +
    "---------------------------\n" +
    "*TOTAL: " +
    formatPeso(total) +
    "*\n\n" +
    "En un instante armaremos su pedido. Muchas gracias!";

  window.open(
    "https://wa.me/5491162506608?text=" + encodeURIComponent(msg),
    "_blank",
  );
}

// newsletter.

function handleNewsletter(e) {
  e.preventDefault();

  var input = e.target.querySelector("input[type=email]");
  var email = input ? input.value.trim() : "";

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showToast("Ingresá tu email para suscribirte");
    return;
  }

  if (!emailRegex.test(email)) {
    showToast("Ingresá un email válido");
    return;
  }

  showToast("¡Te suscribiste exitosamente!");
  input.value = "";
}

// filtros de tienda

function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      var cat = btn.dataset.cat;
      document.querySelectorAll(".product-card").forEach(function (card) {
        card.style.display =
          cat === "todos" || card.dataset.cat === cat ? "" : "none";
      });
    });
  });
}

// init

document.addEventListener("DOMContentLoaded", function () {
  updateCartBadge();
  renderizarProductos();

  var modal = document.getElementById("productModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) closeModal();
    });
  }

  var overlay = document.getElementById("cartOverlay");
  if (overlay) overlay.addEventListener("click", closeCart);

  var form = document.querySelector(".newsletter-form");
  if (form) form.addEventListener("submit", handleNewsletter);

  // Marcar nav activo
  var path = window.location.pathname;
  document
    .querySelectorAll(".nav-links a, .mobile-menu a")
    .forEach(function (a) {
      var href = a.getAttribute("href");
      if (href && path.indexOf(href.replace(/^\.\.\//, "")) !== -1) {
        a.classList.add("active");
      }
    });
});
