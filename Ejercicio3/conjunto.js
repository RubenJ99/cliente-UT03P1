'use strict';
//RUBEN JUAREZ PEREZ 1DAW
/**
 *
 * @param {*} elem Parametro por el que pasamos un valor cualquiera y comprueba que sea un objeto Book
 * @returns boolean
 */
 function isBook(elem) {
	return (typeof(elem) === 'object' && 'ISBN' in elem && 'title' in elem);
}


function create() {
	return new Set();
}

function isEmpty(list) {
	return list.size === 0;
}

function size(list) {
	return list.size;
}

function add(list,elem) { //Preguntar pablo si es a pillar
	if(!isBook(elem)) throw 'This element is not a Book';
	if(list.has(elem)) throw 'This element is already contained in this set';
	list.add(elem);
	return list.size;
}

function has(list,elem) {
	if(!isBook(elem)) throw 'This element is not a Book';
	return list.has(elem);
}

function toString(list) {
	let str = "";
	list.forEach(book => {
		str += JSON.stringify(book);
		str += "-\n";
	});
	return str
}

function clear(list) {
	list.size = 0;
}

function remove(list,elem) { //Preguntar si es bait
	if(!isBook(elem)) throw 'This element is not a Book';
	list.forEach(book =>{
		if(book.ISBN === elem.ISBN){
			list.delete(book);
			return true
		}
	});
	return false;
}
//DEFINICION DE DATOS PARA TESTING
const LIMITE_ARR = 10;
const book = {
  ISBN: "978 - 84 - 9804 - 654 - 0",
  title: "ElQuijote",
  author: "MigueldeCervantes",
  publicationDate: new Date(1605, 0, 1),
  price: 20,
};
const book2 = Object.assign({},book);
const book3 = Object.assign({},book);
book2.ISBN = "100 - 84 - 9804 - 654 - 0";
book3.ISBN = "200 - 84 - 9804 - 654 - 0";

//FUNCION DE TESTEO DE TODO EL FICHERO
function testing() {
const libs = create();
console.log("Esta el set vacio: " + isEmpty(libs));
add(libs,book);
add(libs,book2);
add(libs,book3);
console.log(toString(libs));

}

//ENTRADA DE EJECUCION
testing();
