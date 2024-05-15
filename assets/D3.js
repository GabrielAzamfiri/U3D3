const dayTask = document.querySelector("section"); //selezione dove voglio creare ul
console.log(dayTask);
const ul = document.createElement("ul"); //creo ul fuori dal function cosi ne crea solo 1
dayTask.append(ul); //appendo ul al padre section

const form = document.getElementById("task-form"); //seleziono il form da dove prendero gli input
console.log(form);

form.addEventListener("submit", function (event) {
  //creo una funzione che si attiva al click di invio(submit)
  event.preventDefault(); // tolgo il reset(automatico) della pagina

  const taskInput = document.getElementById("task"); // seleziono l'input
  const taskValue = taskInput.value; // aquisisco il valore(testo)
  console.log(taskValue);

  const unordinaryLi = document.querySelector("ul"); // seleziono ul

  const contenitoreLi = document.createElement("div"); // creo un contenitore

  const li = document.createElement("li"); //creo un li

  const btnElimina = document.createElement("button"); // creo bottone

  contenitoreLi.appendChild(li); //aggiungo al contenitore l'li e il bottone
  contenitoreLi.appendChild(btnElimina);

  unordinaryLi.append(contenitoreLi); // aggiungo al ul il contenitore div

  btnElimina.classList.add("btnElimina"); //aggiungo una classe al bottone per dare stile con css
  btnElimina.innerText = "X";
  li.classList.add("listaNonOrdinata"); //aggiungo una classe al li per dare stile con css
  li.innerText = taskValue; // aggiungo il testo dell'input come testo del li

  li.addEventListener("click", () => li.classList.add("click")); //al click della lista aggiungi classe click (che tramite css tira una riga al testo)
  btnElimina.addEventListener("click", () => contenitoreLi.remove()); // all click del bottone, elimina il contenitore con li e bottone stesso

  taskInput.value = ""; // svuoto l'input text area
});
