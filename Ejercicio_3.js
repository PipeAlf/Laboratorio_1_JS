// ! Andrés Alfonso

const prompt = require ("prompt-sync")(); 

function buscarProducto(nombre,inventario){
    for(let i=0;i<inventario.length;i++){
        if(inventario[i].nombre==nombre){
            return console.log("Si existe ", nombre, "en el inventario.")
        }
    }
    return console.log(null);
}

const inventario =[{
    "nombre" : "Camisa",
    "precio" : 20
    },
    {
        "nombre" : "Zapatos",
        "precio" : 50
    }
]

buscarProducto(prompt("Ingrese el nombre del producto: "),inventario);