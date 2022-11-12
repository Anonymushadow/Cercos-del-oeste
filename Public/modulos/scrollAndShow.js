import { Variables } from "./DOMElements.js";

const startScroll = ()=>{
        let animado = Variables.asignarVariablesSroll().animado;
        let scrollTop = Variables.asignarVariablesSroll().scrollTop;
        for(let i = 0; i < animado.length; i++){
            //ofsetTop --> detectar destancia desdel top de la ventana hasta el elemento
            let alturaAnimado = animado[i].offsetTop;
            if(alturaAnimado - 200 < scrollTop){
                animado[i].style.opacity = 1;
                if(animado[i].classList.contains("izq")){
                    animado[i].classList.add("mostrarElementoIzq");
                }else{
                    animado[i].classList.add("mostrarElementoDer");
                }
            }
    }
}

export { startScroll };