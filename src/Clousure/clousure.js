//CLOUSORE 
//QUE ES UN CLOUSORE?
//Los clousore no son tan utilizados 

//AMBITO LEXICO
const myGlobal = 0;
function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
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