const http=require("http");
const path=require("path");
const fs=require("fs");
const filePath=path.join(__dirname,'./db/todo.json')
const server=http.createServer((req,res)=>{
    //get all todos
     console.log(req.url,req.method);
// res.end("Welcome to todo app server");
if(req.url==="/todos" && req.method==='GET'){
    const data=fs.readFileSync(filePath,{encoding:"utf-8"})
    res.writeHead(201,{
        "content-type":"application/json",
        "email":"ph@gmail.com"

    })
    /**[
     *  {
     * "title":"prema",
     * "body":"Learning node",
     * "createDate:"5/05/2025 3:25:04 AM"
     * },{
     * "title":"prema",
     * "body":"Learning node",
     *  "createDate:"6/04/2023 9:10:00 PM"
     * }
    ]
     * */ 
// res.writeHead(201,{
//     "content-type":"test/plain",
//     "email":"ph@gmail.com"
// })
// res.setHeader("content-type","text/plain");
// res.setHeader("email","ph2@gmail.com");
// res.statusCode=201;
// const data=
// [
//      {
//      "title":"prisma",
//       "body":"Learning node",
//       "createDate":"5/05/2025, 3:25:04 AM"
//       },
//       {
//      "title":"typescript",
//       "body":"Learning node",
//       "createDate":"6/04/2023,9:10:00 PM"
//      }
//     ]
//post all todos
res.end(data);
}
//post a todo
else if(req.url==="/todos/create-todo" && req.method==='POST'){
    let data="";
    req.on("data",(chunk)=>{
data=data+chunk;
    });
  
    req.on("end",()=>{

        const {title,body}=JSON.parse(data);

        const createdAt=new Date().toLocaleString();
      
        const allTodos=fs.readFileSync(filePath,{
            encoding:"utf-8"

        })
       const parsedAllTodos=JSON.parse(allTodos);
        parsedAllTodos.push({title,body, createdAt})
        fs.writeFileSync(filePath,JSON.stringify(parsedAllTodos),{encoding:"utf-8"})
        res.end(JSON.stringify({title,body,createdAt},null,2));
    })
  

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