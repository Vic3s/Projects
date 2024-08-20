const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fs = require("fs");
const User = require("./models/model");
const Post = require("./models/posts");
const { name } = require("ejs");
const { copyFileSync } = require("fs");
const cypher = require("./static/Cypher")
let isLoged = require("./static/isLogedIn").loged
let logedName;
const app = express();

DB = "mongodb+srv://test:test123@cluster0.5clrgsm.mongodb.net/PostThings?retryWrites=true&w=majority"

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {

    app.listen(3003);
    console.log("Connected");

})
.catch((err) => console.log(err));

app.set("view engine", "ejs")
app.use(express.static("styles"));
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));


app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {

    const usr = new User({ email: req.body.email, name: req.body.name, pass:  cypher.cc2(req.body.pass, "c")});
    console.log({ email: req.body.email, name: req.body.name, pass:  cypher.cc2(req.body.pass, "c")});
    usr.save()
    .then((result) => {
        res.redirect("/");
//input inside json---------------------
        const data = fs.readFileSync('data.json');

        const jsonData = JSON.parse(data);

        jsonData.users.push({
            id: result._id.toString(),
            name: result.name.toString()
        });

        const jsonString = JSON.stringify(jsonData);

        fs.writeFileSync('data.json', jsonString, 'utf-8', (err) => {
        if (err) throw err;
        });

        const update_data = fs.readFileSync('data.json');
        const updated_jsonData = JSON.parse(update_data);
// -------------------------------------

    }).catch((err) => console.log(err));


});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {

   User.find({}, 'name pass').then(resultUsr => {

    let len = resultUsr.length;
    let count = 0;

    let givenName = req.body.name;
    let givenPass = req.body.pass;

    for(let i=0; i<len; i++){

        if(givenName == resultUsr[i].toJSON().name && givenPass == cypher.decc2(resultUsr[i].toJSON().pass, "c")){

            isLoged = true;
            logedName = resultUsr[i].toJSON().name;
            Post.find().sort({ createdAt: -1 })
            .then((result) => {
                res.render("loged", { name: logedName, posts: result });
            })
            .catch((err) => {
            console.log(err);
            });
            break;

        }
        count++;
            
    }

    if(count == len){

        res.redirect("/log-in-failed");

    }
 
    }).catch(err => console.log(err))
});

app.get("/posts", (req, res) => {

    if( isLoged == true){
        Post.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("loged", {name: logedName, posts: result});
        })
        .catch((err) => {
        console.log(err);
        });

    }else{
        Post.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("loged", {name: "Loged Out", posts: result});
        })
        .catch((err) => {
        console.log(err);
        });
    }   
});

app.get("/log-in-failed", (req, res) => {
    res.render("failedLoged");
});

app.get("/create-post", (req, res) => {
    if(isLoged){
        res.render("createPost");
    }else{
        res.render("PleaseLogIn");
    }

});

app.post("/create-post", (req, res) => {
    const post = new Post( { title: req.body.title, snippet: req.body.snippet, body: req.body.body, author: logedName });
    post.save()
    .then((result) => res.redirect("/posts"))
    .catch((err) => console.log(err))

    
});
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;

    Post.findById(id)
    .then((result) => {        
        if(logedName == result.author){
        res.render("detailsDel", { post: result })
        }
        else{
            res.render("detail", { post: result })
        }

    })
    .catch((err) => console.log(err));
})
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;

    Post.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: "/posts" })
    })
    .catch((err) => console.log(err))
})
app.use((req, res) => {

    res.status(404).render("404");

});

