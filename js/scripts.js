
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
/* agrego conexion con api random */
fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
    console.log(data);
    document.querySelector('.nombre').innerHTML = "<h1>" + data.results[0].name.first.toUpperCase() + "<br>" + data.results[0].name.last.toUpperCase() + "</h1>";
    document.querySelector('#email').textContent = data.results[0].email;
    document.querySelector('#telefono').textContent = data.results[0].cell;
    document.querySelector('#foto_cv').src = data.results[0].picture.large
});