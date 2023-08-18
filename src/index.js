import _ from "lodash";
import "./style.css";
import { TodoItem } from "./item";
const todoBtn = document.querySelector(".add");
const modal = document.getElementById("myModal");
const span = document.querySelector(".close");
const submit = document.getElementById("submit");
const title = document.getElementById("title");
const description = document.getElementById("description");
const date = document.getElementById("date");
const time = document.getElementById("time");

class App {
  #todos = [];
  constructor() {
    submit.addEventListener("click", this._newTodo.bind(this));
    todoBtn.addEventListener("click", this._showForm.bind(this));
    span.addEventListener("click", this._closeForm.bind(this));
    window.addEventListener("click", function (e) {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  _showForm() {
    modal.style.display = "block";
  }

  _closeForm() {
    modal.style.display = "none";
  }

  _newTodo(e) {
    e.preventDefault();
    let todoTitle = title.value;
    let todoDescription = description.value;
    let todoDate = date.value;
    let todoTime = time.value;
    console.log(todoTitle, todoDescription, todoDate, todoTime);
    let todoItem = new TodoItem(todoTitle, todoDescription, todoDate, todoTime);

    console.log(todoItem);
    this.#todos.push(todoItem);

    title.value = "";
    description.value = "";
    date.value = "";
    time.value = "";
    modal.style.display = "none";
    this.renderTodoItem(todoItem);
  }
  renderTodoItem(todoItem) {
    const itemContainer = document.createElement("div");
    const itemTitle = document.createElement("h2");
    const itemDescription = document.createElement("p");
    const itemTime = document.createElement("p");
    const itemDate = document.createElement("p");
    const editBtn = document.createElement("button");
    const completedBtn = document.createElement("button");
    // Values added
    itemTitle.textContent = todoItem.title;
    itemDescription.textContent = todoItem.description;
    itemTime.textContent = todoItem.time;
    itemDate.textContent = todoItem.date;
    editBtn.textContent = "Edit";
    completedBtn.textContent = "Done!";
    // Classes added
    itemContainer.classList.add("grid");
    itemTitle.classList.add("span-2");
    itemTitle.classList.add("center-item");
    itemDescription.classList.add("span-2");
    editBtn.classList.add("todo-btn");
    completedBtn.classList.add("todo-btn");
    document.querySelector(".current-todo").appendChild(itemContainer);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemDescription);
    itemContainer.appendChild(itemTime);
    itemContainer.appendChild(itemDate);
    itemContainer.appendChild(editBtn);
    itemContainer.appendChild(completedBtn);
  }

  editOrRemove(event) {
    if (event.target.tagName === "Button") {
      console.log("You clicked me!");
    }
  }
}

const app = new App();
function component() {}

// document.body.appendChild(component());
