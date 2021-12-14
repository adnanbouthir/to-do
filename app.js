// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
 
// Events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event){
    // prevent default behavior form submit
     event.preventDefault();
    //  todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    // append li as child of div
    todoDiv.appendChild(newTodo);

    // check mark button
    const completed = document.createElement('button');
    completed.innerHTML = '<i class ="fas fa-check"></i>';
    completed.classList.add('complete-btn');
    todoDiv.appendChild(completed);
     // delete mark button
     const trash = document.createElement('button');
     trash.innerHTML = '<i class ="fas fa-trash"></i>';
     trash.classList.add('trash-btn');
     todoDiv.appendChild(trash);
    //  append to list
    todoList.appendChild(todoDiv);
    // clear input value

    todoInput.value = '';
 
}

function deleteCheck (e) {
    const item = e.target;

    // delete todo
    if (item.classList[0] ==='trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}