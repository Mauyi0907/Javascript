const proridad = 5 ;
const proridad2 = 2;
const proridad3 = 4;
const tareas = ["Pagar factura", "Regar plantas", "Llamar cliente"];


if (proridad > 3){

console.log("Esta nota es urgente");
}


if (proridad2 > 3){
    console.log("URGENTE");

}

else {

    console.log("Normal");
}

if (proridad3 >= 5){
    console.log("Critica")
}

else if(proridad3 >= 3){

    console.log("Alta");
}

else {
    console.log("baja")
}


//! Siempre busca el true 

const titulo = "";

if(titulo) {
    console.log("La tarea tiene titulo")
} else {

    console.log("Falta titulo");
}


//Ciclo for

for(let i = 0; i < 3; i ++ ) {
    console.log("Vuelta numero " + i);

}


for(const tarea of tareas){
    console.log("Tarea: " + tarea)
}