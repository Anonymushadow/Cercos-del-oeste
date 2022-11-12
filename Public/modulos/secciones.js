import { Variables } from "./DOMElements.js";
import { startScroll } from "./scrollAndShow.js";
import { startAcordeon } from "./acordeones.js";
import { startImagen } from "./imagenes.js";
import { startBusquedaInterna } from "./busquedaInterna.js";

const startSeccion = ()=>{
    var variablesSecciones;

    const scroll = ()=>{
        window.addEventListener("scroll", ()=>{
            startScroll();
        });
    }

    function load(url, txt){
        fetch(url)
            .then((res) => res.text())
            .then((text) => {
                main.innerHTML = text;
                switch(txt){
                    case "inicio":
                        start();
                        startAcordeon();
                        scroll();
                    break;
                    case "servicios":
                        startImagen();
                        scroll();
                    break;
                    case "nosotros":
                        scroll();
                    break;
                    case "preguntasFrecuentes":
                        startAcordeon();
                        startBusquedaInterna();
                    break;
                    case "contactenos":
                    break;
                }
            })
            .catch((err)=> console.log(err));
        
    }

    function getLink(){
        let urlActual = window.location.href;
        let cantidad = urlActual.length;
        if(urlActual[cantidad - 1] == "#"){
            urlActual = (urlActual.substring(0, urlActual.length - 1));
            return urlActual;
        }else{
            return urlActual;
        }
    }


    const cargar = (url, txt)=>{
        load(getLink() + txt, txt);
            variablesSecciones.menu.classList.remove("navbar__show");
            variablesSecciones.burguer.classList.remove("navbar__active");
            variablesSecciones.body.classList.remove("overflow__hidden");
        }

    const abrirSeccion = (url, txt) => {
        for(let i = 0; i < url.length; i++){
            url[i].addEventListener("click", ()=>{
                cargar(url, txt);
            });
        }
    }



    const start = ()=>{
        variablesSecciones = Variables.asignarVariablesSecciones();
        abrirSeccion(variablesSecciones.inicioLink, "inicio");
        abrirSeccion(variablesSecciones.serviciosLink, "servicios");
        abrirSeccion(variablesSecciones.nosotrosLink, "nosotros");
        abrirSeccion(variablesSecciones.preguntasFrecuentesLink, "preguntasFrecuentes");
        abrirSeccion(variablesSecciones.contactosLink, "contactenos");
    }

    window.addEventListener("load", start());
}




export { startSeccion };