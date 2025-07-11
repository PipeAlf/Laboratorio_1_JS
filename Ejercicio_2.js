// ! Andrés Alfonso

const prompt = require ("prompt-sync")(); 


function validarContraseña(contraseña){
    let numero= false;
    let mayus= false;
    if (contraseña.length >=8){
        for(let i=0;i<contraseña.length;i++){
            const letra = contraseña [i];
            if (!isNaN(letra) && letra !== ' ') {
                 numero = true;
            }
            if (letra >= 'A' && letra <= 'Z'){
                mayus = true;
            }
            if (numero && mayus){
                break;
            }
           
        }
        return console.log(numero && mayus);
    }
    else{
        return console.log(false);
    }
}

validarContraseña(prompt("Ingrese una contraseña: "));

