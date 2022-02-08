
const str = String(prompt("Input the string"));


function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

  alert(ucFirst(str));
