
/*
arrow function con operador if ternario.
oculta o muestra contenido de texto.
*/

var mostrar = (titulo) => titulo.style.display=(titulo.style.display=="none") ? "block" : "none";


function cambiar_icon (icon,titulo) {
    if (titulo.style.display == "none"){
        icon.classList.remove("bi-caret-right");
        icon.classList.add("bi-caret-down");
    }
    else{
        icon.classList.remove("bi-caret-down");
        icon.classList.add("bi-caret-right");
    }

}

function hacer_click(titulo,icon){
    cambiar_icon(icon,titulo);
    mostrar(titulo);
    
}

/* document.getElementById("container").classList.remove("color");
document.getElementById('mi_elemento').classList.add('nueva_clase'); */