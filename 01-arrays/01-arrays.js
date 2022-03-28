
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 10 && array[i] >= 0 || array.length < 2) {
            newArray.unshift(array[i])
        }      
    }

    return newArray
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    
    // Recorrer el arreglo
    // Comprobar si el elemento actual de array1 está en array2
    let comun = null
    for (let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])) comun = array1[i]
    }

    return comun ? comun : Math.min(Math.min(...array1), Math.min(...array2))
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    let newArray = []
    array.forEach(e => {
        if(Array.isArray(e) && e.length === 2) newArray.push(e[0] + e[1]);
        else if(typeof e === 'number') newArray.push(e);
    });

    return newArray;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

    // Creo un array vacío para ir llenandolo
    // LLeno el array con la misma cantidad de elementos que el valor del divisor
    let array = [];
    for (let i = 0; i < divisor; i++) array.push(numero / divisor);
    
    return numero % divisor !== 0 ? false : array;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido

    // creo un array vacío
    // busco el elemento con menor valor en el array
    // busco el elemento con mayor valor en el array
    // array = [1,2,3,4]
    // array[]
    let min = array[0]
    let max = array[0]

    array.forEach(e => {
        if(e < min) min = e;
        if(e > max) max = e;
    })
    // newArray.push(Math.min(...array))
    // newArray.push(Math.max(...array))
    return [min, max];
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};