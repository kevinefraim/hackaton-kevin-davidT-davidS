// colocá las declaraciones acá
const listaDeTareas = []; //Array vacio de tareas
let inputTarea = document.querySelector("#task"); //Input donde se ingresa la tarea
let inputPrioridad = document.querySelector("#prioridad"); //Select de prioridades
let ulTareas = document.querySelector("#lista-de-tareas"); //UL donde se inserta el array de tareas
const btnAgregar = document.querySelector("#agregar"); //Boton agregar tareas

//declaramos el class Tarea
class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  agregarTarea(array) {
    listaDeTareas.push(array);
    mostrarLista();
  }
}

//Funcion mostrar lista de tareas FUNCIONA
const todoList = () => {
  //Validación para espacios vacíos
  if (inputTarea.value === "" || inputPrioridad.value === "Prioridad") {
    return;
  }
  const tarea = new Tarea(inputTarea.value.toLowerCase(), inputPrioridad.value);
  tarea.agregarTarea(tarea);
  //Reseteo a inputs vacíos cuando se muestra la tarea
  inputTarea.value = "";
  inputPrioridad.value = "Prioridad";
};

//Funcion de impresion en el HTML
const mostrarLista = () => {
  ulTareas.innerHTML = "";
  listaDeTareas.forEach((tarea, index) => {
    ulTareas.innerHTML += `<li class= "list-group-item d-flex justify-content-between align-items-center text-capitalize"
      id="${index}">${tarea.nombre} - Prioridad: ${tarea.prioridad} <i class="fas fa-times-circle" onclick="eliminar(event)"></i></li>`;
  });
};

//Funcion eliminar
const eliminar = (event) => {
  listaDeTareas.splice(event.target.parentElement.id, 1);
  mostrarLista();
};

//Eventos
btnAgregar.addEventListener("click", todoList);
