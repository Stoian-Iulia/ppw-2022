//Задание 1.
console.log("Задание 1"); 

let user = {};
    user.name = "John";
    console.log(user);
    user.surname = "Smith";
    console.log(user);
    user.name = "Pete";
    console.log(user);
    delete user.name;
    console.log(user);



//Задание 2.
console.log("Задание 2"); 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let suma = 0;
  for (let x in salaries) {
    suma += salaries[x];
  }
  
  console.log(suma);



//Задание 3.
console.log("Задание 3");

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  function multiplyNumeric(obj) {
    for (var x in obj) {
      if (isNumeric(obj[x])) {
        obj[x] *= 2;
      }
    }
  }
  
  multiplyNumeric(menu);
  
  console.log( menu.width, menu.height, menu.title );