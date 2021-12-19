let addTodoButton = document.getElementById("addTodo");
let listTodos = document.getElementById("todos");
let inputField = document.getElementById("inputField");

addTodoButton.addEventListener("click", () => {
  let para = document.createElement("p");
  para.classList.add("paraStyle");
  para.innerText = inputField.value;
  todos.appendChild(para);
});
