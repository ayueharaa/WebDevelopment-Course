import express from "express";
import ejs from "ejs";

const app = express ();
const port = 3000;

const today = new Date();
var weekday = today.getDay();


if (weekday >0 && weekday < 6){
    app.get ("/", (req,res)=>{
        res.render("index.ejs", {dayType : "a weekday", advice : "its time to work !"});
    });
    
} else {
    app.get ("/", (req,res)=>{
        res.render("index.ejs", {dayType : "a weekend", advice : "its time to relax !"});
    });
}

app.listen (port, ()=>{
    console.log (`Running on ${port}`);
});