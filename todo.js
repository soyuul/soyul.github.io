const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos =[];
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function listSubmitEvent(todoValue){
    const li = document.createElement("li");
    li.id = todoValue.id;

    const span = document.createElement("span");
    span.innerHTML = todoValue.text;
    
    const button = document.createElement("button");
    button.innerHTML = "✔️";
    button.addEventListener("click", function(e){
        const deleteBtn = e.target.parentElement;
        deleteBtn.remove();    
        toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteBtn.id));
        saveToDos();
    })

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", function(e){
    e.preventDefault();

    const todoValue = todoInput.value;
    todoInput.value = "";
    const newTodoObj ={
        text: todoValue,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    listSubmitEvent(newTodoObj);
    saveToDos();
})

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(listSubmitEvent);
}

