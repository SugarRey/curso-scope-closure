//VARIABLES

var a; // declarando
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}
bestFruit();
//con esto tenemos, que las variables que se asignes en la parte superior del documento o dentro del documento sin estar dentro del bloque o una funcion, pasan haceres variables glogables

function countries() {
  country = 'Colombia'; // global, asignado por defecto o error sin la funcion var o let
  console.log(country);
}
countries();
console.log(country);

//FUCTION SCOPE
function greeting() {
   let userName = 'Ana'; 
   console.log(userName); //? Ana
 
   if (userName === 'Ana') { //Triple igualdada porque vamos a validar, valor y tipo
     console.log(`Hello ${userName}!`) //? Hello Ana!
   }
 }
 greeting(); // imprime en consola / Ana /Hello Ana!
 // Que asaria si yo trato de llamar la variable userName fuera del llamado
 //console.log(userName) // no es posible, "ReferenceError: userName is not defined", significa que no ah sido definida, esta variable tiene el alcance dentro de la funcion, si se quiciera por fuera no se puede a esto se le llama funcion escope
 
 //BLOCK SCOPE 

//Error SCOPE
 function fruits() {
   if (true) { // validamos a verdadero
     var fruit1 = 'Apple'; // function scope
     let fruit2 = 'Kiwi'; // block scope
     const fruit3 = 'Banana'; // block scope
   }
   console.log(fruit1);
   console.log(fruit2);
   console.log(fruit3);
 }
 //Error solucionado
 fruits();
 function fruits() {
   if (true) { // validamos a verdadero
     var fruit1 = 'Apple'; // function scope
     let fruit2 = 'Kiwi'; // block scope
     const fruit3 = 'Banana'; // block scope
     console.log(fruit2);
     console.log(fruit3);
   }
   console.log(fruit1);
 }
 
 fruits(); 

//REASIGNAR Y REDECLARACION
var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName); 

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // reasignado
console.log(secondName);

// Let
let fruit = 'Apple' // declarar y asignar
fruit = 'Kiwi'; // con let se puede reasignar
console.log(fruit);// ejecutando: si es posible (kiwi)

let fruit = 'Banana'; //pero si quiero volver a declarar y asignar no es posible porque ya existe
console.log(fruit); //ejecutando: no es posible (SyntaxError: Identifier 'fruit' has already been declared)

// const
const animal = 'dog'; // declara y asigna
animal = 'cat'; // no se puede reasignado Ejecutando:(TypeError: Assignment to constant variable.)
const animal = 'Snake'; // nose puede volver ah declarar ejecutando: (SyntaxError: Identifier 'animal' has already been declared)
console.log(animal); //ejecutando ahi si se puede sin reasignar y redeclarar

const vehicles = ["motocicleta"];
vehicles.push("🚗"); // push añade un dato al final del arreglo
console.log(vehicles);

vehicles.pop(); // pop elimina el ultimo datod del arreglo
console.log(vehicles);

//MODO ESTRICTO
'use strict';  // esta funcin no permite reasignar redeclarar, funcional cuado esta declarado y asignado.
pi = 3.1416;
console.log(pi);

function myFunction() {
  return pi = 3.1416;
}

console.log(myFunction());


