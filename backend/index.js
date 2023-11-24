import express  from "express";
import mysql2  from "mysql2";
import cors from "cors"
const app=express();
const db=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Pradh78p@12",
    database:"tailorshop"
});
app.use(express.json());
app.use(cors());

app.listen(3001,()=>{
    console.log("connected to backend")

})
app.get("/",(req,res)=>res.json("this is backend"))
app.post("/review",(req,res)=>{
    const query="insert into review(`name`,`rating`,`review`) values(?)";
    const values=[
        req.body.name,
        req.body.rating,
        req.body.review
    ];
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Added successfully")

    });

});

app.get("/review",(req,res)=>{
    const query="select*from review where rating>3"
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
})

app.post("/booking",(req,res)=>{
    const query="insert into booking(`name`,`email`,`phone_no`,`type_of_dress`,`quantity`,`date_you_needed`,`type_of_service`,`cloth_providing_method`,`preferred_delivery_method`,`address`,`style_and_design_preferences`,`Special_request`) values(?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.phone_no,
        req.body.type_of_dress,
        req.body.quantity,
        req.body.date_you_needed,
        req.body.type_of_service,
        req.body.cloth_providing_method,
        req.body.preferred_delivery_method,
        req.body.address,
        req.body.style_and_design_preferences,
        req.body.Special_request
        
    ];
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Added successfully")

    });

});