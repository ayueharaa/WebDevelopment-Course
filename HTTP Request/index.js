import express from "express";
import nodemon from "nodemon";

const app = express ();

app.get ("/", (req, res) => {
    res.send ("<h1>Hello Worlds</h1>");
});

app.get ("/about", (req, res) =>{
    res.send ("<h1>About Me</h1>");
});

app.get ("/contact", (req, res)=>{
    res.send ("<h1>Contacts</h1>");
});

app.listen (3000, () => {
    console.log ("Server running on 3000");
});