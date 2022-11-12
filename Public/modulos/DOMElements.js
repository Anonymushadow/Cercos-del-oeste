var color,
    inicioLink,
    menu,
    burguer,
    theme,
    theme__button,
    body,
    nosotrosLink,
    serviciosLink,
    preguntasFrecuentesLink,
    contactosLink,
    scrollTop,
    animado,
    contenedorLoader,
    header,
    main;

const asignarVariablesTheme = ()=>{
    color = document.querySelector(":root");
    theme;
    theme__button = document.querySelectorAll(".theme");
    body = document.querySelector(".body");
    inicioLink = document.querySelectorAll(".inicio__link");
    return { color, theme, theme__button, body, inicioLink }
}

const asignarVariablesMenu = ()=>{
    menu = document.querySelector(".navbar__menu__mobile");
    burguer = document.querySelector(".navbar__burguer");
    body = document.querySelector(".body");
    return { menu, burguer, body };
}

const asignarVariablesLoader = ()=>{
    contenedorLoader = document.querySelector(".loader__container");
    return { contenedorLoader };
}

const asignarVariablesSecciones = ()=>{
    main = document.getElementById("main");
    nosotrosLink = document.querySelectorAll(".nosotros__link");
    serviciosLink = document.querySelectorAll(".servicios__link");
    preguntasFrecuentesLink = document.querySelectorAll(".preguntas__frecuentes__link");
    contactosLink = document.querySelectorAll(".contactos__link");
    inicioLink = document.querySelectorAll(".inicio__link");
    menu = document.querySelector(".navbar__menu__mobile");
    burguer = document.querySelector(".navbar__burguer");
    body = document.querySelector(".body");
    return { main, nosotrosLink, serviciosLink, preguntasFrecuentesLink, contactosLink, inicioLink, menu, burguer, body};
}

const asignarVariablesSroll = ()=>{
    //scrollTop --> cantidad de scroll que hago al bajar
    let scrollTop = document.documentElement.scrollTop;
    //detectar el espacio del top de la ventana hasta el elemento a mostrar
    let animado = document.querySelectorAll(".animado");
    return { scrollTop, animado };
}

const asignarVariablesAcordeon = ()=>{
    header = document.querySelectorAll(".acordeon__item__header");
    return { header };
}

const asignarVariablesBusquedaInterna = ()=>{
    
}

const asignarVariablesImagenes = ()=>{
    let imgSelectedContainer = document.querySelector(".servicios__galeria__img__ampliada");
    let imgSelectedOpen = document.querySelector(".img__selected__open");
    let imgSeleccionada = document.querySelectorAll(".servicios__galeria__img");
    let closeBtnImg = document.querySelector(".close__btn__img");
    return { imgSelectedContainer, imgSelectedOpen, imgSeleccionada, closeBtnImg }
}

export const Variables = {
    asignarVariablesTheme,
    asignarVariablesMenu,
    asignarVariablesLoader,
    asignarVariablesSroll,
    asignarVariablesAcordeon,
    asignarVariablesBusquedaInterna,
    asignarVariablesSecciones,
    asignarVariablesImagenes
} 