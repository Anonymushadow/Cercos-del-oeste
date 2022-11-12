import { Variables } from "./DOMElements.js";

const startLoader = ()=>{
    let variablesLoader = Variables.asignarVariablesLoader();
    variablesLoader.contenedorLoader.style.opacity = 0;
    variablesLoader.contenedorLoader.style.visibility = 0;
    setTimeout(()=>{
        variablesLoader.contenedorLoader.classList.add("ocultar__loader");
    }, 1000);
}

export { startLoader };