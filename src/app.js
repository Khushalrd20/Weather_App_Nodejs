const express = require("express") ;
const path = require("path") ;
const hbs = require("hbs") ;
const app = express() ;
const PORT = process.env.PORT  || 8000;


//path 
const Publicpath = path.join(__dirname,"../public");
const views_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);
//console.log(Publicpath);

app.set("view engine","hbs");
app.set("views",views_path);
//serving
app.use(express.static(Publicpath));
//routing
app.get("/",(req,res)=>{
    res.send("working") ;
});

app.get("/about",(req,res)=>{
    res.render("about") ;
});

app.get("/weather",(req,res)=>{
    res.render("weather") ;
});

app.get("/*",(req,res)=>{
    res.render("404",{
        errorMsg : "Oops 404 Error Found"
    }) ;
});

app.listen(PORT,()=>{
    console.log(`runnning on port ${PORT}`);
})