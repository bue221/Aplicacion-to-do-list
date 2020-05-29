

function nuevatarea() {

    //variables
    var tarea = document.getElementById("Tarea");
    var lista = document.getElementById("contenedor");
    var valor = tarea.value;


    if (valor == ""){
        tarea.setAttribute("placeholder","Ingrese un dato valido");
        tarea.className="bg-danger";
        return false;
    }

    nueva = document.createElement("li");
    contenido = document.createTextNode(valor);
    nueva.appendChild(contenido);
    lista.appendChild(nueva);



    tarea.value = "";
}
