let todoList = [];

const button = document.querySelector(".button");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

function print() {
  let html = "";

  for (let i = 0; i < todoList.length; i++) {
    const element = todoList[i];

    html += `
      <li>
        <div class="todo-inner">
          <p class="todo-text">${element}</p>
          <button onclick="eliminarTodo(${i})" class="todo-btn">Delete</button>
          <button onclick="actualizarTodo(${i})" class="todo-btn">Update</button>
        </div>
      </li>
    `;
  }

  input.value = "";
  list.innerHTML = html;
}

function agregarTodo() {
  if (input.value.length > 0) {
    todoList.push(input.value);
    print();
  }
}
button.addEventListener("click", agregarTodo);

function eliminarTodo(indice) {
  todoList = todoList.filter((el, i) => {
    if (i === indice) {
      return false;
    }
    return true;
  });
  print();
}

function actualizarTodo(indice) {
  if (input.value.length > 0) {
    todoList = todoList.map((el, i) => {
      if (i === indice) {
        return input.value;
      }
      return el;
    });

    print();
  }
}

// MAIN
print();
