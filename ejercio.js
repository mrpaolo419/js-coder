

// let producto ="";
// let cantidad = 0;
// let precio = 0; 
// let seguirCompra = false;
// let precioTotal = 0;
// let cantidadTotal = 0;



// const calzados= [
//     {nombre:"bukanera", precio:80000, color:"negro"},
//     {nombre:"bukanera", precio:80000, color:"marron"},
//     {nombre:"texana", precio:50000, color:"negro"},
//     {nombre:"texana", precio:50000, color:"blanco"},
//     {nombre:"botineta", precio:45000, color:"negro"},
//     {nombre:"botineta", precio:45000, color:"marron"},
//     {nombre:"romana", precio:50000, color:"negro"},
//     {nombre:"romana", precio:50000, color:"marron"},
//     {nombre:"chatitas", precio:20000, color:"rojo"},
//     {nombre:"chatitas", precio:20000, color:"beige"},
//     {nombre:"charol", precio:70000, color:"negro"},
//     {nombre:"charol", precio:70000, color:"blanco"},
//     {nombre:"urbana", precio:90000, color:"negro"},
//     {nombre:"urbana", precio:90000, color:"azul"},
//     {nombre:"tenis", precio:120000, color:"verde"},
//     {nombre:"tenis", precio:120000, color:"blanco"},
//     {nombre:"sport", precio:130000, color:"roja"},
//     {nombre:"sport", precio:130000, color:"blanco"},
// ]
// const guardar =(clave, valor) =>{
//     localStorage.setItem(clave, valor);
// };

// // guardar("calzados", JSON.stringify(calzados) )
// // console.log(guardar);
// const agregar = ((productos, lista) => {
//     lista.innerHTML="";
//     productos.forEach(producto =>{
//         const div = document.createElement("div");
//         div.innerHTML=`
//         <div class="productos">
//             <h4>tipo : ${calzado.nombre}</h4>
//             <p>precio : ${calzado.precio}<p>
//             <p>color : ${calzado.color}<p>
//             <button class="eliminar">eliminar</button>
//         </div>
//         `;
//         lista.appendChild(div);

//     })
// })


// const lista = document.querySelector("#lista");
//     calzados.forEach(calzado =>{
//         const div = document.createElement("div");

//         div.innerHTML=`
//         <div class="productos">
//             <h4>tipo : ${calzado.nombre}</h4>
//             <p>precio : ${calzado.precio}<p>
//             <p>color : ${calzado.color}<p>
//             <button class="eliminar">eliminar</button>
//         </div>
//         `;
//     const tipo = document.querySelector(".no");
//     const precio = document.querySelector(".no2");
//     const color = document.querySelector(".no1");

//     lista.appendChild(div)
//     const boton = div.querySelector(".eliminar")
//     boton.addEventListener("click", (e) =>{
//         div.remove()
//     });
//     });

const form = document.getElementById("ingreso1");
const tipo = document.getElementById("tipo");
const precio = document.getElementById("precio");
const color = document.getElementById("color");
const contenedor = document.getElementById("lista");

const getRandomId = () => {

    return Math.floor(Math.random() * Date.now()).toString()

};

const agregar = (gId, gTipo, gPrecio, gColor) => {
    return{
        id: gId,
        Tipo: gTipo,
        Precio : gPrecio,
        Color: gColor 
    };
};






const mandar = (mando) =>{
    
    const div = document.createElement("div");
    div.className = "productos";
    div.id = `producto-${mando.id}`
    div.innerHTML=`
        <div class="productos">
            <h4>tipo : ${mando.Tipo}</h4>
            <p>precio : ${mando.Precio}<p>
            <p>color : ${mando.Color}<p>
            <button class="eliminar" id="${mando.id}">eliminar</button>
        </div>
        `;
        const boton = div.querySelector(".eliminar");
        boton.addEventListener("click", () => div.remove())    
    
        
    lista.appendChild(div)
};



form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const id = getRandomId();
    const nTipo = tipo.value;
    const nPrecio = precio.value;
    const nColor = color.value;
    
    
    const mando = agregar(id, nTipo, nPrecio, nColor);
    mandar(mando)
    form.reset();
});


