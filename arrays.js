const menus = [
//regimen general
    { id: 1, entrada: 'Sopa', principal: 'Arroz con Pollo', postre: 'Fruta', regimen:'general'},
    { id: 2, entrada: 'Ensalada', principal: 'Milanesa con Puré de Papa', postre: 'Flan', regimen:'general'},
    { id: 3, entrada: 'Bruschetta', principal: 'Spaghetti Bolognese', postre: 'Helado', regimen:'general'},
    { id: 4, entrada: 'Gazpacho', principal: 'Paella', postre: 'Tarta de Santiago', regimen:'general'},
    { id: 5, entrada: 'Hummus con Vegetales', principal: 'Falafel con Ensalada', postre: 'Baklava', regimen:'general'},
    { id: 6, entrada: 'Paté de Hígado', principal: 'Boeuf Bourguignon', postre: 'Crème Brûlée', regimen:'general'},
    { id: 7, entrada: 'Rollos de Primavera', principal: 'Pollo Teriyaki con Arroz', postre: 'Mochi', regimen:'general'},
    { id: 8, entrada: 'Ceviche', principal: 'Lomo Saltado', postre: 'Suspiro Limeño', regimen:'general'},
    { id: 9, entrada: 'Caprese', principal: 'Pizza Margherita', postre: 'Tiramisú', regimen:'general'},
    { id: 10, entrada: 'Sopa de Cebolla', principal: 'Quiche Lorraine', postre: 'Éclair', regimen:'general'},
    { id: 11, entrada: 'Antipasto', principal: 'Lasagna', postre: 'Panna Cotta', regimen:'general'},
    { id: 12, entrada: 'Tzatziki con Pita', principal: 'Moussaka', postre: 'Baklava Griega', regimen:'general'},
    { id: 13, entrada: 'Tabbouleh', principal: 'Kebab de Cordero', postre: 'Mahalabia', regimen:'general'},
    { id: 14, entrada: 'Gyoza', principal: 'Ramen', postre: 'Dorayaki', regimen:'general'},
    { id: 15, entrada: 'Camarones al Ajillo', principal: 'Paella de Mariscos', postre: 'Arroz con Leche', regimen:'general'},
    { id: 16, entrada: 'Ensalada César', principal: 'Hamburguesa con Papas Fritas', postre: 'Brownie', regimen:'general'},

    { id: 1, entrada: 'Sopa', principal: 'Arroz con Pollo', postre: 'Fruta', regimen: 'Hepatoprotector' },
    { id: 2, entrada: 'Ensalada', principal: 'Milaneza con Puré', postre: 'Flan', regimen: 'Hepatoprotector' },
    { id: 3, entrada: 'Crema de Calabaza', principal: 'Pechuga con Puré de Coliflor', postre: 'Yogur Natural', regimen: 'Hepatoprotector' },
    { id: 4, entrada: 'Ensalada de Pepino', principal: 'Pechuga con Arroz Integral', postre: 'Gelatina', regimen: 'Hepatoprotector' },
    { id: 5, entrada: 'Sopa de Verduras', principal: 'Pescado con Verduras', postre: 'Mousse de Mango', regimen: 'Hepatoprotector' },
    { id: 6, entrada: 'Crema de Espárragos', principal: 'Pollo con Arroz Integral', postre: 'Compota de Manzana', regimen: 'Hepatoprotector' },
    { id: 7, entrada: 'Ensalada de Remolacha', principal: 'Pechuga con Puré de Zanahorias', postre: 'Yogur con Frutas', regimen: 'Hepatoprotector' },
    { id: 8, entrada: 'Sopa de Apio', principal: 'Filete de Pavo con Arroz', postre: 'Pera al Horno', regimen: 'Hepatoprotector' },
    { id: 9, entrada: 'Ensalada de Espinacas', principal: 'Pollo con Arroz Integral', postre: 'Gelatina', regimen: 'Hepatoprotector' },
    { id: 10, entrada: 'Crema de Calabaza', principal: 'Pescado con Puré de Coliflor', postre: 'Yogur Natural', regimen: 'Hepatoprotector' },
    { id: 11, entrada: 'Sopa de Verduras', principal: 'Pechuga con Arroz Integral', postre: 'Fruta Fresca', regimen: 'Hepatoprotector' },
    { id: 12, entrada: 'Ensalada de Pepino', principal: 'Filete de Pollo con Verduras', postre: 'Mousse de Frutas', regimen: 'Hepatoprotector' },
    { id: 13, entrada: 'Crema de Espárragos', principal: 'Pollo con Puré de Zanahorias', postre: 'Yogur con Frutos Rojos', regimen: 'Hepatoprotector' },
    { id: 14, entrada: 'Sopa de Apio', principal: 'Pechuga con Puré de Calabaza', postre: 'Gelatina', regimen: 'Hepatoprotector' },
    { id: 15, entrada: 'Ensalada de Tomate', principal: 'Pescado con Arroz', postre: 'Mousse de Frutas', regimen: 'Hepatoprotector' },
    { id: 16, entrada: 'Crema de Calabacín', principal: 'Pollo con Verduras', postre: 'Fruta Cocida', regimen: 'Hepatoprotector' },

    { id: 1, entrada: 'Ensalada de Espinacas', principal: 'Pechuga con Arroz Integral', postre: 'Yogur Natural', regimen: 'Hipertenso' },
    { id: 2, entrada: 'Sopa de Calabaza', principal: 'Pescado al Vapor', postre: 'Fruta Fresca', regimen: 'Hipertenso' },
    { id: 3, entrada: 'Ensalada de Pepino', principal: 'Pechuga con Puré de Calabaza', postre: 'Gelatina Sin Azúcar', regimen: 'Hipertenso' },
    { id: 4, entrada: 'Crema de Apio', principal: 'Lomo de Cerdo con Brócoli', postre: 'Compota de Manzana', regimen: 'Hipertenso' },
    { id: 5, entrada: 'Ensalada de Remolacha', principal: 'Pollo con Arroz Integral', postre: 'Fruta Cocida', regimen: 'Hipertenso' },
    { id: 6, entrada: 'Sopa de Verduras', principal: 'Pescado al Horno', postre: 'Yogur Natural', regimen: 'Hipertenso' },
    { id: 7, entrada: 'Ensalada de Col', principal: 'Pechuga con Verduras', postre: 'Pudín de Chía', regimen: 'Hipertenso' },
    { id: 8, entrada: 'Crema de Calabacín', principal: 'Filete de Pavo con Puré', postre: 'Gelatina de Frutas', regimen: 'Hipertenso' },
    { id: 9, entrada: 'Sopa de Apio', principal: 'Pechuga con Espárragos', postre: 'Yogur con Miel', regimen: 'Hipertenso' },
    { id: 10, entrada: 'Ensalada de Pepino', principal: 'Pescado con Arroz Integral', postre: 'Yogur Natural', regimen: 'Hipertenso' },
    { id: 11, entrada: 'Sopa de Espárragos', principal: 'Lomo de Cerdo con Puré', postre: 'Tarta de Manzana', regimen: 'Hipertenso' },
    { id: 12, entrada: 'Ensalada de Espinacas', principal: 'Pechuga con Arroz Integral', postre: 'Fruta Fresca', regimen: 'Hipertenso' },
    { id: 13, entrada: 'Crema de Calabaza', principal: 'Pescado con Puré de Coliflor', postre: 'Mousse de Mango', regimen: 'Hipertenso' },
    { id: 14, entrada: 'Ensalada de Col', principal: 'Pechuga con Verduras', postre: 'Yogur con Frutas', regimen: 'Hipertenso' },
    { id: 15, entrada: 'Sopa de Verduras', principal: 'Filete de Pollo con Arroz', postre: 'Mousse de Frutas', regimen: 'Hipertenso' },
    { id: 16, entrada: 'Ensalada de Tomate', principal: 'Pescado con Espárragos', postre: 'Pera al Horno', regimen: 'Hipertenso' },
    
    { id: 1, entrada: 'Ensalada de Espinacas', principal: 'Pollo con Arroz Integral', postre: 'Yogur Natural', regimen: 'Diabéticos' },
    { id: 2, entrada: 'Sopa de Calabaza', principal: 'Pescado al Vapor', postre: 'Gelatina Sin Azúcar', regimen: 'Diabéticos' },
    { id: 3, entrada: 'Ensalada de Pepino', principal: 'Pechuga de Pavo con Puré', postre: 'Compota de Manzana', regimen: 'Diabéticos' },
    { id: 4, entrada: 'Crema de Apio', principal: 'Lomo de Cerdo con Brócoli', postre: 'Fruta Cocida', regimen: 'Diabéticos' },
    { id: 5, entrada: 'Ensalada de Remolacha', principal: 'Pollo a la Parrilla', postre: 'Yogur con Miel', regimen: 'Diabéticos' },
    { id: 6, entrada: 'Sopa de Verduras', principal: 'Pescado al Horno', postre: 'Pudín de Chía', regimen: 'Diabéticos' },
    { id: 7, entrada: 'Ensalada de Col', principal: 'Pechuga con Quinoa', postre: 'Yogur Natural con Frutos Rojos', regimen: 'Diabéticos' },
    { id: 8, entrada: 'Crema de Calabacín', principal: 'Filete de Pavo con Puré', postre: 'Gelatina Sin Azúcar', regimen: 'Diabéticos' },
    { id: 9, entrada: 'Sopa de Apio', principal: 'Pechuga con Espárragos', postre: 'Fruta Cocida', regimen: 'Diabéticos' },
    { id: 10, entrada: 'Ensalada de Pepino', principal: 'Pescado al Vapor', postre: 'Yogur Natural', regimen: 'Diabéticos' },
    { id: 11, entrada: 'Sopa de Espárragos', principal: 'Pollo con Verduras', postre: 'Compota de Pera', regimen: 'Diabéticos' },
    { id: 12, entrada: 'Ensalada de Espinacas', principal: 'Pechuga con Arroz Integral', postre: 'Fruta Fresca', regimen: 'Diabéticos' },
    { id: 13, entrada: 'Crema de Calabaza', principal: 'Pescado con Puré de Coliflor', postre: 'Mousse de Mango', regimen: 'Diabéticos' },
    { id: 14, entrada: 'Ensalada de Col', principal: 'Pechuga con Verduras', postre: 'Yogur con Frutas', regimen: 'Diabéticos' },
    { id: 15, entrada: 'Sopa de Verduras', principal: 'Filete de Pollo con Arroz', postre: 'Mousse de Frutas', regimen: 'Diabéticos' },
    { id: 16, entrada: 'Ensalada de Tomate', principal: 'Pescado con Espárragos', postre: 'Pera al Horno', regimen: 'Diabéticos' },

    { id: 1, entrada: 'Sopa de Calabaza', principal: 'Pollo con Arroz Integral', postre: 'Fruta', regimen: 'Celíaco' },
    { id: 2, entrada: 'Ensalada de Pepino', principal: 'Pechuga con Puré de Calabaza', postre: 'Gelatina Sin Azúcar', regimen: 'Celíaco' },
    { id: 3, entrada: 'Crema de Apio', principal: 'Lomo de Cerdo con Brócoli', postre: 'Compota de Manzana', regimen: 'Celíaco' },
    { id: 4, entrada: 'Ensalada de Remolacha', principal: 'Pollo a la Parrilla', postre: 'Fruta Cocida', regimen: 'Celíaco' },
    { id: 5, entrada: 'Sopa de Verduras', principal: 'Pescado al Horno', postre: 'Yogur con Miel', regimen: 'Celíaco' },
    { id: 6, entrada: 'Crema de Calabacín', principal: 'Filete de Pavo con Puré', postre: 'Gelatina Sin Azúcar', regimen: 'Celíaco' },
    { id: 7, entrada: 'Ensalada de Col', principal: 'Pechuga con Quinoa', postre: 'Yogur Natural', regimen: 'Celíaco' },
    { id: 8, entrada: 'Sopa de Apio', principal: 'Pechuga con Espárragos', postre: 'Fruta Cocida', regimen: 'Celíaco' },
    { id: 9, entrada: 'Ensalada de Espinacas', principal: 'Pechuga con Arroz Integral', postre: 'Pudín de Chía', regimen: 'Celíaco' },
    { id: 10, entrada: 'Sopa de Calabaza', principal: 'Pescado al Vapor', postre: 'Fruta Fresca', regimen: 'Celíaco' },
    { id: 11, entrada: 'Ensalada de Pepino', principal: 'Pollo con Puré', postre: 'Gelatina de Frutas', regimen: 'Celíaco' },
    { id: 12, entrada: 'Crema de Apio', principal: 'Lomo de Cerdo con Brócoli', postre: 'Compota de Manzana', regimen: 'Celíaco' },
    { id: 13, entrada: 'Ensalada de Remolacha', principal: 'Pollo a la Parrilla', postre: 'Yogur Natural', regimen: 'Celíaco' },
    { id: 14, entrada: 'Sopa de Verduras', principal: 'Pescado al Horno', postre: 'Pera al Horno', regimen: 'Celíaco' },
    { id: 15, entrada: 'Crema de Calabacín', principal: 'Filete de Pavo con Puré', postre: 'Fruta Cocida', regimen: 'Celíaco' },
    { id: 16, entrada: 'Ensalada de Col', principal: 'Pechuga con Quinoa', postre: 'Yogur con Miel', regimen: 'Celíaco' },

    { id: 1, entrada: 'Sopa de Verduras', principal: 'Arroz Integral con Legumbres', postre: 'Fruta', regimen: 'Vegetariano' },
    { id: 2, entrada: 'Ensalada Mixta', principal: 'Pasta con Verduras', postre: 'Yogur Natural', regimen: 'Vegetariano' },
    { id: 3, entrada: 'Crema de Calabacín', principal: 'Bowl de Quinoa', postre: 'Pudín de Chía', regimen: 'Vegetariano' },
    { id: 4, entrada: 'Ensalada de Pepino', principal: 'Tacos de Frijoles', postre: 'Gelatina de Frutas', regimen: 'Vegetariano' },
    { id: 5, entrada: 'Sopa de Espárragos', principal: 'Pasta Integral con Verduras', postre: 'Mousse de Mango', regimen: 'Vegetariano' },
    { id: 6, entrada: 'Ensalada de Col', principal: 'Tacos de Frijoles con Arroz', postre: 'Yogur con Frutos Rojos', regimen: 'Vegetariano' },
    { id: 7, entrada: 'Crema de Zanahoria', principal: 'Ensalada de Garbanzos', postre: 'Fruta Cocida', regimen: 'Vegetariano' },
    { id: 8, entrada: 'Ensalada de Tomate', principal: 'Pasta con Salsa de Verduras', postre: 'Mousse de Frutas', regimen: 'Vegetariano' },
    { id: 9, entrada: 'Sopa de Apio', principal: 'Arroz Integral con Verduras', postre: 'Yogur Natural', regimen: 'Vegetariano' },
    { id: 10, entrada: 'Ensalada de Espinacas', principal: 'Bowl de Quinoa con Verduras', postre: 'Gelatina de Frutas', regimen: 'Vegetariano' },
    { id: 11, entrada: 'Crema de Calabaza', principal: 'Tacos de Frijoles con Arroz', postre: 'Fruta Fresca', regimen: 'Vegetariano' },
    { id: 12, entrada: 'Ensalada de Pepino', principal: 'Pasta Integral con Salsa de Tomate', postre: 'Yogur con Miel', regimen: 'Vegetariano' },
    { id: 13, entrada: 'Sopa de Espárragos', principal: 'Ensalada de Garbanzos', postre: 'Pudín de Chía', regimen: 'Vegetariano' },
    { id: 14, entrada: 'Ensalada de Col Rizada', principal: 'Arroz Integral con Verduras', postre: 'Mousse de Mango', regimen: 'Vegetariano' },
    { id: 15, entrada: 'Crema de Zanahoria', principal: 'Tacos de Frijoles con Arroz', postre: 'Fruta Cocida', regimen: 'Vegetariano' },
    { id: 16, entrada: 'Ensalada de Tomate', principal: 'Pasta con Verduras al Horno', postre: 'Pudín de Chía', regimen: 'Vegetariano' }
];


