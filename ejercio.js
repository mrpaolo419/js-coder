

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
const sandalia = [
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



let nombre = prompt("pon tu nombre");

let saludar = () => {
    alert("hola " + nombre)
    let comprar = confirm ("deseas comprar algo")
    if (comprar){
        alert("excelente tenemos estos productos")
    }else{
        alert ("no pasa nada para la proxima")
    }
};

saludar()

const calzados = botas.concat(sandalia,zapatillas)


const seleccion = () => {
    const ncp = calzados.map(bota => "Nombre: " + bota.nombre + ", Color: " + bota.color + ", precio: " + bota.precio);
    const resultado = ncp.join("\n");
    alert(resultado);
}

seleccion()

