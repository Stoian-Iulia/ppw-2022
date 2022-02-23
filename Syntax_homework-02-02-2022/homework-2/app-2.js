<<<<<<< HEAD
var numbers = [1,2,3,4,5,6,7,8,9];

function getEven(num) {
    return num.filter(function(e) {
        return !(e & 1);
    });
}

function arraySum(arr) {
  return getEven(arr).reduce(function(a, b){
    return a + b;
  });
}

alert(arraySum(numbers))
=======
var numbers = [1,2,3,4,5,6,7,8,9];

function getEven(num) {
    return num.filter(function(e) {
        return !(e & 1);
    });
}

function arraySum(arr) {
  return getEven(arr).reduce(function(a, b){
    return a + b;
  });
}

alert(arraySum(numbers))
>>>>>>> b4ae29b0e94e22a6fbe63c9d46edcd258346bb69
