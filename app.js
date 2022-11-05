const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const appRoutes = require("./Routes/routes");
const mailRoutes = require("./Routes/mail.js");
const PORT = require("./config");

//con esta linea hacemos que nuestro programa entienda los datos del formulario
app.use(express.urlencoded({extended: false}));
//hacemos que nuestro server entienda json
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/Views");
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", appRoutes);
app.use("/mail", mailRoutes);

mailRoutes.post("/", ()=>{
    res.render("index.ejs");
})

appRoutes.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("*", (req, res)=>{
    res.render("partials/404.ejs");
});

app.listen(PORT, ()=>{
    console.log(`Server escuchando en el puerto http://localhost:${PORT}`);
});