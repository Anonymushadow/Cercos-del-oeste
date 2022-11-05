const express = require("express");
const router = express.Router();



router.get("/inicio", (req, res)=>{
    res.render("partials/inicio.ejs", {titulo: "Sobre Nosotros"});
});

router.get("/nosotros", (req, res)=>{
    res.render("partials/empresa.ejs", {titulo: "Sobre Nosotros"});
});

router.get("/servicios", (req, res)=>{
    res.render("partials/servicios.ejs", {titulo: "Nuestros Servicios"});
});

router.get("/preguntasFrecuentes", (req, res)=>{
    res.render("partials/preguntas-frecuentes.ejs", {titulo: "Preguntas Frecuentes"});
});

router.get("/contactenos", (req, res)=>{
    res.render("partials/contact-us.ejs", {titulo: "Contactenos"});
});

module.exports = router;