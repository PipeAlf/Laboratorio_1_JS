// ! Andrés Alfonso

const prompt = require ("prompt-sync")(); 

function retirarDinero(saldo,monto){
    let total = 0;
    if(saldo>monto){
        total = saldo - monto;
    }
    else{
        return console.log("Fondos insuficientes!");
    }
    return console.log("Su nuevo saldo es: ", total);
}

let saldoi = Number(prompt("Ingrese su saldo: "));
let retiroi = Number(prompt("Ingrese el monto a retirar: "));
retirarDinero(saldoi,retiroi);