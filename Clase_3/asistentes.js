let nombre = "Ana";
let nombre2 = "Carlos";
let nombre3 = "Pepito";


let asistentes = ["JuanFe", "Richard", "Ana"];


console.log(asistentes[0])
console.log(asistentes[1])
console.log(asistentes[2])
console.log(asistentes[3])

let carrito = ["Pizza", "Gaseosa"];

carrito.push("postre")
console.log(carrito);

carrito.pop();
console.log(carrito);

carrito[0] = "Hambuguesa";
console.log(carrito);

//!Objetos

let perfiluser = ["Ana", 60, "Profe", "zipaquira"]
console.log(perfiluser)

let perfilusuario = {
    nombre: "Andres",
    edad: 30,
    cuidad: "Cali"
}; 
console.log(perfilusuario)


//Operaciones que se pueden

let cliente = {nombre: "Andres", edad: 30};

cliente.ciudad = "Cali";
console.log(cliente)

cliente.edad = 31;
console.log(cliente);

delete cliente.edad;
console.log(cliente);

//funciones

function saludarA(nombre){
console.log("Hola, " + nombre);
}


saludarA("Dayana");
saludarA("Ana");


