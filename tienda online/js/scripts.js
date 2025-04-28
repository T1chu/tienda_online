let carrito = []; // Arreglo para almacenar productos en el carrito

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
  const imagen = document.querySelector(`img[alt="${producto}"]`).src; // Obtiene la imagen del producto
  carrito.push({ producto, precio, imagen }); // Agrega producto, precio e imagen al array
  mostrarCarrito(); // Muestra el carrito actualizado
  mostrarAlertaAgregado(); // Muestra un mensaje que indica que se agregó
}

// Función para eliminar productos del carrito por su índice
function eliminarDelCarrito(index) {
  carrito.splice(index, 1); // Elimina el producto seleccionado
  mostrarCarrito(); // Actualiza la visualización del carrito
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = ''; // Limpia la lista antes de volver a llenarla

  let total = 0; // Inicializa el total en cero

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.imagen}" alt="${item.producto}" style="width:40px;height:40px;object-fit:cover;border-radius:5px;margin-right:8px;">
      ${item.producto} - $${item.precio}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `; // Muestra imagen, nombre, precio y botón eliminar
    lista.appendChild(li); // Agrega el item a la lista
    total += item.precio; // Suma los precios
  });

  // Actualiza el total y el contador
  document.getElementById('total').textContent = `Total: $${total}`;
  document.getElementById('contador-carrito').textContent = carrito.length;
}

// Función para abrir o cerrar el panel del carrito
function toggleCarrito() {
  const panel = document.getElementById('carrito-panel');
  panel.classList.toggle('abierto'); // Agrega o quita la clase 'abierto'
}

// Función para mostrar una alerta de que el producto fue agregado
function mostrarAlertaAgregado() {
  const alerta = document.createElement('div');
  alerta.className = 'alerta-agregado'; // Asigna una clase para el estilo
  alerta.textContent = '¡Producto agregado!';
  document.body.appendChild(alerta);

  setTimeout(() => {
    alerta.remove(); // Elimina la alerta después de 2 segundos
  }, 2000);
}

// Funciones para redirigir al enlace de pago de cada producto
function comprarProducto1() {
  const urlDePago1 = 'https://mpago.la/1jpNf9b';
  window.location.href = urlDePago1;
}

function comprarProducto2() {
  const urlDePago2 = 'https://mpago.la/1RkznFD';
  window.location.href = urlDePago2;
}

function comprarProducto3() {
  const urlDePago3 = 'https://mpago.la/1jYvk9y';
  window.location.href = urlDePago3;
}

function comprarProducto4() {
  const urlDePago4 = 'https://mpago.la/1LiCgVZ';
  window.location.href = urlDePago4;
}

function comprarProducto5() {
  const urlDePago5 = 'https://mpago.la/2eRShmd';
  window.location.href = urlDePago5;
}

// Función para comprar todo lo que hay en el carrito
function redirigirAMercadoPago() {
  const urlDePago = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=ID_DE_PREFERENCIA_TODO';
  window.location.href = urlDePago;
}
