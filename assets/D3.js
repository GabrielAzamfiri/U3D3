const dayTask = document.querySelector("section");
console.log(dayTask);
const ul = document.createElement("ul");
dayTask.append(ul);

const form = document.getElementById("task-form");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value;
  console.log(taskValue);

  const li = document.createElement("li");

  const btnElimina = document.createElement("button");
  btnElimina.classList.add("btnElimina");
  btnElimina.innerText = "X";
  li.classList.add("listaNonOrdinata");
  li.innerText = taskValue;
  li.addEventListener("click", () => li.classList.add("click"));
  btnElimina.addEventListener("click", () => li.remove());

  const unordinaryLi = document.querySelector("ul");
  unordinaryLi.append(li);
  li.append(btnElimina);
  taskInput.value = "";
});
// metodo toggle per rendere completo e fare una riga
