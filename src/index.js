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
const priorityLevel = document.getElementById("priority");
const todoDiv = document.querySelector(".body");

class App {
  #todos = [];
  constructor() {
    //Get dat from local Storage
    this._getLocalStorage();
    // Attach event Handlers
    submit.addEventListener("click", this._newTodo.bind(this));
    todoBtn.addEventListener("click", this._showForm.bind(this));
    span.addEventListener("click", this._closeForm.bind(this));
    window.addEventListener("click", function (e) {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
    todoDiv.addEventListener("click", this.editOrRemove.bind(this));
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
    let todoPriority = priorityLevel.value;

    let todoItem = new TodoItem(
      todoTitle,
      todoDescription,
      todoDate,
      todoTime,
      todoPriority
    );

    console.log(todoItem);
    this.#todos.push(todoItem);

    title.value = "";
    description.value = "";
    date.value = "";
    time.value = "";
    modal.style.display = "none";
    this.renderTodoItem(todoItem);
    this.setLocalStroage();
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
    itemContainer.setAttribute("id", todoItem.id);
    itemContainer.classList.add(todoItem.priority);
    itemTitle.classList.add("span-2");
    itemTitle.classList.add("center-item");
    itemDescription.classList.add("span-2");
    editBtn.classList.add("todo-btn");
    completedBtn.classList.add("todo-btn");
    document.querySelector(".body").appendChild(itemContainer);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemDescription);
    itemContainer.appendChild(itemTime);
    itemContainer.appendChild(itemDate);
    itemContainer.appendChild(editBtn);
    itemContainer.appendChild(completedBtn);
  }

  editOrRemove(event) {
    if (event.target.tagName === "BUTTON") {
      const button = event.target;
      const item = button.parentNode;
      const itemId = item.getAttribute("id");
      if (button.textContent === "Done!") {
        let index;
        for (let i = 0; i < this.#todos.length; i++) {
          console.log(i);
          if (this.#todos[i].id === itemId) {
            index = i;
          }
        }
        this.#todos.splice(index, 1);
        this.setLocalStroage();
        item.remove();
      } else if (button.textContent === "Edit") {
        const title = item.firstElementChild;
        const description = title.nextSibling;

        title.contentEditable = true;
        description.contentEditable = true;
        title.style.backgroundColor = "#FFFFFF";
        description.style.backgroundColor = "#FFFFFF";
        button.textContent = "Save";
      } else if (button.textContent === "Save") {
        const title = item.firstElementChild;
        const description = title.nextSibling;
        title.contentEditable = false;
        description.contentEditable = false;
        title.style.backgroundColor = "#fff6e0";
        description.style.backgroundColor = "#fff6e0";
        button.textContent = "Edit";
      }
    }
  }
  setLocalStroage() {
    localStorage.setItem("todos", JSON.stringify(this.#todos));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("todos"));
    console.log(data);
    if (!data) return;

    this.#todos = data;

    this.#todos.forEach((todo) => this.renderTodoItem(todo));
  }
}

const app = new App();
function component() {}

// document.body.appendChild(component());
