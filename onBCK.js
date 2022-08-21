//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/BOOK",{useNewUrlParser: true})
const app = express()
app.set('view engine',"ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(req,res){
    res.sendFile(__dirname+"/OnBE.html")
})
app.post("/",function(request,response){
 const bookSchema = new mongoose.Schema({
    book_name: String
 }
 )
 const list = mongoose.model("book", bookSchema)
 var bookName = request.body.book_name
 const book = new list({
   book_name : bookName 
 })
book.save()
var head = "Book added seccessfully to the database:)"
response.render("index",{content: head})
}
)
app.listen(3000,function(){
    console.log("Server started on port 3000.");
    })