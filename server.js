 const http = require("http");
 const myserver=http.createServer((req,res)=>{
     console.log("hello");
     res.end("hi from my serverrr");
 })
  myserver.listen(8000,"localhost",(err)=>{
     if(err) console.log(err)
         console.log("server is listening at http://localhost:8000");
 });