// ! Andrés Alfonso

const prompt = require ("prompt-sync")(); 

function convertirMoneda(monto,monedaDestino){
    let USD= 4014;
    let EUR= 4693;
    let final=0;
    if(monedaDestino=="USD"){
        final=monto/USD;
    }else if (monedaDestino=="EUR"){
        final=monto/EUR;
    }
    else{
        return console.log("Divisa incorrecta!");
    }
    return console.log("El monto en ",monedaDestino," es ",final);
}

let cantidad = Number(prompt("Ingrese el monto que quiere convertir: "));
let divisa = prompt("A que divisa quiere convertir el monto(USD/EUR): ");
convertirMoneda(cantidad,divisa);