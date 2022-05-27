/*
Задача №1 - событие загрузки документа и обращение к элементам DOM
Сразу после открытия документа, установить красный цвет фона страницы.
(задачи 1-4 выполнить в одном документе)
*/

// document.addEventListener("DOMContentLoaded", () => {
//     document.body.style.backgroundColor = "red";
// });


/*
Задача 2 - событие загрузки документа и обращение к элементам DOM
Через 3 секунды после загрузки страницы, установить цвет фона в зеленый.
*/

// setTimeout(() => {
//     document.body.style.backgroundColor = "green";
// }, 3000)

/*
Задача 3 - событие click 
Добавить кнопку с текстом Orange, при нажатии на которой, цвет страницы становится оранжевым.
*/

// const firstButton = document.getElementById("firstButton");
// firstButton.addEventListener("click", () => {
//     document.body.style.backgroundColor = "orange";
// });


/*
Задача 4 - добавление элементов в DOM
Добавить в странице нумерованный список(ol). После открытия страницы, каждые 2 секунды, в список добавится новый элемент (li)
с текстом `,,Элемент ${i}`. Заполнение списка остановится когда в списке будет 20 элементов.
У четных элементов будет зеленый фон а у нечетных фиолетовый.
*/


// let list = document.createElement('ol');
// let addElement = () => {
//     let elementOfList = [];
//     let i = 0;
//     let timer = setInterval(() => {
//         i++;
//         elementOfList = document.createElement('li');
//         elementOfList.innerHTML = `Element ${i}`;
//         if (i % 2 == 0) {
//             elementOfList.style.background = 'violet';
//         } else {
//             elementOfList.style.background = 'green';
//         }
//         list.append(elementOfList);
//     }, 2000);
//     setTimeout(() => {
//         clearInterval(timer);
//     }, 40000);
// }
// document.body.append(list);
// addElement();


/*
Задача 6 - добавление элементов в DOM
Добавить в страницу таблицу 8*8. При помощи JS кода закрасить цвет фона чтобы получилась шахматная доска.
Использовать querySelector*
*/

document.writeln("<table border=1>");
  var i=1,j=1,k=1;
  do {
   document.writeln("<tr>");
   i=1; 	
   do {
   	if((i+j)%2!=0)
   	{
     		document.writeln('<td bgcolor="black" width="20px" height="20px">');  
     		document.writeln("      ");
     		document.writeln("</td>");
	}
	else
	{
			document.writeln('<td bgcolor="white" width="20px" height="20px">');  
     		document.writeln("      ");
     		document.writeln("</td>"); 
	}
     i+=1; 
     k+=1;
    } while (i<=8);
   document.writeln("<tr>");
   i=1; 	    
   j+=1; 
   document.writeln("</tr>");  
  }while (j<=8);
document.writeln("</table>")



/*
Задача 7 - Добавить в документ 10 ссылок (внешние которые начинаются на `https://` и внутренние в которых не содержится `https://`)
Цвет текста внешних ссылок сделать красным.
*/

// const links = [
//     "https://google.com", "/page.html", "https://yandex.com", "/page2.html", "https://vk.com","/page3.html", 
//     "https://instagram.com", "/page4.html", "https://megogo.com", "/page5.html"
// ];

// const addLinks = () => {
//     const ul = document.createElement("ul");
//     document.querySelector("body").appendChild(ul);
//     const currying = tag => text => `<${tag}><a href="${text}">${text}</a></${tag}>`;

//     for (let link of links) {
//         let tag = currying("li");
//         let text = tag(`${link}`);
//         ul.innerHTML += text;
//     }
// };

// const setStyles = () => {
//   const hyperLinks = document.querySelectorAll("a");

//   for (const link of hyperLinks) {
//       if (link.innerHTML.includes("http")) {
//           link.style.color = "red";
//       }
//   }
// };

// addLinks();
// setStyles();


/*
Задача 9 - Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification">{{ message }}</div>
 с заданным содержимым. 
Уведомление должно автоматически исчезнуть через 1,5 секунды. 
*/

// const body = document.querySelector("body");

// const options = {
//     top: "20px",
//     right: "20px",
//     message: "Hello!",
//     className: "welcome"
// };

// let setStyles = () => {
//     let elementCss = document.querySelector(".notification");
//     elementCss.style.position = "absolute";
//     elementCss.style.display = "block";
//     elementCss.style.width = "auto";
//     elementCss.style.top = options.top;
//     elementCss.style.right = options.right;
//     elementCss.style.backgroundColor = "yellow";
// };

// let showNotification = options => {
//     body.innerHTML = `<div class ="notification ${options.className}"> ${options.message} </div>`;
//     setStyles();
//     setTimeout(() => {
//         let elementCss = document.querySelector(".notification");
//         elementCss.innerHTML = '';
//     }, 1500)
// };

// showNotification(options);


