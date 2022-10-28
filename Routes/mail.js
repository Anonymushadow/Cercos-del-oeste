const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googLeapi");
const Mail = require("nodemailer/lib/mailer");
const routerForm = express.Router();

//verificar mail
function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
        return true;
    } else {
        return false;
    }
  }


routerForm.post("/", (req, res)=>{
    const { email, msg } = req.body;
    
    async function sendMail(){
        const config = {
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "claudelnahuel22@gmail.com",
                pass: "rqpowhrhuiwlvmge"
            }
        }
        if(validarEmail(email)){
            const mensaje = {
                from: `${email}`,
                to: `claudelnahuel22@gmail.com`,
                subject: `Cercos del oeste`,
                text: `
                Mail: ${email}
                Mensaje: ${msg}
                ` 
            }

            const transport = nodemailer.createTransport(config);
            const info = await transport.sendMail(mensaje);
        }else{
            throw "Error";
        }
}

sendMail()
.then((result) => res.status(200).render("mensajeDeEnvio.ejs", {texto: "Su mail se ha enviado con exito, le responderemos lo antes posbile, gracias por su tiempo"}))
.catch((e) => res.status(500).render("mensajeDeEnvio.ejs", {texto: "Lo sentimos pero ha ocurrido un problema, por favor reintentelo mas tarde"}));
});


module.exports = routerForm;