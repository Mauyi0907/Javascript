/*let numero = 1;

while (numero <= 5) {
    console.log("Número: " + numero);
    numero = numero +1;

}

console.log("El ciclo termino.");*/

//! Ejemplo #2
/*const prompt = require("prompt-sync")();

while (true) {

    const texto = prompt("Escribe algo (o 'Salir')): ");

    if (texto === "Salir") {
        console.log("programa Finalizado");

        break;
    }

    console.log("Escribiste: " + texto);


}*/

const prompt = require("prompt-sync")();
const tareas = [];

while (true){
console.log("\n---- GESTOR DE TAREAS ----");
console.log("1. Agregar Tarea");
console.log("2. Listar Tareas");
console.log("3. completar tarea");
console.log("4. Eliminar Tarea");
console.log("5. Salir");

const opcion = prompt("Elije una opcion: ");

switch(opcion) {
    case "1":
    const titulo = prompt("Titulo de la tarea:" );

    if (titulo.trim() === ""){
        console.log("El titulo no puede estar vacio");
        break;
    }

    const prioridad = prompt("Prioridad (Alta, Media, Baja: ");
    tareas.push({titulo: titulo, prioridad: prioridad, completa: false});
    console.log("Tarea agregada")
    break;
    case "2": {
  if (tareas.length === 0) {
    console.log("No hay tareas registradas.");
    break;
  }

  for (let i = 0; i < tareas.length; i++) {
    const t = tareas[i];
    let estado;
    if (t.completada === true) {
      estado = "[✓]";
    } else {
      estado = "[ ]";
    }
    console.log((i + 1) + ". " + estado + " " + t.titulo + " (" + t.prioridad + ")");
  }
  break;
}
    case "3": {
  const num = Number(prompt("Número de la tarea a completar: "));
  const indice = num - 1;

  if (indice < 0 || indice >= tareas.length) {
    console.log("Esa tarea no existe.");
    break;
  }

  tareas[indice].completada = true;
  console.log("Tarea completada.");
  break;
}
    case "4": {
  const num = Number(prompt("Número de la tarea a eliminar: "));
  const indice = num - 1;

  if (indice < 0 || indice >= tareas.length) {
    console.log("Esa tarea no existe.");
    break;
  }

  tareas.splice(indice, 1);
  console.log("Tarea eliminada.");
  break;
}
    case "5":
        console.log("Elegite: Hasta luego.")
    break;
    
        default:

        console.log("Opcion no valida.")

}

    if (opcion == "5" ) break;
}

