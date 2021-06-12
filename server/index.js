const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const session = require("express-session");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "taskdb"
})

app.get("/getdata",function(req,res){
    const sqlGet = "SELECT * FROM info";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
})



app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const query = "SELECT * FROM authdata WHERE email = ?";
    db.query(query,username,(err,result)=>{
        if(err){
            res.send(err);
        }
        console.log(result.length);
        if(result.length > 0){
            if(password === result[0].password){
                const id = result[0].id;
                const token = jwt.sign({id},"jwtsecret",{expiresIn: 300});
                // req.session.user = result;

                res.json({auth: true, token: token, result: result});
            }else{
                res.send("wrong credentials");
            }
        }else{
            res.send("user doesnt exits");
        }
    })

})

app.delete("/deletedata/:pid",(req,res)=>{
    const pID = req.params.pid;
    const sqlDelete = "DELETE FROM info WHERE pid = ?";
    db.query(sqlDelete,pID,(error,result)=>{
        
    })
})

app.post("/insert",function(req,res){

    
    const username = req.body.userName;
    const num = req.body.num;
    const Email = req.body.Email;
    const Address = req.body.Address;
    console.log(req.body);
    const sqlInsert = "INSERT INTO info (username,number,email,address) VALUES(?,?,?,?)"
    db.query(sqlInsert, [username, num, Email, Address],(err,result)=>{
            
    })
})


app.listen(3001,function(){
    console.log("server is running");
})