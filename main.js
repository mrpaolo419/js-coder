// const form = document.getElementById("ingreso1");
// const tipo = document.getElementById("tipo");
// const precio = document.getElementById("precio");
// const color = document.getElementById("color");
// const contenedor = document.getElementById("lista");

// let guardarLista = [];

// const getRandomId = () => {
//     return Math.floor(1000 + Math.random() * 9000 ).toString();
// };

// form.addEventListener("submit", (e) => {
//     e.preventDefault();   
//     const id = getRandomId();
//     const nTipo = tipo.value;
//     const nPrecio = precio.value;
//     const nColor = color.value;
    
//     if (nTipo === "" || nPrecio ==="" || nColor ==="") {
//         alert("Por favor, completa todos los campos.");
//         return;
//     }
    
//     const producto = agregar(id, nTipo, nPrecio, nColor);
//     mandar(producto);
//     guardarLista.push(producto); // Agregar producto a guardarLista
//     guardar(guardarLista); // Guardar en localStorage
//     form.reset();
// });

// const agregar = (gId, gTipo, gPrecio, gColor) => {
//     return {
//         id: gId,
//         Tipo: gTipo,
//         Precio : gPrecio,
//         Color: gColor 
//     };
// };

// const mandar = (producto) => {
//     const div = document.createElement("div");
//     div.className = "productos";
//     div.id = `producto-${producto.id}`;
//     div.innerHTML = `
//         <div class="productos">
//             <h4>Tipo: ${producto.Tipo}</h4>
//             <p>Precio: ${producto.Precio}</p>
//             <p>Color: ${producto.Color}</p>
//             <button class="eliminar" id="${producto.id}">Eliminar</button>
//         </div>
//     `;
//     const boton = div.querySelector(".eliminar");
//     boton.addEventListener("click", () => {
//         div.remove();
//         eliminarProducto(producto.id); // Eliminar producto de guardarLista y localStorage
//     });
    
//     contenedor.appendChild(div);
// };

// const guardar = (lista) => {
//     localStorage.setItem("guardarLista", JSON.stringify(lista));
// };

// const cargarDesdeLocalStorage = () => {
//     const datos = localStorage.getItem("guardarLista");
//     return datos ? JSON.parse(datos) : [];
// };

// guardarLista = cargarDesdeLocalStorage();

// // Mostrar productos guardados desde localStorage al cargar la página
// guardarLista.forEach(producto => mandar(producto));

// const eliminarProducto = (id) => {
//     guardarLista = guardarLista.filter(producto => producto.id !== id);
//     guardar(guardarLista); // Actualizar localStorage
// };
