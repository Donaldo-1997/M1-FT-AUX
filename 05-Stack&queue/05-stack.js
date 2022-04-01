const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado oro : raM odaluzA oro


function efectoEspejo(str){  
    // crear mi stack
    // Separar las palabras del string
    // A cada palabra darle la vuelta
    // Añadir cada palabra al stack
    // Las palabras que estan en el stack, unirlas en un solo string
    let stack = new Stack()
    let word = ''

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== ' '){
            word = str[i] + word
        } else {
            stack.array.push(word)
            word = ''
        }   
    }

    stack.array.push(word) // Aquí añado la ultima que me quede espues de que el ciclo haya terminado

    return stack.array.join(' ')
};




module.exports = {
    efectoEspejo,
   
}