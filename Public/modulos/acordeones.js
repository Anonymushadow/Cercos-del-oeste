import { Variables } from "./DOMElements.js";

const startAcordeon = ()=>{  
    let header = Variables.asignarVariablesAcordeon().header;
    for(let i = 0; i < header.length; i++){
            header[i].addEventListener("click", ()=>{
            header[i].classList.toggle("active");
        })
    }
}

export { startAcordeon };