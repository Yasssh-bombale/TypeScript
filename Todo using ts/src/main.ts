import "./style.css";

interface todo {
  readonly id: string;
  todoMsg: string;
  isCompleted: boolean;
}

const todos: todo[] = [];

const todoContainer = document.getElementById(
  "todoContainer"
) as HTMLDivElement;

const input = document.querySelector("#todoInput") as HTMLInputElement;
const form = document.getElementById("myForm") as HTMLFormElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const obj: todo = {
    id: String(Math.floor(Math.random() * 1000 + 1)),
    todoMsg: input.value,
    isCompleted: false,
  };
  todos.push(obj);
  input.value = "";
  renderTodo(todos);
};

const renderTodo = (todos: todo[]) => {
  todoContainer.innerHTML = "";
  todos.forEach((item) => {
    const div: HTMLDivElement = document.createElement("div"); //create main div;

    //creating checkBOX;
    const inputCheckBox: HTMLInputElement = document.createElement("input"); //create inputCheckBox;
    inputCheckBox.setAttribute("type", "checkbox"); //set inputCheckBox attribut type checkbox;
    inputCheckBox.checked = item.isCompleted;

    inputCheckBox.onchange = () => {
      input.className = inputCheckBox.checked ? "checked" : "";
    };

    //creating inputText;
    const input: HTMLInputElement = document.createElement("input"); //create input element;
    input.value = item.todoMsg; // add totoMSG in input element;
    input.readOnly = true;
    //creating deleteBtn;

    const deleteBtn: HTMLButtonElement = document.createElement("button"); // create delete Btn;
    deleteBtn.innerHTML = "❌";
    deleteBtn.onclick = () => deleteTodo(item.id);

    //Now adding all this element to div;
    div.append(inputCheckBox, input, deleteBtn);
    //now adding div to the todoContainer;
    todoContainer.append(div);
  });
};

const deleteTodo = (id: string) => {
  const index = todos.findIndex((item) => item.id === id);
  todos.splice(index, 1);
  console.log(todos);
  renderTodo(todos);
};
