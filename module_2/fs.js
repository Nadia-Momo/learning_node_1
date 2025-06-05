//1. synchronous
//1. file read i/o intensive task=>single thread=>not go to thread pool-->
//2. asyncronous
//file read ->single thread ->event loop ->thread pool->task complete hobe
const fs=require("fs");
console.log("line 1");
const text="Learning file system";
fs.writeFileSync("./hello.txt",text);
console.log("Line 3");
const data=fs.readFileSync("./hello.txt",{encoding:"utf-8"});
console.log("Line 4");
console.log(data);
fs.readFile("./hello.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.error("Error reading file",err);
        return;
    }
    console.log("File contents:",data);
})