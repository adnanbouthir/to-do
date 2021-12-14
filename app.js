// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
 
// Events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click' ,filterTodo);

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

// delete and checkmark function
function deleteCheck (e) {
    const item = e.target;

    // delete todo
    if (item.classList[0] ==='trash-btn') {
        const todo = item.parentElement;
        // delete animation 
        todo.classList.add('fall');
        todo.addEventListener('transitionend' ,() => {
            todo.remove();
        })
    }

    // check todo 
    if (item.classList[0] ==='complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}



// filter to do 

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
        }
    })
}