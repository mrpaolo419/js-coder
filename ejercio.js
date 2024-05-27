

let producto ="";
let cantidad = 0;
let precio = 0; 
let seguirCompra = false;
let precioTotal = 0;
let cantidadTotal = 0;

const saludar = () => {
    let nombre = prompt("Pon tu nombre");
    let deseaComprar = confirm("¿Desea comprar algo, " + nombre + "?");

    if (deseaComprar) {
        compra()
        
    }else{
        alert("Está bien, en otra ocasión.");
    }
};





const compra = () =>{
    do { 
    producto = prompt("que quiere? botas sandalia  o zapatillas");
    cantidad = parseInt (prompt("ingrese la cantidad"));
    
    
    switch (producto) {
        case "botas" :
        precio = 70000;      
        break;
        case "sandalia" :
        precio = 35000
        break
        case "zapatillas" :
        precio  = 45000; 
        break
        default:
        alert("no hay stock")
        cantidad = 0
        break;
    }
     precioTotal += precio * cantidad;
    cantidadTotal += cantidad;
    seguirCompra = confirm("queres seguir comprando");
    
    }while (seguirCompra)
}



saludar()
compra() 


    alert("ah comprado "+cantidadTotal+ " productos y el total es "+precioTotal );


