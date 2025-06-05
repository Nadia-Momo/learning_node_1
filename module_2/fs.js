//1. synchronous
//1. file read i/o intensive task=>single thread=>not go to thread pool-->
//2. asyncronous
//file read ->single thread ->event loop ->thread pool->task complete hobe
const fs=require("fs");
const data=fs.readFileSync("./hello.txt",{encoding:"utf-8"});
console.log(data);