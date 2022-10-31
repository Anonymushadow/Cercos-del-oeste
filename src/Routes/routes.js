const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("index.ejs", {
        pagina: "inicio"
    });
});

router.get("/inicio", (req, res)=>{
    res.render("inicio.ejs", {titulo: "Sobre Nosotros"});
});

router.get("/nosotros", (req, res)=>{
    res.render("empresa.ejs", {titulo: "Sobre Nosotros"});
});

router.get("/servicios", (req, res)=>{
    res.render("servicios.ejs", {titulo: "Nuestros Servicios"});
});

router.get("/preguntasFrecuentes", (req, res)=>{
    res.render("preguntas-frecuentes.ejs", {titulo: "Preguntas Frecuentes"});
});

router.get("/contactenos", (req, res)=>{
    res.render("contact-us.ejs", {titulo: "Contactenos"});
});

module.exports = router;