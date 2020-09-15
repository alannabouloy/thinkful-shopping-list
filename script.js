/*global*/
'use strict';

//function to take in input from form and save to list-item variable
function submitForm(){
  $('#shopping-list-form').submit(event => {
    event.preventDefault();
  });
  console.log('form submitted');
}
//function to add list-item to DOM
function addItem(listItem){
  console.log(`${listItem} added`);
}
//function to check item off list
function checkItem(){
  console.log('checkItem is working');
}
//function to delete item
function deleteItem(){
  console.log('deleteItem is working');
}
//main function
function main(){
  submitForm();
  addItem('list');
  checkItem();
  deleteItem();
  console.log('main is working');
}

$(main);