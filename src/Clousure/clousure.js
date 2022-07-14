//CLOUSORE O CLAUSURA
//QUE ES UN CLOUSORE?
//Los clousore no son tan utilizados 
//Los closures permiten acceder al ámbito de una función exterior desde una función interior. En javascript, los closures se crean cada vez que una función es creada.
//Los closures no son siempre utilizados.
//Un closure es cuando una función accede a una variable fuera de su contexto.
//Al trabajar con closures entra en juego el concepto de alcance de las variables.

//AMBITO LEXICO
const myGlobal = 0;
function myFunction() { //esta funcion va tener mas funciones dentro de esta
  const myNumber = 1; 
  console.log(myGlobal);

  function parent() { // function interna, aqui ya tenemos un CLOUSURE
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}
myFunction();
//ah eso hace referencia el ambito lexico, significa que la accesibilidad de las variables esta determinada por lasposicion de las misma dentro de los ambitos anidados que no es mas que cada una de kas funciones que estan aqui

//EJEMPLO DE CLOUSURE
// EN javascript as clousure proporcionan acceso al ambito lexico.


function greeting() {
   let username = 'Oscar';
 
   function displayUserName() {
     return `Hello ${username}`;
   }
   return displayUserName;
 }
 
 const g = greeting();//g esta igualando a la funcion greeting()
 console.log(g); 
 console.log(g());
//ejemplo de la caja de monedas
function moneyBox(coins) {
   let saveCoins = 0;
   saveCoins += coins;
     console.log(`MoneyBox: $${saveCoins}`);
   }

moneyBox(5);
moneyBox(5);

function moneyBox() {
   let saveCoins = 0;
   function countCoins(coins) {
     saveCoins += coins;
     console.log(`MoneyBox: $${saveCoins}`)
   }
   return countCoins;
 }
 
 const myMoneyBox = moneyBox();
 myMoneyBox(5);
 myMoneyBox(5);
 myMoneyBox(15);
 
 const moneyBoxAna = moneyBox();
 moneyBoxAna(10);
 moneyBoxAna(20);
 moneyBoxAna(5);


/* HOINSTING */ // elevacion
//

function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }
  return message;
}
console.log(checkAge(21)); 