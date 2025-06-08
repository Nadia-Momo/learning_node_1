const http=require("http");
const server=http.createServer((req,res)=>{
     console.log(req.url,req.method);
// res.end("Welcome to todo app server");
if(req.url==="/todos" && req.method==='GET'){
    res.writeHead(201,{
        "content-type":"application/json",
        "email":"ph@gmail.com"

    })
// res.writeHead(201,{
//     "content-type":"test/plain",
//     "email":"ph@gmail.com"
// })
// res.setHeader("content-type","text/plain");
// res.setHeader("email","ph2@gmail.com");
// res.statusCode=201;
res.end("hello todos");
}
else if(req.url==="/todos/create-todo" && req.method==='POST'){
res.end("Todo created");
}
else{
    res.end("Route not found");
}
})
server.listen(5000,"127.0.0.1",()=>{
   
    console.log("server listening to port 5000");
});
/**
 * /Todo-GET all todo
 * /todos/create-todos POST Create todo
 */