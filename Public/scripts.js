"user strict";
//variables de navbar
let menu = document.querySelector(".navbar__menu__mobile");
let burguer = document.querySelector(".navbar__burguer");
//variables de theme color
let theme;
let color = document.querySelector(":root");
let theme__button = document.querySelectorAll(".theme");
let body = document.querySelector(".body");
//variables de links - secciones
let nosotrosLink = document.querySelectorAll(".nosotros__link");
let serviciosLink = document.querySelectorAll(".servicios__link");
let preguntasFrecuentesLink = document.querySelectorAll(".preguntas__frecuentes__link");
let contactosLink = document.querySelectorAll(".contactos__link");
let inicioLink = document.querySelectorAll(".inicio__link");


//MENU MOBILE
burguer.addEventListener("click", ()=>{
    menu.classList.toggle("navbar__show");
    burguer.classList.toggle("navbar__active");
    body.classList.toggle("overflow__hidden");
});

//DARK THEME
if(localStorage.getItem('dark') === 'true'){
    dark();
    theme = false;
} else {
    theme = true;
    light();
}

for (let i = 0; i < theme__button.length; i++) {
    theme__button[i].addEventListener('click', () => {
        if(theme){
            dark();
            theme = false;
            localStorage.setItem('dark', 'true');
        }else{
            light();
            theme = true;
            localStorage.setItem('dark', 'false');
        }
    });
}

function dark(){
    color.style.setProperty('--primary', '#FFB700');
    color.style.setProperty('--secondary', '#0a0a0a');
    color.style.setProperty('--terciario', '#8d4925');
    color.style.setProperty('--menu__hover__mobile', '#fff');
    let homeImage = document.querySelectorAll(".navbar__item__img");
    for(let i = 0; i < inicioLink.length; i++){
        inicioLink[i].style.backgroundImage = "url('imagenes/Logo-primary.png')";
    }
    document.querySelector(".footer__logo__container").style.backgroundImage = "url('imagenes/Logo-secondary.png')"
}

function light(){
    color.style.setProperty('--primary', '#0a0a0a');
    color.style.setProperty('--secondary', '#FFB700');
    color.style.setProperty('--terciario', '#fff');
    color.style.setProperty('--menu__hover__mobile', '#8d4925');
    let homeImage = document.querySelectorAll(".navbar__item__img");
    for(let i = 0; i < inicioLink.length; i++){
        inicioLink[i].style.backgroundImage = "url('imagenes/Logo-secondary.png')";
    }
    document.querySelector(".footer__logo__container").style.backgroundImage = "url('imagenes/Logo-primary.png')"
}

//SCROLL AND SHOW
function showScroll() {
    //scrollTop --> cantidad de scroll que hago al bajar
    let scrollTop = document.documentElement.scrollTop;
    //detectar el espacio del top de la ventana hasta el elemento a mostrar
    let animado = document.querySelectorAll(".animado");
    for(let i = 0; i < animado.length; i++){
        //ofsetTop --> detectar destancia desdel top de la ventana hasta el elemento
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity = 1;
            if(animado[i].classList.contains("izq")){
                animado[i].classList.add("mostrarElementoIzq");
            }else{
                animado[i].classList.add("mostrarElementoDer");
            }
        }
    }
}

const activarImagenes = ()=>{
    let imgSelectedContainer = document.querySelector(".servicios__galeria__img__ampliada");
    let imgSelectedOpen = document.querySelector(".img__selected__open");
    let imgSeleccionada = document.querySelectorAll(".servicios__galeria__img");
    let closeBtnImg = document.querySelector(".close__btn__img");
    for(let i = 0; i < imgSeleccionada.length; i++){
        imgSeleccionada[i].addEventListener("click", ()=>{
            let imgSeleccionadaSrc = imgSeleccionada[i].src;
            imgSelectedContainer.classList.remove("servicios__galeria__img__ampliada__close");
            imgSelectedOpen.src = imgSeleccionadaSrc;
        });
    }
    
    closeBtnImg.addEventListener("click", ()=>{
        imgSelectedContainer.classList.add("servicios__galeria__img__ampliada__close");
    })
    
    window.addEventListener("keyup", (e)=>{
        if(e.key == "Escape"){
            imgSelectedContainer.classList.add("servicios__galeria__img__ampliada__close");
        }
    })
}

//ACORDEONES
const abrirAcordeon = ()=>{
    var header = document.querySelectorAll(".acordeon__item__header");
    for(let i = 0; i < header.length; i++){
        header[i].addEventListener("click", ()=>{
            header[i].classList.toggle("active");
        })
    }
}

//BUSQUEDA INTERNA
const activarBusquedaInterna = ()=> {
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


//SECCIONES
let main = document.getElementById("main");
function load(url){
    fetch(url)
        .then((res) => res.text())
        .then((text) => main.innerHTML = text)
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

const abrirSeccion = (url, txt) => {
    for(let i = 0; i < url.length; i++){
        url[i].addEventListener("click", ()=>{
            load(getLink() + txt);
            menu.classList.remove("navbar__show");
            burguer.classList.remove("navbar__active");
            body.classList.remove("overflow__hidden");
            switch(txt){
                case "inicio":
                    setTimeout(()=>{
                        nosotrosLink = document.querySelectorAll(".nosotros__link");
                        serviciosLink = document.querySelectorAll(".servicios__link");
                        preguntasFrecuentesLink = document.querySelectorAll(".preguntas__frecuentes__link");
                        contactosLink = document.querySelectorAll(".contactos__link");
                        inicioLink = document.querySelectorAll(".inicio__link");
                        abrirSeccion(inicioLink, "inicio");
                        abrirSeccion(serviciosLink, "servicios");
                        abrirSeccion(nosotrosLink, "nosotros");
                        abrirSeccion(preguntasFrecuentesLink, "preguntasFrecuentes");
                        abrirSeccion(contactosLink, "contactenos");
                        window.addEventListener("scroll", showScroll);
                        abrirAcordeon();
                    }, 2000);
                break;
                case "nosotros":
                    setTimeout(()=>{
                        window.addEventListener("scroll", showScroll);
                    }, 2000);
                break;
                case "servicios":
                    setTimeout(()=>{
                        window.addEventListener("scroll", showScroll);
                        activarImagenes();
                    }, 2000);
                break;
                case "preguntasFrecuentes":
                    setTimeout(()=>{
                        abrirAcordeon();
                        activarBusquedaInterna();
                    }, 2000);
                break;
                case "contactenos":
                    setTimeout(()=>{
                        window.addEventListener("scroll", showScroll);
                    }, 2000);
                break;
            }
        });
    }
}

abrirSeccion(inicioLink, "inicio");
abrirSeccion(serviciosLink, "servicios");
abrirSeccion(nosotrosLink, "nosotros");
abrirSeccion(preguntasFrecuentesLink, "preguntasFrecuentes");
abrirSeccion(contactosLink, "contactenos");

//LOADER
window.addEventListener("load", ()=>{
    abrirAcordeon();
    const contenedorLoader = document.querySelector(".loader__container");
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 0;
    setTimeout(()=>{
        contenedorLoader.classList.add("ocultar__loader");
    }, 1000);
});