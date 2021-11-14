'use strict';
//RUBEN JUAREZ PEREZ 2DAW

/**
 *
 * @param {*} elem Parametro por el que pasamos un valor cualquiera y comprueba que sea un objeto Book
 * @returns boolean
 */
 function isBook(elem) {
	return (typeof(elem) === 'object' && 'ISBN' in elem && 'title' in elem);
}

/**
 * Funcion para inicializar un nuevo conjunto
 * @returns Set
 */
function create() {
	return new Set();
}
/**
 *
 * @param {*} list Pasado un set comprueba si esta vacio y retorna verdadero o falso
 * @returns Boolean
 */
function isEmpty(list) {
	return list.size === 0;
}

/**
 *
 * @param {*} list Dado un set comprueba la longitud de este y la retorna
 * @returns Number
 */
function size(list) {
	return list.size;
}
/**
 *
 * @param {*} list Set pasado por parametro solbre el que operaremos
 * @param {*} elem Objeto tipo book que comprobaremos si ya se encuentra en el set filtrando por ISBN
 * @returns Boolean
 */
 function has(list,elem) {
	if(!isBook(elem)) throw 'This element is not a Book';
	if(!(regexISBN.test(elem.ISBN))) throw 'ISBN does not match the required style';
	list.forEach(book => {
		if(book.ISBN.localeCompare(elem.ISBN)) return true;
	});
	return false;
}
/**
 *
 * @param {*} list Set pasado por parametro sobre el que se opera
 * @param {*} elem Objeto tipo book que se añadira al set en caso de que no este repetido y retorna la nueva longitud
 * @returns Number
 */
function add(list,elem) {
	if(!isBook(elem)) throw 'This element is not a Book';
	if(!(regexISBN.test(elem.ISBN))) throw 'ISBN does not match the required style';
	if(has(list,elem)) throw 'This element is already contained in this set';
	list.add(elem);
	return list.size;
}

/**
 *
 * @param {*} list Set sobre el que operamos, pasamos por todos sus valores y los pasamos a string, concatenandolos
 * sobre una variable auxiliar que sera retornada con todos sus valores
 * @returns String
 */
function toString(list) {
	let str = "";
	list.forEach(book => {
		str += JSON.stringify(book);
		str += "-\n";
	});
	return str
}
/**
 *
 * @param {*} list Set pasado por parametro para limpiarlo, usamos la funcion clear ya que size es un getter y
 * no podemos ponerlo a 0  como la lenght en un array */

function clear(list) {
	list.clear();
}
/**
 *
 * @param {*} list Set pasado por parametro sobre el que operaremos
 * @param {*} elem Objeto tipo book pasado por parametro que eliminaremos teniendo en cuenta su ISBN como clave,
 * en caso de encontrarse se eliminara y retornara verdadero o falso
 * @returns Boolean
 */
function remove(list,elem) {
	if(!isBook(elem)) throw 'This element is not a Book';
	if(!(regexISBN.test(elem.ISBN))) throw 'ISBN does not match the required style';
	if(has(list,elem)) {
		list.remove(elem);
		return true;
	}
	return false;
}



//DEFINICION DE DATOS PARA TESTING
const LIMITE_ARR = 9;//Max 10
const regexISBN = /\d{3}\-\d{2}\-\d{4}\-\d{3}\-\d/;
const book = {
  ISBN: "978-84-9804-654-0",
  title: "ElQuijote",
  author: "MigueldeCervantes",
  publicationDate: new Date(1605, 0, 1),
  price: 20,
};
const book2 = Object.assign({},book);
const book3 = Object.assign({},book);
book2.ISBN = "100-84-9804-654-0";
book3.ISBN = "200-84-9804-654-0";

//FUNCION DE TESTEO DE TODO EL FICHERO
function testing() {
	try {
		let libs = create();
		console.log("Esta el set vacio: " + isEmpty(libs));
		console.log("El tamaño del set es: " + size(libs));
		console.log("Libro añadido. Nuevo tamaño: " + add(libs,book3));
		console.log("Libro añadido. Nuevo tamaño: " + add(libs,book));
		console.log("Libro añadido. Nuevo tamaño: " + add(libs,book2));
		console.log("¿Este set contiene ya el objeto 'Book2'?" + has(libs,book2));
		console.log("Este es el contenido del set: " + toString(libs));
		clear(libs);
		console.log("Despues usar clear, este es el nuevo tamaño: " + size(libs));
		add(libs,book2);
		add(libs,book);
		console.log("Despues de insertar unos libros," +
		" vamos a eliminar el book2 de la lista, si es que existe: " + remove(libs,book2));
	} catch (e) {console.error(e);}

}

//ENTRADA DE EJECUCION
testing();

