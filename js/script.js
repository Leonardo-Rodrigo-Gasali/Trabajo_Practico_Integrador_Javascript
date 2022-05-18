/* Función Calcular boton resumen */
function calcularTotalPago(){
    var cantidadEntradas, total, categoria, ticketEstudiante, ticketTrainee, ticketJr, ticketGeneral;

    console.log('entra a la funcion');
    cantidadEntradas = document.getElementById('inputCantidad').value;
    categoria = document.getElementById('inputCategoria').value;


    ticketEstudiante = 200 - (200 * 80) / 100;
    ticketTrainee = 200 - (200 * 50) / 100;
    ticketJr = 200 - (200 * 15) / 100;
    ticketGeneral = 200;


    if (cantidadEntradas > 0 && !isNaN(cantidadEntradas) && cantidadEntradas % 1 == 0){
        if (categoria == 'Estudiante'){
            total = ticketEstudiante * cantidadEntradas;
            document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
        } else if (categoria == 'Trainee'){
            total = ticketTrainee * cantidadEntradas;
            document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
        } else if (categoria == 'Junior'){
            total = ticketJr * cantidadEntradas;
            document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
        }else if (categoria == 'General'){
            total = ticketGeneral * cantidadEntradas;
            document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024' + total;
        }
    } else {
      window.alert("Debe ingresar la cantidad de tickets en números enteros");
    }
}


/* Función Borrar boton borrar */

function borrar(){
    document.getElementById('inputNombre').value = ' ';
    document.getElementById('inputApellido').value = ' ';
    document.getElementById('inputEmail').value = ' ';
    document.getElementById('inputCantidad').value = ' ';
    document.getElementById('inputCategoria').value = 'Estudiante';
    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024';
}
