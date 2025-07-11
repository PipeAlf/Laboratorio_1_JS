const prompt = require ("prompt-sync")(); 

function calcularPropina(total,porcentaje){
    total = Number(total);
    porcentaje = Number(porcentaje);
    let propina = total*(porcentaje/100);
    let pago = total + propina;
    return console.log("El total a pagar es de: ", pago);
}

calcularPropina(prompt("Ingrese el total de la cuenta: "),prompt("Ingrese el porcentaje de propina: "));