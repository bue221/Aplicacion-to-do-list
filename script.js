//funcion general
function nuevatarea() {

    //variables
    tarea = document.getElementById("Tarea");
    lista = document.getElementById("contenedor");
    valor = tarea.value;
    btn = document.createElement("button");

    if (valor == "") {
        tarea.setAttribute("placeholder", "Ingrese un dato valido");
        tarea.className = "form-control mb-3 is-invalid";
        return false;
    }
    function quitar(){
        this.className = "form-control mb-3"
        this.placeholder = "Ingrese un dato"
    }
    tarea.addEventListener("click",quitar)

    nueva = document.createElement("li");
    btn.className = "btn btn-outline-success ml-2 ";
    btn.style.height = "2rem"
    btn.innerHTML = "Completada";
    contenido = document.createTextNode(valor);
    nueva.className = "mb-2"
    nueva.appendChild(contenido);
    nueva.appendChild(btn);
    lista.appendChild(nueva);
    tarea.value = "";



    //borra la tarea indicada
    function borrar(){
        
        elemento = this.parentNode;
        this.parentNode.removeChild(this);
        i = elemento.innerHTML;
        elemento.value = i;
        completado = document.createTextNode(i);
        //alert(i)
        elemento.parentNode.removeChild(elemento); 
        
        //añadir a tareas
        contenedor2 = document.getElementById("completado");
        lista2 = document.createElement("li");
        lista2.appendChild(completado);
        contenedor2.appendChild(lista2);
    
    }

    btn.addEventListener("click",borrar);

    

}



