const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; 

function saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // localstorage 데이터를 string화
                                                        //왜냐하면 localstorage에선 문자열밖에 저장못하기 때문에
}

function deleteTodo(event) {
    const li = event.target.parentElement;//target = 클릭된 html element // parentElement를 알아야 어떤 todo의 삭제 버튼인지 앎
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "DELETE";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; //newTodo에 카피
    todoInput.value = ""; //따라서 newTodo엔 영향 없음. 제출 후 input칸을 빈칸으로 만들기
    toDos.push(newTodo); //newtodo 생성 시마다 toDos array에 추가
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos); //string을 js array로 변환 
    parsedTodos.forEach(paintTodo); //array에 있는 요소 별로 함수 처리
}