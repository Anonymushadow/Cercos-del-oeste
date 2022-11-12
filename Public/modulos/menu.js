import { Variables } from "./DOMElements.js";

const startMenu = ()=>{
    let variablesMenu =  Variables.asignarVariablesMenu();
    variablesMenu.burguer.addEventListener("click", ()=>{
        variablesMenu.menu.classList.toggle("navbar__show");
        variablesMenu.burguer.classList.toggle("navbar__active");
        variablesMenu.body.classList.toggle("overflow__hidden");
    });
}

export {startMenu};