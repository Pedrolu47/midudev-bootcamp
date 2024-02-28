// c:/Users/Pedro/Desktop/Boot_Full_Stack/pa_ejem/scripts.js
// Tipos de variables y constantes
/* var saludo = "Hola: ";
let firstName = "Pedro";
const lastName = "Perez";
console.log(firstName + " " + lastName);
firstName = "Juan";
console.log(saludo + firstName + " " + lastName); */
// Tipos
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// 8. Object
/* const list = [];
list.push(1);
list.push(2);
console.log(list);
console.log(list[1]);
list.concat(3, 4, 5);
console.log(list); */

/* const list = []

const anotherList = list.concat(157)

console.log(anotherList) */

/* const persona = {
    name: 'Pedro',
    lastName: 'Perez',
    age: 25
}
console.log(persona);
persona.name = 'Juan';
console.log(persona);
console.log(persona.lastName) */

/* const field = 'age'
persona[field]
console.log(persona[field]) */

// funciones
/* const sum = (a, b) => a + b
console.log(sum(1, 2)) */

// Funcion expresion
const sumar = (operando1, operando2) => {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}

console.log(sumar(1, 2))
function restar(operando1, operando2) {
    return operando1 - operando2
}
console.log(restar(1, 2))
const op1 = 1
const op2 = 2
console.log(sumar(op1, op2))
console.log(sumar(4, "cuatro"))