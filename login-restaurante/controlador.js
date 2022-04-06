document.getElementById("btn-inicio-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn-inicio-registarse").addEventListener("click", register);

window.addEventListener("resize", anchoPagina);
//Variable declaradas
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_atras_login = document.querySelector(".caja__atras-login");
var caja_atras_register = document.querySelector(".caja__atras-register");

function anchoPagina(){
    if(innerWidth > 780){
        caja_atras_login.style.display ="block";
        caja_atras_register.style.display ="block";

    }else{
        caja_atras_register.style.display = "block";
        caja_atras_register.style.opacity= "1";
        caja_atras_login.style.display= "none";
        formulario_login.style.display= "block";
        formulario_register.style.display= "none";
        contenedor_login_register.style.left= "0px";
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth > 780){

    
    formulario_register.style.display ="none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display ="block";
    caja_atras_register.style.opacity = "1";
    caja_atras_login.style.opacity ="0";
}else{
    formulario_register.style.display ="none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display ="block";
    caja_atras_register.style.display = "block";
    caja_atras_login.style.display ="none";

}
}

function register(){

    if(window.innerWidth > 780){
    formulario_register.style.display ="block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display ="none";
    caja_atras_register.style.opacity = "0";
    caja_atras_login.style.opacity ="1";

    }else{
    formulario_register.style.display ="block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display ="none";
    caja_atras_register.style.display = "none";
    caja_atras_login.style.display ="block";
    caja_atras_login.style.opacity ="1";
    }
    
}