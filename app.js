const express = require("express"); // global exports
const bodyParser = require("body-parser");  // global exports
const date = require(__dirname + "/date.js"); //Local exports



const toDos = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
const day = date.getDate();

res.render("list", {listTitle: day, newListItems: toDos });
});

app.post("/",(req,res)=>{
    const  item = req.body.Todo;
    

    if(req.body.list === "work list"){
        workItems.push(item);
        res.redirect("/work");
        
    }else {
        toDos.push(item);

        res.redirect("/");
        
    }


});

app.get("/work", (req,res)=>{
res.render("list",{listTitle: "work list", newListItems: workItems} )

});

app.get("/about",function(req,res){

res.render("about");
});



app.listen(3000,(req,res)=>{

    console.log("app is running on port 3000!");
})