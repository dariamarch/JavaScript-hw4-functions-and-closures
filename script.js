
//Функции

//1.	Напишите функцию max, которая сравнивает два числа и возвращает большее: 
//console.log( max(0, -1) ); // 0

"use strict"

function max(x,y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}
}
console.log( max(0, -1) );

//2.	Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:
//console.log( min(0, -1, 100, 500, 100500) ); // -1

function min(...args) {
	args.sort(function(a, b) {
	  return a - b;
	});
	return args[0];
  }
  console.log( min(0, -1, 100, 500, 100500));

// 3.	Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:	
//a.	Отфильтруйте пользователей младше 18 лет
//b.	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
//c.	Сформируйте новый массив, который содержит только полное имя пользователей

let users = [
	{
		firstname : "John",
		lastname : "Doe",
		age : 25,
	},
	{
		firstname : "Kate",
		lastname : "Black",
		age : 35,
	},
	{
		firstname : "Tom",
		lastname : "Jackson",
		age : 17,
	},
	{
		firstname : "Megan",
		lastname : "Fox",
		age : 16,
	},
	{
		firstname : "Jack",
		lastname : "White",
		age : 23,
	},
	{
		firstname : "Jim",
		lastname : "Grey",
		age : 45,
	},
	{
		firstname : "Missy",
		lastname : "Donton",
		age : 39,
	},
	{
		firstname : "Anna",
		lastname : "Silver",
		age : 22,
	},
	{
		firstname : "Mike",
		lastname : "Robinson",
		age : 27,
	},
	{
		firstname : "Mark",
		lastname : "Wolsh",
		age : 34,
	},
]


let younger18 = users.filter(function(young) {
	return young.age < 18;
  });
  console.log(younger18);

  
users.forEach(function(item, i, users) {
	item.fullName = item.firstname+" "+item.lastname;
	});
	 console.log(users);
	 
let onlyFullName = users.map(function(fn) {
	return fn.fullName;
  });
   console.log(onlyFullName);
  
  // 4.	Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.  
  
  function x(...args) {
	delete args[0];
    args.splice(0, 1);
	return args;
  }
  console.log( x(8, 7, -1, 100, 500, 100500));

  //5.	Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

function x(...args) {
	return args.concat(11, 12, 13, 14);
}
console.log( x(3, 7, -1, 100, 500, 100500));

 // 6.	Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены.
 // Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.
//var source = {firstname: 'Tom', age: 10}
//var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
//console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

let source = { firstname: "Tom", age: 10 };
function extend(...a) {
  let obj = {};

  for (let i of a) {
    obj = {...obj, ...i};
  }
  return obj;
}
let s = extend(source, { firstname: "John" }, { lastname: "Doe" });

console.log(s);


 // 7.	Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
//				<имя_автора>, <дата>
//				<текст_сообщения>
//setComment('2016-11-02', 'Everything is ok', 'John');

//John, 2016-12-22
//Everything is ok

//setComment('2016-11-02', 'You could do it better!');

//Anonymous, 2016-12-22
//You could do it better!

function setComment(date, message, author = 'Anonymous')  {
	if ((date === undefined) || (message === undefined)) {
		alert("Ошибка!");
	} else {
		console.log(author + ", " +  date + "\n\r" + message);
	}
	}
	setComment('2016-11-02', 'Everything is ok', 'John');
	setComment('2016-11-02', 'You could do it better!');


//	Замыкания
//1.	Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной
// метки и служит для замера времени выполнения другого кода:
//var timer = createTimer();
//alert('!')  // код, время выполнения которого нужно измерить
//alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

function createTimer() {
	let a = performance.now();
	alert('!');
  
	return function () {
  let b = performance.now();
		return ('Это заняло ' + (b - a) + ' мкс.');
	}
}  
let timer = createTimer();
alert(timer());
  

//2.	Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию,
// которая добавляет к первому параметру второй. Функция работает по следующему принципу:
//1) var hello = createAdder('Hello, ');
	//alert( hello('John') ); // Hello, John
	//alert( hello('Harry') ); // Hello, Harry
//2) var plus = createAdder(5);
	//alert( plus(1) ); // 6
	//alert( plus(5) ); // 10

             //1)

function createAdder(a) {
	return function hello(b) {
	  return (a + b);
	}
  }
  var hello = createAdder('Hello, ');
  alert( hello('John') ); // Hello, John
  alert( hello('Harry') ); // Hello, Harry

              //2)

function createAdder(a) {
	 return function plus(b) {
		return (a + b);
	  }
	}
	var plus = createAdder(5);
	alert( plus(1) ); // 6
	alert( plus(5) ); // 10



	  