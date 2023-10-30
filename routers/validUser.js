const express = require("express");
const valid = express.Router();
const jsonwebtoken  = require("jsonwebtoken");
const SECRET_KEY = "secreto"

const users = [
    { email: "rodcode@example.com", name: "admin", rol: "admin", pass: "1234" },
    { email: "ada@example.com", name: "user", rol: "user", pass: "1234" },
  ];
const JWTValidation = (req, res, next) => {
    const headersToken = req.headers.authorization;
    console.log(headersToken);
    if (!headersToken) {
      return  res.status(404).send({ error: "Invalid Token" });  
      }  
     try{
       const decoded = jsonwebtoken.verify(headersToken, SECRET_KEY);
       console.log("---->",decoded);
       req.user = decoded
     } catch(error){
       res.status(400).send("there is no token")
     }
    next();
  };
valid.post("/login", JWTValidation,(req, res) => {
    const userEmail = users.find((user) => user.email == req.body.email);
    const userPass = users.find((user) => user.pass == req.body.pass);
       if (userEmail && userEmail.email == req.body.email && userPass && userPass.pass == req.body.pass) {
          const token = jsonwebtoken.sign({
          user: userEmail.email,
          name: userPass.pass,
         },
    SECRET_KEY,  {expiresIn: '1h'}
    );
    res.json({  llave: token });
  } else {
        res.status(401).send({ error: "Invalid user name or password" });
      }} 
      );
  module.exports = valid;