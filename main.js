const menuTableBody = document.querySelector("#menuTableBody");

function cargarDatos() {
    fetch("menus.json")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("comida", JSON.stringify(data));
            mostrarLista(1);
        })
        
}

function mostrarLista(regimenId) {
    const menusGuardados = localStorage.getItem("comida");

    if (menusGuardados) {
        const menusArray = JSON.parse(menusGuardados);
        const menusFiltrados = menusArray.filter(menu => menu.id === regimenId);

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
    } else {
        alert('No se encontraron menús en el localStorage.');
    }
}

for (let i = 1; i <= 16; i++) {
    const button = document.getElementById(`menu${i}`);
    if (button) {
        button.addEventListener('click', () => mostrarLista(i));
    }
}

window.addEventListener('load', () => {
    if (!localStorage.getItem("comida")) {
        cargarDatos();
    } else {
        mostrarLista(1);
    }
});








window.addEventListener("load", ()=>{

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

let = data = JSON.parse(localStorage.getItem("formdata")) || []

indi.addEventListener("submit", (e)=>{
    e.preventDefault()


    const idIndi = getRandomId();
    const nombreIndi = nombre.value;
    const salaIndi = sala.value;
    const camaIndi = cama.value;
    const entradaIndi = entrada.value;
    const principalIndi = principal.value;
    const postreIndi = postre.value;



    
    if(idIndi && nombreIndi && salaIndi && camaIndi && entradaIndi && principalIndi && postreIndi){
        const nuevaData = { idIndi, nombreIndi, salaIndi, camaIndi, entradaIndi, principalIndi, postreIndi };
        data.push(nuevaData);
        guardarEnLocal();
        renderIndi();
        indi.reset();

    }else {
        Swal.fire({
            title: 'Completa Todos las Casillas',
            
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }

});

const renderIndi = () => {
    preparados.innerHTML =""

    data.forEach((item, index ) => {
        const row = document.createElement("tr");
        const idCelda =document.createElement("td");
        const nombreCelda =document.createElement("td");
        const salaCelda =document.createElement("td");
        const camaCelda =document.createElement("td");
        const entradaCelda =document.createElement("td");
        const principalCelda =document.createElement("td");
        const postreCelda =document.createElement("td");
        const editar =document.createElement("button");
        const eliminar =document.createElement("button");


        idCelda.textContent = item.idIndi;
        nombreCelda.textContent = item.nombreIndi;
        salaCelda.textContent = item.salaIndi;
        camaCelda.textContent = item.camaIndi;
        entradaCelda.textContent = item.entradaIndi;
        principalCelda.textContent = item.principalIndi;
        postreCelda.textContent = item.postreIndi;
        editar.textContent = "editar"
        editar.addEventListener("click", function(){
            editarData(index);
        })

        eliminar.textContent = "eliminar"
        eliminar.addEventListener("click", function(){
            eliminarData(index);
        })


        row.appendChild(idCelda);
        row.appendChild(nombreCelda);
        row.appendChild(salaCelda);
        row.appendChild(camaCelda);
        row.appendChild(entradaCelda);
        row.appendChild(principalCelda);
        row.appendChild(postreCelda);
        row.appendChild(editar);
        row.appendChild(eliminar);

        preparados.appendChild(row)
        
    })
}

const editarData = (index) =>{
    const item = data[index];
    
    nombre.value = item.nombreIndi;
    sala.value = item.salaIndi;
    cama.value = item.camaIndi;
    entrada.value = item.entradaIndi;
    principal.value = item.principalIndi;
    postre.value = item.postreIndi;

    data.splice(index, 1);
    renderIndi()
    guardarEnLocal()

}

const eliminarData = (index)=>{
    data.splice(index, 1 )
    guardarEnLocal()
    renderIndi()
}

renderIndi()


const guardarEnLocal = ()=> {
    localStorage.setItem("formdata",JSON.stringify(data));

}

});



