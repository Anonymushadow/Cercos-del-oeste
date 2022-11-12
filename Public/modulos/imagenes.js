import { Variables } from "./DOMElements.js";

const startImagen = ()=>{
    let variablesImagenes = Variables.asignarVariablesImagenes();
    let imgSeleccionada = variablesImagenes.imgSeleccionada;
    for(let i = 0; i < imgSeleccionada.length; i++){
        imgSeleccionada[i].addEventListener("click", ()=>{
            let imgSeleccionadaSrc = imgSeleccionada[i].src;
            variablesImagenes.imgSelectedContainer.classList.remove("servicios__galeria__img__ampliada__close");
            variablesImagenes.imgSelectedOpen.src = imgSeleccionadaSrc;
        });
    }
    
    variablesImagenes.closeBtnImg.addEventListener("click", ()=>{
        variablesImagenes.imgSelectedContainer.classList.add("servicios__galeria__img__ampliada__close");
    })
    
    window.addEventListener("keyup", (e)=>{
        if(e.key == "Escape"){
            variablesImagenes.imgSelectedContainer.classList.add("servicios__galeria__img__ampliada__close");
        }
    })
}

export { startImagen };