const empleados = [
// Cocina
{ id: 1001, nombre: 'Juan Perez', categoria: 'cocina', turno: 'mañana', imagen: './/imagenes/cocina.png' },
{ id: 1002, nombre: 'Maria Garcia', categoria: 'cocina', turno: 'mañana', imagen: './imagenes/cocina.png' },
{ id: 1003, nombre: 'Carlos Fernandez', categoria: 'cocina', turno: 'mañana', imagen: './imagenes/cocina.png' },
{ id: 1004, nombre: 'Ana Martinez', categoria: 'cocina', turno: 'mañana', imagen: './imagenes/cocina.png' },
{ id: 1005, nombre: 'Luis Rodriguez', categoria: 'cocina', turno: 'mañana', imagen: './imagenes/cocina.png' },
{ id: 1006, nombre: 'Sofia Lopez', categoria: 'cocina', turno: 'tarde', imagen: './imagenes/cocina.png' },
{ id: 1007, nombre: 'Miguel Gonzalez', categoria: 'cocina', turno: 'tarde', imagen: './imagenes/cocina.png' },
{ id: 1008, nombre: 'Laura Fernandez', categoria: 'cocina', turno: 'tarde', imagen: './imagenes/cocina.png' },

// Camareros
{ id: 2001, nombre: 'Pedro Sanchez', categoria: 'camarero', turno: 'mañana', imagen: './imagenes/camareros.png' },
{ id: 2002, nombre: 'Lucia Ramirez', categoria: 'camarero', turno: 'mañana', imagen: './imagenes/camareros.png' },
{ id: 2003, nombre: 'Javier Torres', categoria: 'camarero', turno: 'mañana', imagen: './imagenes/camareros.png' },
{ id: 2004, nombre: 'Laura Diaz', categoria: 'camarero', turno: 'mañana', imagen: './imagenes/camareros.png' },
{ id: 2005, nombre: 'Raul Romero', categoria: 'camarero', turno: 'mañana', imagen: './imagenes/camareros.png' },
{ id: 2006, nombre: 'Elena Navarro', categoria: 'camarero', turno: 'mañana', imagen: './imagenes/camareros.png' },
{ id: 2007, nombre: 'Diego Ruiz', categoria: 'camarero', turno: 'mañana', imagen: './imagenes/camareros.png' },
{ id: 2008, nombre: 'Gabriela Hernandez', categoria: 'camarero', turno: 'tarde', imagen: './imagenes/camareros.png' },
{ id: 2009, nombre: 'Alberto Gutierrez', categoria: 'camarero', turno: 'tarde', imagen: './imagenes/camareros.png' },
{ id: 2010, nombre: 'Claudia Moreno', categoria: 'camarero', turno: 'tarde', imagen: './imagenes/camareros.png' },
{ id: 2011, nombre: 'Victor Castro', categoria: 'camarero', turno: 'tarde', imagen: './imagenes/camareros.png' },
{ id: 2012, nombre: 'Patricia Ortiz', categoria: 'camarero', turno: 'tarde', imagen: './imagenes/camareros.png' },

// Peones
{ id: 3001, nombre: 'Oscar Soto', categoria: 'peon', turno: 'mañana', imagen: './imagenes/peones.png' },
{ id: 3002, nombre: 'Natalia Prieto', categoria: 'peon', turno: 'mañana', imagen: './imagenes/peones.png' },
{ id: 3003, nombre: 'Fernando Cabrera', categoria: 'peon', turno: 'mañana', imagen: './imagenes/peones.png' },
{ id: 3004, nombre: 'Silvia Marin', categoria: 'peon', turno: 'mañana', imagen: './imagenes/peones.png' },
{ id: 3005, nombre: 'Roberto Iglesias', categoria: 'peon', turno: 'tarde', imagen: './imagenes/peones.png' },
{ id: 3006, nombre: 'Veronica Peña', categoria: 'peon', turno: 'tarde', imagen: './imagenes/peones.png' },
{ id: 3007, nombre: 'Hector Castro', categoria: 'peon', turno: 'tarde', imagen: './imagenes/peones.png' }
];


