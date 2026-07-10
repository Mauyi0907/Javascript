const tareas = [
    { titulo: "Pagar Factura", proridad: 5},
    { titulo: "Regar plantas", proridad: 2},
    {titulo: "Llamar cliente", proridad: 4}
];

for (const tarea of tareas) {

    if (tarea.proridad > 3) {
        
        console.log(tarea.titulo + " URGENTE");
    } else {

        console.log(tarea.titulo + " Normal");
    }
}