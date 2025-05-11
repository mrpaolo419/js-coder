const menuTableBody = document.querySelector("#menuTableBody");
let ultimoMenuSeleccionado = null;

function mostrarMenu(dia, tipo) {
  const menusGuardados = menus; // o desde localStorage si preferís

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

// ✅ Agregado dinámico de eventos a todos los botones de días/tipos
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

window.addEventListener("load", () => {
  mostrarMenu("lunes", "almuerzo");
});

window.addEventListener("load", () => {
  const nombre = document.querySelector(".indi-nombre");
  const sala = document.querySelector(".indi-sala");
  const cama = document.querySelector(".indi-cama");
  const entrada = document.querySelector(".indi-entrada");
  const principal = document.querySelector(".indi-principal");
  const postre = document.querySelector(".indi-postre");
  const preparados = document.querySelector("#indiPreparados");
  const indi = document.querySelector("#indi");

  const getRandomId = () => {
    return Math.floor(Math.random() * 9000) + 1000;
  };

  let = data = JSON.parse(localStorage.getItem("formdata")) || [];

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
        title: "Completa Todos las Casillas",

        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  });

  const renderIndi = () => {
    preparados.innerHTML = "";

    data.forEach((item, index) => {
      const row = document.createElement("tr");
      const idCelda = document.createElement("td");
      const nombreCelda = document.createElement("td");
      const salaCelda = document.createElement("td");
      const camaCelda = document.createElement("td");
      const entradaCelda = document.createElement("td");
      const principalCelda = document.createElement("td");
      const postreCelda = document.createElement("td");
      const editar = document.createElement("button");
      const eliminar = document.createElement("button");

      idCelda.textContent = item.idIndi;
      nombreCelda.textContent = item.nombreIndi;
      salaCelda.textContent = item.salaIndi;
      camaCelda.textContent = item.camaIndi;
      entradaCelda.textContent = item.entradaIndi;
      principalCelda.textContent = item.principalIndi;
      postreCelda.textContent = item.postreIndi;
      editar.textContent = "editar";
      editar.addEventListener("click", function () {
        editarData(index);
      });

      eliminar.textContent = "eliminar";
      eliminar.addEventListener("click", function () {
        eliminarData(index);
      });

      row.appendChild(idCelda);
      row.appendChild(nombreCelda);
      row.appendChild(salaCelda);
      row.appendChild(camaCelda);
      row.appendChild(entradaCelda);
      row.appendChild(principalCelda);
      row.appendChild(postreCelda);
      row.appendChild(editar);
      row.appendChild(eliminar);

      preparados.appendChild(row);
    });
  };

  const editarData = (index) => {
    const item = data[index];

    nombre.value = item.nombreIndi;
    sala.value = item.salaIndi;
    cama.value = item.camaIndi;
    entrada.value = item.entradaIndi;
    principal.value = item.principalIndi;
    postre.value = item.postreIndi;

    data.splice(index, 1);
    renderIndi();
    guardarEnLocal();
  };

  const eliminarData = (index) => {
    data.splice(index, 1);
    guardarEnLocal();
    renderIndi();
  };

  renderIndi();

  const guardarEnLocal = () => {
    localStorage.setItem("formdata", JSON.stringify(data));
  };
});
