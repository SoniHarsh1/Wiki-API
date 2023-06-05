//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true}, ()=>{console.log("Successfully connected to MongoDB")});

// Create Schema
const articleSchema = {
    title: String,
    content: String
}

// Create Model
const Article = mongoose.model("Article", articleSchema);

// Requests targeting all articles
app.get("/articles", (req, res) => {
    Article.find({}, (err, foundArticles) => {
        if(!err){

            res.send(foundArticles);
        }
        else{
            res.send(err);
        }
    });
});

// Post request to create new article
app.post("/articles", (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save((err) => {
        if(!err){
            res.send("Successfully added a new article");
        }
        else{
            res.send(err);
        }
    }
    );
});

// Delete request to delete all articles
app.delete("/articles", (req, res) => {
    Article.deleteMany({}, (err) => {
        if(!err){
            res.send("Successfully deleted all articles");
        }
        else{
            res.send(err);
        }
    });
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});