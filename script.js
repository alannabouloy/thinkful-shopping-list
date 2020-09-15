/*global $*/
'use strict';

//function to take in input from form and save to list-item variable
function main(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault(); 
    let listItem = $('#shopping-list-entry').val();
    addItem(listItem);
    checkItem();
    deleteItem();
    console.log('main is working');
    
  });
}
//function to add list-item to DOM
function addItem(listItem){
  $('.shopping-list').append(` <li>
    <span class="shopping-item">${listItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
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

$(main);