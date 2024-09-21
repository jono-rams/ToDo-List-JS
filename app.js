const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');

const generateTemplate = todo => {

  // const li = document.createElement('li');
  // li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

  // const span = document.createElement('span');
  // span.textContent = todo;
  // li.appendChild(span);

  // const icon = document.createElement('i');
  // icon.classList.add('far', 'fa-trash-alt', 'delete');
  // li.appendChild(icon);

  // /todoList.appendChild(li);

  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  todoList.innerHTML += html;

}

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length){
    generateTemplate(todo);
    addForm.reset();
  }
});