'use strict';
const limite = 10;

let book = {
  ISBN: 978 - 84 - 9804 - 654 - 0,
  title: "ElQuijote",
  author: "MigueldeCervantes",
  publicationDate: new Date(1605, 0, 1),
  price: 20,
};

function create() {
  let list = [];
  return list;
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
    book
  }).join("-");

  return ""+nList;
}

function indexOf(list,elem) {
  
}

function lastIndexOf(list,elem) {
  
}

function capacity(list) {
  
}

function clear(list) {
  
}

function firstElement(list) {
  
}

function lastElement(list) {
  
}

function remove(list,index) {
  
}

function removeElement(list,elem) {
  
}

function set(list,elem,index) {
  
}



const lista = create();

add(lista,book);
add(lista,book);
add(lista,book);
console.log(toString(lista));

