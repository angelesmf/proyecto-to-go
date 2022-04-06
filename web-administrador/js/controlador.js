//Ejecuta la funcion en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("bt_open");
var body = document.getElementById("body");

function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
    
}

if (window.innerWidth < 760) {

    body.classList.add("body_move");
    body.classList.add("menu__side_move");
    
}

window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        body.classList.add("body_move");
        side_menu.classList(menu__side_move);
    }

});