import { Variables } from "./DOMElements.js";

const startTheme = ()=>{
    var variablesTheme = Variables.asignarVariablesTheme();
    var inicioLink = variablesTheme.inicioLink;
    if(localStorage.getItem('dark') === 'true'){
        dark();
        variablesTheme.theme = false;
    } else {
        variablesTheme.theme = true;
        light();
    }

    for (let i = 0; i < variablesTheme.theme__button.length; i++) {
        variablesTheme.theme__button[i].addEventListener('click', () => {
            if(variablesTheme.theme){
                dark();
                variablesTheme.theme = false;
                localStorage.setItem('dark', 'true');
            }else{
                light();
                variablesTheme.theme = true;
                localStorage.setItem('dark', 'false');
            }
        });
    }


    function dark(){
        variablesTheme.color.style.setProperty('--primary', '#FFB700');
        variablesTheme.color.style.setProperty('--secondary', '#0a0a0a');
        variablesTheme.color.style.setProperty('--terciario', '#8d4925');
        variablesTheme.color.style.setProperty('--menu__hover__mobile', '#fff');
        let homeImage = document.querySelectorAll(".navbar__item__img");
        for(let i = 0; i < variablesTheme.inicioLink.length; i++){
            inicioLink[i].style.backgroundImage = "url('./imagenes/logo/logo_primary.png')";
        }
        document.querySelector(".footer__logo__container").style.backgroundImage = "url('./imagenes/logo/logo_secondary.png')"
    }
    
    function light(){
        variablesTheme.color.style.setProperty('--primary', '#0a0a0a');
        variablesTheme.color.style.setProperty('--secondary', '#FFB700');
        variablesTheme.color.style.setProperty('--terciario', '#fff');
        variablesTheme.color.style.setProperty('--menu__hover__mobile', '#8d4925');
        let homeImage = document.querySelectorAll(".navbar__item__img");
        for(let i = 0; i < variablesTheme.inicioLink.length; i++){
            inicioLink[i].style.backgroundImage = "url('./imagenes/logo/logo_secondary.png')";
        }
        document.querySelector(".footer__logo__container").style.backgroundImage = "url('./imagenes/logo/logo_primary.png')"
    }
}






export { startTheme };