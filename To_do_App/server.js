const http=require("http");
const path=require("path");
const fs=require("fs");
const filePath=path.join(__dirname,'./db/todo.json');
const url=new URL(req.url,`http://${req.headers.host}`);
const pathname=url.pathname
console.log(url,"url");
const server=http.createServer((req,res)=>{
    //get all todos
     console.log(req.url,req.method);
// res.end("Welcome to todo app server");
if(pathname==="/todos" && req.method==='GET'){
    const data=fs.readFileSync(filePath,{encoding:"utf-8"})
    res.writeHead(201,{
        "content-type":"application/json",
        "email":"ph@gmail.com"

    })
  
res.end(data);
}
//post a todo
else if(pathname==="/todos/create-todo" && req.method==='POST'){
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
        fs.writeFileSync(filePath,JSON.stringify(parsedAllTodos,null,2),{encoding:"utf-8"})
        res.end(JSON.stringify({title,body,createdAt},null,2));
    })
}
else if(pathname==="/todos/update-todo" && req.method==='PATCH'){
    const title=url.searchParams.get("title");
    let data="";
    req.on("data",(chunk)=>{
data=data+chunk;
    });
  
    req.on("end",()=>{

        const {body}=JSON.parse(data);

      
      
        const allTodos=fs.readFileSync(filePath,{
            encoding:"utf-8"

        })
        const todoIndex=parsedAllTodos.findIndex((todo)=>todo.title===title)
        parsedAllTodos[todoIndex].body=body
       const parsedAllTodos=JSON.parse(allTodos);
        parsedAllTodos.push({title,body, createdAt})
        fs.writeFileSync(filePath,JSON.stringify(parsedAllTodos,null,2),{encoding:"utf-8"})
        res.end(JSON.stringify({title,body,createdAt},null,2));
    })
}
else if(pathname.startsWith("/todo") && req.method==='GET'){
    const title=url.searchParams.get("title");
    console.log(title);
    console.log(req.url,"single todo");
    const data=fs.readFileSync(filePath,{encoding:"utf-8"});
    const parseData=JSON.parse(data)
    const todo=parseData.find((todo)=>todo.title===title)
    const striingifiedToDo=JSON.stringify(todo);
    // const data=fs.readFileSync(filePath,{encoding:"utf-8"})
    // res.writeHead(201,{
    //     "content-type":"application/json",
    //     "email":"ph@gmail.com"

//     // })
res.end(striingifiedToDo);

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