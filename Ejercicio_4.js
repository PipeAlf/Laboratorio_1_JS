// ! Andrés Alfonso

const prompt = require ("prompt-sync")(); 

function calcularPromedio(notas){
    let suma = 0;
    let promedio = 0;
    for(let i=0;i<notas.length;i++){
        suma +=notas[i];
    }
    promedio = suma/notas.length;
    return console.log(promedio.toFixed(2));
}

let notasU = prompt("Ingresé las notas para calcular el promedio (separadas por comas): ")
let notasUA = notasU.split(",").map(Number);

calcularPromedio(notasUA);