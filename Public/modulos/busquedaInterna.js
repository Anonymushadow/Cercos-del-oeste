import { Variables } from "./DOMElements.js";

const startBusquedaInterna = ()=> {
        //ignorar simbolos (tildes, etc)
    function eliminarDiacriticos(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    }
    
    document.addEventListener("keyup", (e)=>{
        if(e.target.matches("#buscador")){
            let elementos = document.querySelectorAll(".acordeon__item__header");
            let elementos__container = document.querySelectorAll(".acordeon__item");
            for(let i = 0; i < elementos.length; i++){
                if(eliminarDiacriticos(elementos[i].textContent).toUpperCase().includes(eliminarDiacriticos(e.target.value).toUpperCase())){
                    elementos__container[i].classList.remove("filtro");
                }else{
                    elementos__container[i].classList.add("filtro");
                }
            }
        }
    });
}


export { startBusquedaInterna };