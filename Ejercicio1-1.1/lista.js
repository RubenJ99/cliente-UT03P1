'use strict';
function create() {
  return [];
}
function isEmpty(list) {
  return (list.length === 0);
}

function isFull(list){
  return (list.length === LIMITE_ARR);
}

function size(list) {
  return list.length;
}

function add(list,elem) {
	if(typeof(elem) === 'object' || !'ISBN' in elem || !'title' in elem) throw 'Este objeto no es un libro';
  list.push(elem);
  return list.length;
}

function addAt(list,elem,index) {
  list.splice(index,0,elem);
  return list.length;
}

function get(list,index) {
  return list[index];
}

function toString(list) {
  let nList = list.map((book)=>{
    return JSON.stringify(book);
  }).join("-\n");

  return nList;
}
//Tiene que haber una forma de hacerlo asi

// function indexOf(list,elem) {
// 	let i = 0;
//   list.forEach((item,index) => {
// 		if(item.ISBN === elem.ISBN){
// 			i = index;
// 		}
// 	});
// 	return (i >= 0) ? i : 1;
// }

function indexOf(list,elem) {
	let idx = -1;
	for (let i = 0; i < list.length; i++) {
		if(elem.ISBN === list[i].ISBN){
			idx = i;
			break;
		}
	}
	return (idx >= 0) ? idx : 1;
}

function lastIndexOf(list,elem) {
	let idx = -1;
	for (let i = list.length-1; i > 0; i--) {
		if(elem.ISBN === list[i].ISBN){
			idx = i;
			break;
		}
	}
	return (idx >= 0) ? idx : -1;
}

function capacity(list) {
	return LIMITE_ARR;
}

function clear(list) {
	list.length = 0;
}

function firstElement(list) {
	return list[0];
}

function lastElement(list) {
	return list[list.length-1];
}

function remove(list,index) {
	let aux = list[index];
	list.splice(index,1);
	return aux;
}

function removeElement(list,elem) {
	return list.splice(list.findIndex(obj => elem),1);

}

function set(list,elem,index) {
	let prev = list[index];
	list[index] = elem;
	return prev;
}

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


function testing() {
	let list = create();
	console.log("Esta la lista vacia? " + isEmpty(list));
	console.log("Esta la lista llena? " + isFull(list));
	console.log("El tamaño de la lista es: " + size(list));
	console.log("Elemento añadido, nuevo tamaño: " + add(list,book));
	console.log("Elemento añadido en la posicion especificada, nuevo tamaño: " + addAt(list,book2,0));
	console.log("El elemento que ha seleccionado es este: " + JSON.stringify(get(list,0)));
	console.log("Esta es toda la lista: " + toString(list));
	console.log("Primera posicion del objeto deseado en la lista: " + indexOf(list,book2));
	add(list,book3);
	add(list,book);
	add(list,book3);
	console.log("Ultima posicion del objeto deseado en la lista: " + lastIndexOf(list,book3));
	console.log("Capacidad maxima de la lista: " + capacity(list));
	let list2 = [...list];
	console.log("Tamaño de la lista antes del borrado: " + size(list2));
	clear(list2);
	console.log("Despues del borrado: " + size(list2));
	console.log("Primer elemento de la lista: " + JSON.stringify(firstElement(list)));
	console.log("Ultimo elemento de la lista: " + JSON.stringify(lastElement(list)));
	console.log("Este es el elemento eliminado dado index: " + JSON.stringify(remove(list,3)));
	console.log("Este es el elemento eliminado dado un elem: " + JSON.stringify(removeElement(list,book3)));
	console.log("Este es el elemento que ha sido modificado: " + JSON.stringify(set(list,book2,0)));
}

testing();
