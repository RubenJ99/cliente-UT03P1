'use strict';
/**
 *
 * @param {*} elem Parametro por el que pasamos un valor cualquiera y comprueba que sea un objeto Book
 * @returns boolean
 */
function isBook(elem) {
	return (typeof(elem) === 'object' && 'ISBN' in elem && 'title' in elem);
}
/**
 *
 * @param {*} index Parametro por el que pasamos un valor indice y comprobamos que sea un numero y que e
 * @returns boolean
 */
function isValidIndex(index) {
	return (!Number.isNaN(index) && index >= 0 && index < LIMITE_ARR);
}
/**
 * funcion que usamos para inicializar un array vacio
 * @returns array
 */
function create() {
  return [];
}
/**
 *
 * @param {*} list Parametro lista que comprobaremos si esta esta vacia
 * @returns boolean
 */
function isEmpty(list) {
  return (list.length === 0);
}
/**
 *
 * @param {*} list Parametro lista que comprobaremos si esta llena dado una const de limite
 * @returns boolean
 */
function isFull(list){
  return (list.length === LIMITE_ARR);
}
/**
 *
 * @param {*} list Parametro lista del cual comprobaremos la longitud
 * @returns Number
 */
function size(list) {
  return list.length;
}
/**
 *
 * @param {*} list Parametro lista sobre el que operamos
 * @param {*} elem Parametro book que insertaremos sobre la lista pasada
 * @returns Number
 */
function add(list,elem) {
	if(!isBook(elem)) throw 'This element is not a Book';
	if(isFull(list)) throw 'List is full';
  list.push(elem);
  return list.length;
}
/**
 *
 * @param {*} list Parametro lista sobre el que operamos
 * @param {*} elem Parametro book que insertaremos sobre la lista pasada
 * @param {*} index Parametro indice con el que indicaremos la posicion en la que insertar el nuevo libro
 * @returns Number
 */
function addAt(list,elem,index) {
	if(!isBook(elem)) throw 'This element is not a Book';
	if(!isValidIndex(index)) throw 'Index is out of bounds';
	if(isFull(list)) throw 'List is full';
  list.splice(index,0,elem);
  return list.length;
}
/**
 *
 * @param {*} list Parametro lista sobre el que operamos
 * @param {*} index Parametro indice que usaremos para obtener el elemento deseado en la lista
 * @returns Object
 */
function get(list,index) {
	if(!isValidIndex(index)) throw 'Index is out of bounds';
  return list[index];
}
/**
 *
 * @param {*} list Parametro lista sobre el que operaremos, mapearemos este, usando JSON.stringify pasamos los obj a string
 * y luego con join insertamos el separador por elemento
 * @returns Array
 */
function toString(list) {
  let nList = list.map((book)=>{
    return JSON.stringify(book);
  }).join("-\n");

  return nList;
}
/**
 *
 * @param {*} list Parametro lista sobre el que operaremos para encontrar la primera ocurrencia el libro pasado en el siguiente param
 * @param {*} elem Parametro en el que pasamos el objeto del cual queremos saber su primera ocurrencia
 * @returns Number
 *
 * Busque una manera mas bonita de hacer este y el lastindexof, me quede cerca pero tenia problemas con los retornos
 */
function indexOf(list,elem) {
	if(!isBook(elem)) throw 'This element is not a Book';
	let idx = -1;
	for (let i = 0; i < list.length; i++) {
		if(elem.ISBN === list[i].ISBN){
			idx = i;
			break;
		}
	}
	return (idx >= 0) ? idx : 1;
}
/**
 *
 * @param {*} list Parametro lista sobre el que operaremos para encontrar la ultima ocurrencia el libro pasado en el siguiente param
 * @param {*} elem Parametro en el que pasamos el objeto del cual queremos saber su ultima ocurrencia
 * @returns Number
 */
function lastIndexOf(list,elem) {
	if(!isBook(elem)) throw 'This element is not a Book';
	let idx = -1;
	for (let i = list.length-1; i > 0; i--) {
		if(elem.ISBN === list[i].ISBN){
			idx = i;
			break;
		}
	}
	return (idx >= 0) ? idx : -1;
}
/**
 *
 * @param {*} list Parametro en el cual pasamos la lista de la cual queremos saber el maximo de capacidad del mismo
 * @returns Number
 */
