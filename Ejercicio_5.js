// ! Andrés Alfonso

const prompt = require ("prompt-sync")(); 

function filtrarUsuarios(usuarios,edadMinima){
    const cumplen = [];
    for(let i=0;i<usuarios.length;i++){
        if(usuarios[i].edad>=edadMinima){
            cumplen.push(usuarios[i]);
        }
    }
    return console.log(cumplen);
}

usuariosL = [
    {
        "nombre"  : "Ana",
        "edad"    : 25
    },
    {
        "nombre" : "Nath",
        "edad"   : 26
    },
    {
        "nombre" : "Felipe",
        "edad"   : 29
    },
    {
        "nombre" : "Hannah",
        "edad"   : 1
    },
    {
        "nombre" : "Alejandro",
        "edad"   : 16
    }
]

let edad = prompt("Ingrese la edad mínima: ");
edad = Number(edad);
filtrarUsuarios(usuariosL,edad);