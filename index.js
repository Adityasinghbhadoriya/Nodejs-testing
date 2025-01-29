const http = require("http");
const PORT = process.env.PORT || 3000;
// const hostname = "localhost";
const fs = require("fs");

const home = fs.readFileSync("./index.html");

console.log(__filename);

const server = http.createServer((req,res) =>{
   if(req.url === "/"){
     return res.end(home);
   }
   if(req.url === "/about"){
    return res.end("<h1>About Page</h1>");
   }
   
   if(req.url === "/contact"){
    return res.end("<h1>contact Page</h1>");
   }
   
   if(req.url === "/service"){
    return res.end("<h1>Service Page</h1>");
   }
   else{
    return res.end("404 page not found")
   }
   

//    res.end("<h1>Hello World</h1>");
})

server.listen(PORT,() =>{
    console.log(`Server is working`);
})