const agregar = document.querySelector("#indi");
// let platosIndi = [];

// const getRandomId = () => {
//     return Math.floor(Math.random() * 9000) + 1000; 
// };

// agregar.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const idIndi = getRandomId();
//     const nombreIndi = nombre.value;
//     const salaIndi = sala.value;
//     const camaIndi = cama.value;
//     const entradaIndi = entrada.value;
//     const principalIndi = principal.value;
//     const postreIndi = postre.value;

//     const indiCreado = crearIndi(idIndi, nombreIndi, salaIndi, camaIndi, entradaIndi, principalIndi, postreIndi);
//     agregarIndi(indiCreado);

//     agregar.reset();
// });

// const crearIndi = (indiId, indiNombre, indiSala, indiCama, indiEntrada, indiPrincipal, indiPostre) => {
//     return {
//         id: indiId,
//         nombre: indiNombre,
//         sala: indiSala,
//         cama: indiCama,
//         entrada: indiEntrada, // Añadir campo 'entrada'
//         principal: indiPrincipal,
//         postre: indiPostre
//     };
// };

// const agregarIndi = (indiCreado) => {
//     const row = document.createElement("tr");

//     row.innerHTML = `
//         <td>${indiCreado.nombre}</td>
//         <td>${indiCreado.sala}</td>
//         <td>${indiCreado.cama}</td>
//         <td>${indiCreado.entrada}</td>
//         <td>${indiCreado.principal}</td>
//         <td>${indiCreado.postre}</td>
//         <td><button class="eliminar" data-id="${indiCreado.id}">eliminar</button></td>
//     `;
//     preparados.appendChild(row);

