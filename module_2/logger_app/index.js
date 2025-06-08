console.log(process.argv);
const path=require("path");
const fs=require("fs");
const inputarguments=process.argv.slice(2);
const text=inputarguments.join(" ").concat("\n");
const timestamp=new Date().toISOString();
console.log(timestamp);
console.log(text);
console.log(text);
const message=`${text} ${timestamp}\n`;
if(!text){
    console.log("❌ please provide a message to logo");
    console.log("Example:node index.js hello world!!");
    process.exit(1);
}
console.log(text);
const filepath=path.join(__dirname,"log.txt");
fs.appendFile(filepath,text,{encoding:"utf-8"},()=>{
    console.log("Your log added succesfully");
})
console.log(filepath);
console.log(inputarguments);