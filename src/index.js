import _ from "lodash";
import "./style.css";
const todoBtn = document.querySelector(".add");
const modal = document.getElementById("myModal");
const span = document.querySelector(".close");
todoBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
function component() {}

// document.body.appendChild(component());
