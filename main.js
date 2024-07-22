

const menuTableBody = document.querySelector("#menuTableBody")



if (!localStorage.getItem("comida")) {
localStorage.setItem("comida", JSON.stringify(menus));
}

function mostrarLista(regimenId) {
    const menusGuardados = JSON.parse(localStorage.getItem("comida"));
    const menusFiltrados = menusGuardados.filter(menu => menu.id === regimenId);
    const menuTableBody = document.querySelector("#menuTableBody");
    menuTableBody.innerHTML = "";
menusFiltrados.forEach(menu => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${menu.id}</td>
    <td>${menu.entrada}</td>
    <td>${menu.principal}</td>
    <td>${menu.postre}</td>
    <td>${menu.regimen}</td>
    `;
    menuTableBody.appendChild(row);
});
}

for (let i = 1; i <= 16; i++) {
    const button = document.getElementById(`menu${i}`);
    button.addEventListener('click', () => mostrarLista(i));
}

window.addEventListener('load', () => mostrarLista(1));


const nombre = document.querySelector(".indi-nombre");
const sala = document.querySelector(".indi-sala");
const cama = document.querySelector(".indi-cama");
const entrada = document.querySelector(".indi-entrada");
const principal = document.querySelector(".indi-principal");
const postre = document.querySelector(".indi-postre");
const preparados = document.querySelector("#indiPreparados");

const agregar = document.querySelector("#indi");
let platosIndi = [];

const getRandomId = () => {
    return Math.floor(Math.random() * 9000) + 1000; 
};

agregar.addEventListener('submit', (e) => {
    e.preventDefault();

    const idIndi = getRandomId();
    const nombreIndi = nombre.value;
    const salaIndi = sala.value;
    const camaIndi = cama.value;
    const entradaIndi = entrada.value;
    const principalIndi = principal.value;
    const postreIndi = postre.value;
    
    const indiCreado = crearIndi(idIndi, nombreIndi, salaIndi, camaIndi, entradaIndi, principalIndi, postreIndi);
    agregarIndi(indiCreado);

    agregar.reset();
});

const crearIndi = (indiId, indiNombre, indiSala, indiCama, indiPrincipal, indiPostre) => {
    return {
        id: indiId,
        nombre: indiNombre,
        sala: indiSala,
        cama: indiCama,
        principal: indiPrincipal,
        postre: indiPostre
    };
};

const agregarIndi = (indiCreado) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${indiCreado.nombre}</td>
        <td>${indiCreado.sala}</td>
        <td>${indiCreado.cama}</td>
        <td>${indiCreado.entrada}</td>
        <td>${indiCreado.principal}</td>
        <td>${indiCreado.postre}</td>
        <td><button class="eliminar" id="${indiCreado.id}">eliminar</button></td>
    `;
    preparados.appendChild(row);

    platosIndi.push(indiCreado);
    guardarIndi(platosIndi);
};

const verIndi = () => {
    platosIndi = mostrarIndi(); 
    preparados.innerHTML = "";
    platosIndi.forEach((platoIndi) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${platoIndi.nombre}</td>
            <td>${platoIndi.sala}</td>
            <td>${platoIndi.cama}</td>
            <td>${platoIndi.entrada}</td>
            <td>${platoIndi.principal}</td>
            <td>${platoIndi.postre}</td>
            <td><button class="eliminar" id="${platoIndi.id}">eliminar</button></td>
        `;
        preparados.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', verIndi);

const eliminarIndi = (idindividual) => {
    platosIndi = platosIndi.filter(indi => indi.id !== parseInt(idindividual));
    verIndi(); 
    guardarIndi(platosIndi); 
};

document.addEventListener('DOMContentLoaded', verIndi);

preparados.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
        eliminarIndi(e.target.id);
    }
});




const guardarIndi = (platosIndi) => {
    localStorage.setItem('platosIndi', JSON.stringify(platosIndi));
};

const mostrarIndi = () => {
    const platosIndiJSON = localStorage.getItem("platosIndi");
    if (platosIndiJSON) {
        return JSON.parse(platosIndiJSON);
    } else {
        return []; 
    }
};

const indiEstage = guardarIndi()




