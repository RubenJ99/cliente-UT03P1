'use strict';
const limite = 10;

let book = {
  ISBN: "978 - 84 - 9804 - 654 - 0",
  title: "ElQuijote",
  author: "MigueldeCervantes",
  publicationDate: new Date(1605, 0, 1),
  price: 20,
};

let book2 = {
  ISBN: "988 - 84 - 9804 - 654 - 0",
  title: "ElQuijote",
  author: "MigueldeCervantes",
  publicationDate: new Date(1605, 0, 1),
  price: 20,
};

function create() {
  return [];
}
function isEmpty(list) {
  return (list.length === 0);
}

function isFull(list){
  return (list.length === limite);
}

function size(list) {
  return list.length;
}

function add(list,elem) {
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
//Preguntar a pablo
}

function clear(list) {
	return list = [];
}

function firstElement(list) {
	return list[0];
}

function lastElement(list) {
	return list[list.length-1];
}

function remove(list,index) {
	let aux = list[i];
	list.splice(index,1);
	return aux;
}

function removeElement(list,elem) {
	return list.splice(list.findIndex(elem),1);

}

function set(list,elem,index) {

}



const lista = create();
add(lista,book);
add(lista,book);
add(lista,book);
add(lista,book2);
addAt(lista,book2,1);
console.log(toString(lista));

