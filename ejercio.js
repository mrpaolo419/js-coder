

let producto ="";
let cantidad = 0;
let precio = 0; 
let seguirCompra = false;
let precioTotal = 0;
let cantidadTotal = 0;



const botas = [
    {nombre:"bukanera", precio:80000, color:"negro"},
    {nombre:"bukanera", precio:80000, color:"marron"},
    {nombre:"texana", precio:50000, color:"negro"},
    {nombre:"texana", precio:50000, color:"blanco"},
    {nombre:"botineta", precio:45000, color:"negro"},
    {nombre:"botineta", precio:45000, color:"marron"},
]
const sandalias = [
    {nombre:"romana", precio:50000, color:"negro"},
    {nombre:"romana", precio:50000, color:"marron"},
    {nombre:"chatitas", precio:20000, color:"rojo"},
    {nombre:"chatitas", precio:20000, color:"beige"},
    {nombre:"charol", precio:70000, color:"negro"},
    {nombre:"charol", precio:70000, color:"blanco"},
]


const zapatillas = [
    {nombre:"urbana", precio:90000, color:"negro"},
    {nombre:"urbana", precio:90000, color:"azul"},
    {nombre:"tenis", precio:120000, color:"verde"},
    {nombre:"tenis", precio:120000, color:"blanco"},
    {nombre:"sport", precio:130000, color:"roja"},
    {nombre:"sport", precio:130000, color:"blanco"},
]






// const calzados = botas.concat(sandalia,zapatillas)


// const seleccion = () => {
//     const ncp = calzados.map(bota => "Nombre: " + bota.nombre + ", Color: " + bota.color + ", precio: " + bota.precio);
//     const resultado = ncp.join("\n");
//     alert(resultado);
// }
// saludar()

// const opciones = ["bota", "sandalia", "zapatillas"],

// const selec = () => { let opcion;
// do{
//     let opcion = prompt("ingrese una opcion /N. bota/n. sandalia/n. zapatillas " ) 
//     switch (opcion) {
//     case "bota":
//         break;
//     case "sandalia":
//         break
//     case "zapatillas":
//         break
//     default:
//         alert ("no existe")
//     }while (!opciones.includes(opcion)) 
// }
// }

// const opciones = ["bota", "sandalia", "zapatillas"];







// const calzados = botas.concat(sandalia,zapatillas)

// const elegir = () => { 
//     for (let i = 0; i <calzados.length; i++) {
//         alert(calzados[i])
//     }
// }
// elegir()



let nombre = prompt("pon tu nombre");

let saludar = () => {
    alert("hola " + nombre)
    let comprar = confirm ("deseas comprar algo")
    if (comprar){
        alert("excelente tenemos estos productos")
        selec()
    }else{
        alert ("no pasa nada para la proxima")
    }
};


const elegirBota = () => {
    let resultado = ""
    botas.forEach(bota =>{
        resultado += "nombre: " + bota.nombre + ", color: " + bota.precio + ", precio " + bota.precio + "\n";
    })

    alert(resultado)

}


const  elegirSandalias = () => {
    let resultado = ""
    sandalias.forEach(sandalia =>{
        resultado += "nombre " + sandalia.nombre + ",precio " + sandalia.precio + ", color " + sandalia.color + "\n" ;});

        alert(resultado)
    };

    const  elegirZapatillas = () => {
        let resultado = ""
        zapatillas.forEach(zapatilla =>{
            resultado += "nombre " + zapatilla.nombre + ",precio " + zapatilla.precio + ", color " + zapatilla.color + "\n" ;});
    
            alert(resultado)
        };


    

const selec = () => {
    let option;
    do {
        option = prompt("Ingrese una opción:\n. bota\n. sandalia\n. zapatillas");
        
        switch (option) {
            case "bota":
                alert("Seleccionaste bota " + elegirBota() )
                break;
            case "sandalia":
                alert("Seleccionaste bota:/n" + elegirSandalias ())
                break;
            case "zapatillas":
                alert("Seleccionaste bota:/n" + elegirZapatillas());
                break;
            default:
                alert("No existe esa opción");
        }
    } while (!opciones.includes(option));
};

saludar()