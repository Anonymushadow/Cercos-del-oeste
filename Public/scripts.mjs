import { Variables } from "./modulos/DOMElements.js";
import { startMenu } from "./modulos/menu.js";
import { startTheme } from "./modulos/theme.js";
import { startLoader } from "./modulos/loader.js";
import { startAcordeon } from "./modulos/acordeones.js";
import { startScroll } from "./modulos/scrollAndShow.js";
import { startSeccion } from "./modulos/secciones.js";


const iniciarPagina = ()=>{
    startMenu();
    startTheme();
    startLoader();
    startAcordeon();
    startSeccion();
    startScroll();
}

window.addEventListener("load", ()=>{
    iniciarPagina();
});