//     platosIndi.push(indiCreado);
//     guardarIndi(platosIndi);
// };

// const verIndi = () => {
//     platosIndi = mostrarIndi();
//     preparados.innerHTML = "";
//     platosIndi.forEach((platoIndi) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${platoIndi.nombre}</td>
//             <td>${platoIndi.sala}</td>
//             <td>${platoIndi.cama}</td>
//             <td>${platoIndi.entrada}</td>
//             <td>${platoIndi.principal}</td>
//             <td>${platoIndi.postre}</td>
//             <td><button class="eliminar" data-id="${platoIndi.id}">eliminar</button></td>
//         `;
//         preparados.appendChild(row);
//     });
// };

// document.addEventListener('DOMContentLoaded', verIndi);

// const eliminarIndi = (idindividual) => {
//     platosIndi = platosIndi.filter(indi => indi.id !== parseInt(idindividual));
//     guardarIndi(platosIndi);
//     verIndi(); 
// };

// preparados.addEventListener("click", (e) => {
//     if (e.target.classList.contains("eliminar")) {
//         eliminarIndi(e.target.getAttribute("data-id"));
//     }
// });

// const guardarIndi = (platosIndi) => {
//     localStorage.setItem('platosIndi', JSON.stringify(platosIndi));
// };

// const mostrarIndi = () => {
//     const platosIndiJSON = localStorage.getItem("platosIndi");
//     if (platosIndiJSON) {
//         return JSON.parse(platosIndiJSON);
//     } else {
//         return [];
//     }
// };
