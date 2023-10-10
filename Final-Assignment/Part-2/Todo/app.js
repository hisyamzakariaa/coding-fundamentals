const todos = JSON.parse(localStorage.getItem('todos')) || []
const deletedTodos = JSON.parse(localStorage.getItem('deletedTodos')) || []
const addBtn = document.querySelector(".todo-form button")
const form = document.querySelector('.todo-form')


function syncTodosToDOM(){
    const todoList = document.querySelector(".todo-list")
    todoList.innerHTML = ''
    
    todos.forEach((todo,index) => {
        const todoItem = document.createElement("div")
        todoItem.classList.add("todo-list-item")
        
        todoItem.innerHTML = `
        <div>
        <p>${todo.title}</p>
        <div class="star-container ${index}">
        <a href="#" class="bi-star-fill"></a>
        <a href="#" class="bi-star-fill"></a>
        <a href="#" class="bi-star-fill"></a>
        <a href="#" class="bi-star-fill"></a>
        <a href="#" class="bi-star-fill"></a>
        </div>
        </div>
        <div class="button-container">
        <button type="submit" onclick="removeTodo(${index})" class="delete-btn">Delete</button>
        </div>
        `
        todoList.appendChild(todoItem)
    });
    localStorage.setItem('todos', JSON.stringify(todos))
}



function addTodo(){
    const input = document.querySelector('.todo-form input')
    const value = input.value
    if(value == ""){
        alert("Please insert new task")
        return
    }
    const newTodo = {
        title: value,
        isCompleted: false,
        isPriority: false
    }

    todos.push(newTodo)
    syncTodosToDOM()

    input.value = ''
}


function removeTodo(index){
    let x = todos.splice(index,1)
    deletedTodos.push(Object.values(x)[0])
    syncTodosToDOM()
    syncDeletedTodosToDOM()

}

function syncDeletedTodosToDOM(){

    const deletedTodoList = document.querySelector(".deleted-todo")
    deletedTodoList.innerHTML = ''
    
    deletedTodos.forEach((todo,index) => {
        const deletedTodoItem = document.createElement("div")
        deletedTodoItem.classList.add("deleted-todo-item")
        
        deletedTodoItem.innerHTML = `
        <p>${todo.title}</p>
        <div>
            <button type="submit" onclick="recoverTodo(${index})">Recover</button>
            <button type="submit" onclick="removeDeletedTodo(${index})">Delete</button>
        </div>
        `
        deletedTodoList.appendChild(deletedTodoItem)
    });
    localStorage.setItem('deletedTodos', JSON.stringify(deletedTodos))
}


function removeDeletedTodo(index){
    deletedTodos.splice(index,1)
    syncTodosToDOM()
    syncDeletedTodosToDOM()
}


function recoverTodo(index){
    let x = deletedTodos.splice(index,1)
    todos.push(Object.values(x)[0])
    console.log(todos)
    syncTodosToDOM()
    syncDeletedTodosToDOM()
}
function prioritizeTodo(){
    let stars = document.querySelectorAll(".star-container a")
    stars.forEach((item,index1) =>{
        item.addEventListener('click', () =>{
            stars.forEach((star,index2) => {
                index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
            })
        })
    })
}

form.addEventListener('submit', (e) => e.preventDefault())
syncTodosToDOM()
syncDeletedTodosToDOM()
prioritizeTodo()
