// Map
// Partiendo de nuestro array, crea uno nuevo con los resultados obtenidos de 
//aplicar el CallBack a cada uno de los elementos originales
const array1 = [1, 4, 9, 16];

function cb(element){
    return element * 2
}

const array2 = array1.map(cb)

console.log(array1) // [1, 4, 9, 16]
console.log(array2) // [2, 8, 18, 32]

// Filter
// Crea un nuevo array, solo con los elementos que generan un return "true" 
// en nuestra funcion de CallBack.  

const array1 = [1, 4, 9, 16];

// Nuestro CallBack va a devolver "true" solo si el elemento que recibe es par
function cb(element){ 

    if (element %2 ===0 ){
        return true
    }else{
        return false
    }
}

const array2 = array1.filter(cb)

console.log(array1) // [1, 4, 9, 16]
console.log(array2) // [4, 16]