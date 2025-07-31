const menuTableBody = document.querySelector("#menuTableBody");
let ultimoMenuSeleccionado = null;

function mostrarMenu(dia, tipo) {
  const menusGuardados = JSON.parse(localStorage.getItem("comida")) || [];

  const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];
  const diaIndex = dias.indexOf(dia.toLowerCase());
  if (diaIndex === -1) return;

  // Agrupamos por régimen
  const regimenes = [...new Set(menusGuardados.map((m) => m.regimen))];
  menuTableBody.innerHTML = "";

  regimenes.forEach((regimen) => {
    const menusFiltrados = menusGuardados.filter(
      (m) => m.regimen === regimen && m.tipo === tipo
    );

    const menu = menusFiltrados[diaIndex]; // Lunes = 0, Martes = 1, etc.

    if (menu) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${menu.id}</td>
        <td class="clickable">${menu.principal}</td>
        <td>${menu.postre}</td>
        <td>${menu.regimen}</td>
      `;
      const principalCell = row.querySelector(".clickable");
      principalCell.addEventListener("click", () => {
        ultimoMenuSeleccionado = menu;
        mostrarIngredientes(menu);
      });
      menuTableBody.appendChild(row);
    }
  });
}

function mostrarIngredientes(menu) {
  const output = document.querySelector("#tablaIngredientes");
  const input = document.querySelector("#cantidadComensales");

  const total = Number(input.value.trim());
  if (!menu || isNaN(total) || total <= 0) {
    output.innerHTML = "<p>Ingresá una cantidad válida de personas.</p>";
    return;
  }

  let html = `<h4>${menu.principal}</h4><table class="table"><thead><tr><th>Ingrediente</th><th>PB</th><th>Unidad</th><th>PB Total</th></tr></thead><tbody>`;

  (menu.ingredientes || []).forEach((ing) => {
    const totalPb = (ing.pb * total).toFixed(3);
    html += `<tr><td>${ing.nombre}</td><td>${ing.pb}</td><td>${ing.unidad}</td><td>${totalPb}</td></tr>`;
  });

  html += `</tbody></table><h5>Postre: ${menu.postre}</h5><table class="table"><thead><tr><th>Ingrediente</th><th>PB</th><th>Unidad</th><th>PB Total</th></tr></thead><tbody>`;

  (menu.postreIngredientes || []).forEach((ing) => {
    const totalPb = (ing.pb * total).toFixed(3);
    html += `<tr><td>${ing.nombre}</td><td>${ing.pb}</td><td>${ing.unidad}</td><td>${totalPb}</td></tr>`;
  });

  html += `</tbody></table>`;
  output.innerHTML = html;
}

// Eventos para los botones de días y tipos
const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
const tipos = ["almuerzo", "cena"];

dias.forEach((dia) => {
  tipos.forEach((tipo) => {
    const btn = document.getElementById(`${dia}-${tipo}`);
    if (btn) {
      btn.addEventListener("click", () => {
        mostrarMenu(dia, tipo);
      });
    }
  });
});

document.getElementById("btnCalcular").addEventListener("click", () => {
  if (ultimoMenuSeleccionado) {
    mostrarIngredientes(ultimoMenuSeleccionado);
  } else {
    document.querySelector("#tablaIngredientes").innerHTML =
      "<p>Seleccioná un plato para calcular los ingredientes.</p>";
  }
});

// Al cargar la página
window.addEventListener("load", () => {
  mostrarMenu("lunes", "almuerzo");
  renderIndi();
});

// -----------------------------
// FORMULARIO PACIENTE INDIVIDUAL
// -----------------------------
const nombre = document.querySelector(".indi-nombre");
const sala = document.querySelector(".indi-sala");
const cama = document.querySelector(".indi-cama");
const entrada = document.querySelector(".indi-entrada");
const principal = document.querySelector(".indi-principal");
const postre = document.querySelector(".indi-postre");
const preparados = document.querySelector("#indiPreparados");
const indi = document.querySelector("#indi");

const getRandomId = () => Math.floor(Math.random() * 9000) + 1000;
let data = JSON.parse(localStorage.getItem("formdata")) || [];

indi.addEventListener("submit", (e) => {
  e.preventDefault();

  const idIndi = getRandomId();
  const nombreIndi = nombre.value;
  const salaIndi = sala.value;
  const camaIndi = cama.value;
  const entradaIndi = entrada.value;
  const principalIndi = principal.value;
  const postreIndi = postre.value;

  if (
    idIndi &&
    nombreIndi &&
    salaIndi &&
    camaIndi &&
    entradaIndi &&
    principalIndi &&
    postreIndi
  ) {
    const nuevaData = {
      idIndi,
      nombreIndi,
      salaIndi,
      camaIndi,
      entradaIndi,
      principalIndi,
      postreIndi,
    };
    data.push(nuevaData);
    guardarEnLocal();
    renderIndi();
    indi.reset();
  } else {
    Swal.fire({
      title: "Completa todas las casillas",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
});

function renderIndi() {
  preparados.innerHTML = "";

  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.idIndi}</td>
      <td>${item.nombreIndi}</td>
      <td>${item.salaIndi}</td>
      <td>${item.camaIndi}</td>
      <td>${item.entradaIndi}</td>
      <td>${item.principalIndi}</td>
      <td>${item.postreIndi}</td>
      <td><button onclick="editarData(${index})">editar</button></td>
      <td><button onclick="eliminarData(${index})">eliminar</button></td>
    `;
    preparados.appendChild(row);
  });
}

function editarData(index) {
  const item = data[index];
  nombre.value = item.nombreIndi;
  sala.value = item.salaIndi;
  cama.value = item.camaIndi;
  entrada.value = item.entradaIndi;
  principal.value = item.principalIndi;
  postre.value = item.postreIndi;

  data.splice(index, 1);
  guardarEnLocal();
  renderIndi();
}

function eliminarData(index) {
  data.splice(index, 1);
  guardarEnLocal();
  renderIndi();
}

function guardarEnLocal() {
  localStorage.setItem("formdata", JSON.stringify(data));
}

// Hamburguesa para móviles
const btnHamburguesa = document.querySelector("#hamburger");
if (btnHamburguesa) {
  btnHamburguesa.addEventListener("click", () => {
    const menuLateral = document.querySelector(".menu-botones");
    menuLateral.classList.toggle("activo");
  });
}
