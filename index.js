const express = require("express");
const exphbs = require("express-handlebars");
const productModel = require("./model/productcat");
const productModel2 = require("./model/bestseller");
const productModel3 = require("./model/productlisting");


const app = express();

app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

app.use(express.static("public"));

app.get("/",(req,res)=>{

    res.render("home",{
        title: "Home",
        products: productModel.getAllProducts(),
        products2: productModel2.getAllProducts()
    });

});

app.get("/products",(req,res)=>{

    res.render("products",{
        title: "Products",
        products3: productModel3.getAllProducts()
    });

});

app.get("/registration",(req,res)=>{

    res.render("registration",{
        title: "Registration"
    });

});

app.get("/login",(req,res)=>{

    res.render("login",{
        title: "Login Page",
    });

});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Web Server is up and running!");
});

