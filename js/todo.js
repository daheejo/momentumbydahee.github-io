const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //값 추가할 수 있도록 let선언으로 변경

function saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // localstorage 데이터를 string화
                                                        //왜냐하면 localstorage에선 문자열밖에 저장못하기 때문에
}

function deleteTodo(event) {
    const li = event.target.parentElement;//target = 클릭된 html element // parentElement를 알아야 어떤 todo의 삭제 버튼인지 앎
    li.remove();
    toDos = toDos.filter((todo)=>todo.id !== parseInt(li.id)); 
    saveTodos();
}   //li.id 는 string이므로 parseInt로 정수형으로 바꿔야함

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    button.addEventListener("mouseenter",function() {button.style.background = "black";});
    button.addEventListener("mouseleave",function() {button.style.background = "transparent";})
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; //newTodo에 카피
    todoInput.value = ""; //따라서 newTodo엔 영향 없음. 제출 후 input칸을 빈칸으로 만들기
    const newTodoObj = {
        text:newTodo,
        id:Date.now() //newTodo마다 랜덤 id 생성
    }
    toDos.push(newTodoObj); //newtodo 생성 시마다 toDos array에 추가
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos); //string을 js array로 변환 
    toDos = parsedTodos; //todo 복원
    parsedTodos.forEach(paintTodo); //array에 있는 요소 별로 함수 처리
}