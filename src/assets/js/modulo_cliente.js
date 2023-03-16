import {saveTask} from "./conexion_firebase.js";

window.addEventListener("DOMContentLoaded", async (e) => {
   
  });

  const cliente = document.getElementById("registro_cliente");

  cliente.addEventListener("submit", async (e) => {

    e.preventDefault();//detiene que el formulario se recargue la pagina
    const nombre_cliente=cliente.nombre;//captura e codigo del ccampo de formulario
    const direccion=cliente.direcion;//captura e codigo del ccampo de formulario
    //console.log(nombre,direcion);
   // console.log(nombre_cliente.value,direccion.value);
  saveTask(nombre.value,direccion.value);
  })