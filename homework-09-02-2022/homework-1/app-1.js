//Задание 1. Создайте массив из n чисел и выводите его в консоль 5 разными способами:
console.log("Задание 1")
const arr= [1, 2, 3, 4];

//1 способ
console.log("---Способ 1")

for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] );
  }

//2 способ
console.log("---Способ 2")

let index = 0;
while (index < arr.length) {
    index++
}
console.log(arr);



//3 способ
console.log("---Способ 3")

index = 0;
do {
    index++
}while (index < arr.length);
console.log( arr );


//4 способ
console.log("---Способ 4")

for (let num of arr) {
    
    console.log( num ); 
}


//5 способ
console.log("---Способ 5")

arr.forEach(console.log);


//6 способ
console.log("---Способ 6")

let newArr = arr.map(item => item + 1);
console.log(newArr);



//Задание 2. Создать массив который содержит минимум 5 учеников

/*const students = [
    {
        name: "Alex",
        marks: [10, 8, 7, 8, 6]},
    {
        name: "John",
        marks: [8, 10, 2, 5, 4]},
    {
        name: "Helen",
        marks: [8, 10, 7, 5, 6]},
    {
        name: "Denis",
        marks: [2, 7, 2, 5, 6]},
    {
        name: "Julia",
        marks: [8, 7, 9, 5, 7]
    }
]


let average = [];
            let findAverage = () => {
            for (let i = 0; i < students.length; i++) {
                average.push({name: students[i].name, average:((students[i].marks.reduce((prev, curr) => curr + prev))/students[i].marks.length)});
                
            }
           alert(students[i].marks);
            }
*/


//Задание 3. Создать массив и произвести над ним следующие 5 операций:
console.log("Задание 3");
let styles = ["Джаз", "Блюз"];
console.log (styles);
styles.push("Рок-н-ролл");
console.log (styles);
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log (styles);
styles.unshift("Рэп", "Регги")
console.log (styles);




//Задание 4. Обработка массива
console.log("Задание 4");
console.log("Задание не отображается в консоли, оно выводится в панель клиента")

/*function sumInputNumbers() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  alert( sumInputNumbers() );

*/




//Задание 5 
console.log("Задание 5");
function squareMe(fn,arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(square(arr[i]));
    }
    return newArr;
}
 function square(x) {return x*x;}
 console.log(squareMe(square,[1,2,3]));//1,4,9
console.log(squareMe(square,[]));//[]




//Заданине 6.
console.log("Задание 6");
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array6.splice(4, 0, 0, 0, 0);
console.log( array6 );



//Задание 7.
console.log("Задание 7");
let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log( array7.slice(2, 5) );


//Задание 8.
console.log("Задание 8");
console.log("Входные параметры изменяются в коде");
const colors = ["red", "green", "blue"];
console.log(checkColor("blue"));

function checkColor(color){
 	console.log( colors.indexOf(color));
}



//Задание 9.
console.log("Задание 9");
let array9 = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, 'word', 7, 8, false, 9, 100]
console.log(filter()); //фильтруем элементы по заданному условию
function filter(){
	return array9.filter(function(array9){ return typeof(array9) == "number"});
}


//Задание 10.
console.log("Задание 10");
let actualArr = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];

let filteredArr = actualArr.filter(function(item, index) {
  if (actualArr.indexOf(item) == index)
    return item;
});
filteredArr.sort(function(a, b) 
{
    return a - b; 
});
console.log( filteredArr);