function capacity(list) {
	return LIMITE_ARR;
}

/**
 *
 * @param {*} list Parametro en el cual pasamos la lista que queremos limpiar
 * @return Void
 */
function clear(list) {
	list.length = 0;
}
/**
 *
 * @param {*} list Parametro en el cual pasamos la lista de la cual se retornara el primer elemento
 * @returns Object
 */
function firstElement(list) {
	if(isEmpty(list)) throw 'List is empty';
	return list[0];
}
/**
 *
 * @param {*} list Parametro en el cual pasamos la lista de la cual se retornara el ultimo elemento
 * @returns Object
 */
function lastElement(list) {
	if(isEmpty(list)) throw 'List is empty';
	return list[list.length-1];
}
/**
 *
 * @param {*} list Parametro en el cual pasamos la lista sobra la que realizaremos la operacion de borrado
 * @param {*} index Parametro indice que usaremos para marcar la posicion de la lista que borraremos
 * @returns Object
 */
function remove(list,index) {
	if(!isValidIndex(index)) throw 'Index is out of bounds';
	let aux = list[index];
	list.splice(index,1);
	return aux;
}
/**
 *
 * @param {*} list Parametro en el cual pasamos la lista sobra la que realizaremos la operacion de borrado
 * @param {*} elem Parametro tipo Book del cual borraremos sus ocurrencias de la lista
 * @returns Boolean
 */
function removeElement(list,elem) {
	if(!isBook(elem)) throw 'This element is not a Book';
	return (list.splice(list.findIndex(obj => elem),1))? true : false;

}
/**
 *
 * @param {*} list Parametro en el cual pasamos la lista sobra la que realizaremos la operacion de insertado
 * @param {*} elem Parametro en el cual tenemos un Book el cual insertaremos dentro de la lista
 * @param {*} index Parametro indice el cual usaremos para indicar la posicion dentro de la lista donde insertaremos el anteriro elemento,
 * previamente se debe de guardar el elemento que estaba en esa posicion y retornarlo
 * @returns Object
 */
function set(list,elem,index) {
	if(!isBook(elem)) throw 'This element is not a Book';
	if(!isValidIndex(index)) throw 'Index is out of bounds';
	let prev = list[index];
	list[index] = elem;
	return prev;
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
	let list = create();
	console.log("Esta la lista vacia? " + isEmpty(list));
	console.log("Esta la lista llena? " + isFull(list));
	console.log("El tamaño de la lista es: " + size(list));
	try {
		console.log("Elemento añadido, nuevo tamaño: " + add(list,book));
	} catch (error) {console.error(error)}
	console.log("Elemento añadido en la posicion especificada, nuevo tamaño: " + addAt(list,book2,0));
	try {
		console.log("El elemento que ha seleccionado es este: " + JSON.stringify(get(list,0)));
	} catch (error) { console.error(error)}
	console.log("Esta es toda la lista: " + toString(list));
	console.log("Primera posicion del objeto deseado en la lista: " + indexOf(list,book2));
	add(list,book3);
	add(list,book);
	add(list,book3);
	console.log("Ultima posicion del objeto deseado en la lista: " + lastIndexOf(list,book3));
	console.log("Capacidad maxima de la lista: " + capacity(list));
	let list2 = [...list];
	console.log("Tamaño de la lista antes del borrado: " + size(list2));
	clear(list2);//No capturo porque las void function retorna undefined
	console.log("Despues del borrado: " + size(list2));
	console.log("Primer elemento de la lista: " + JSON.stringify(firstElement(list)));
	console.log("Ultimo elemento de la lista: " + JSON.stringify(lastElement(list)));
	console.log("Este es el elemento eliminado dado index: " + JSON.stringify(remove(list,3)));
	console.log("Se ha conseguido eliminar el elemento?: " + removeElement(list,book3));
	console.log("Este es el elemento que ha sido modificado: " + JSON.stringify(set(list,book2,0)));
}
//ENTRADA DE EJECUCION
testing();
