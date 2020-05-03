//* Функции

function alertValues(elementParameter) {
	console.log(elementParameter.value);
	console.log(elementParameter.className);
}

function logValue(id) {
	var el = document.getElementById(id);
	console.log(el.value);
	console.log(el.className);
}
function getValue(id) {
	var el = document.getElementById(id);
	return el.value;
}

//*Определяем переменные
var lastNameId = 'last-name'
var value = getValue(lastNameId);
window.alert(value);



logValue(lastNameId);

var addressId = 'address'; //*Присваиваем переменной строку - айдишку, которуюможно найти в html
var addressEl = document.getElementById(addressId); //*Находим элемент по айдишнику и результат(найденныйэлемент) присваиваем переменной addressEl
logValue(addressId);



var citiesId = 'state'; //*Присваиваем переменной строку - айдишку, которуюможно найти в html
var citiesEl = document.getElementById(citiesId); //*Находим элемент по айдишнику и результат(найденныйэлемент) присваиваем переменной firstNameEl
logValue(citiesId);



var hobbiesId = 'hobbies'; //*Присваиваем переменной строку - айдишку, которуюможно найти в html
var hobbiesEl = document.getElementById(hobbiesId); //*Находим элемент по айдишнику и результат(найденныйэлемент) присваиваем переменной firstNameEl
logValue(hobbiesId);



var imageId = 'image'; //*Присваиваем переменной строку - айдишку, которуюможно найти в html
var imageEl = document.getElementById(imageId); //*Находим элемент по айдишнику и результат(найденныйэлемент) присваиваем переменной firstNameEl



function alertValue() {
	console.log('1');
	console.log('2');
	console.log('3');
}
alertValue();

//!Алертим аттрибут value у найденного элемента
// window.alert(firstNameEl.value);
// window.alert(lastNameEl.value);
// window.alert(addressEl.value);
// window.alert(citiesEl.innerHTML);
// window.alert(hobbiesEl.value);
// window.alert(imageEl.alt);

