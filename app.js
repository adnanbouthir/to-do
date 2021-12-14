// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
 
// Events
todoButton.addEventListener('click', addTodo);

// Functions
function addTodo(event){
    // prevent default behavior form submit
     event.preventDefault();
}