const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { result } = require("lodash");
const blogRourts = require("./routs/blogRouts");

const app = express();

//DataBase connection
const DB = "mongodb+srv://regulare:reg123@cluster0.5clrgsm.mongodb.net/DataBase?retryWrites=true&w=majority";
mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => { 

        app.listen(3000);
        console.log("Connected to DB");
        
    })
    .catch((err) => { console.log("There was an error", err)});

app.set('view engine', "ejs");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {

    res.redirect("/blogs")

});

app.use("/blogs" ,blogRourts);

app.get("/about", (req, res) => {

    res.render("about", {title: "About"});

});

app.use((req, res) => {

    res.status(404).render("404", {title: "404-NotFound"});

});