// ! Andrés Alfonso

const prompt = require ("prompt-sync")(); 

function contarPalabras(texto){
    palabras= texto.length;
    return console.log("El número de palabras es: ", palabras);
}

tex= prompt("Ingrese cualquier cantidad de palabras separadas por un espacio: ");
tex2= tex.split(" ");
contarPalabras(tex2);