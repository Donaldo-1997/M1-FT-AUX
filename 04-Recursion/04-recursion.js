// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo
  if(array.length === 0) return 1

  return array.pop() * producto(array);
  //         1       * 1
  //         2       * 1
  //         5       * 2
};
// CALL STACK:

//  producto([])
//  producto([1])
//  producto([1,2])
//  producto([1,2,5]) --> 10
function producto2(array, count = 0){

  if(count === array.length) return 1

  return array[count] * producto2(array, count++)
}
// CALL STACK:

//  producto([1,2,5]) --> 10

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
  //    prop2:{value:5}     
  //     school: {
    //         hogwarts: {
      //             headmaster:{
        //               name: {
          //                 first: "Albus",
          //                 last: "Dumbledore"
          //               }
          //             }
          //         }
          //     } 



// let obj = {
//   school: {
//     hogwarts: {
//       headmaster: {
//         name: {
//           first: "Albus",
//           last: "Dumbledore",
//         },
//       },
//     },
//   },
//   prop1:5,
//   prop2:6
// };

const isThere = function (obj, value){
  let found = false
  for (const prop in obj) {
    if(typeof obj[prop] === 'object') found = isThere(obj[prop], value)
    if(obj[prop] === value) {
      found = true
      return found
    }
  }
  return found
};

// console.log(isThere(obj, "Albus"))

module.exports = { producto, isThere };
