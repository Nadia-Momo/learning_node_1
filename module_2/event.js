const EventEmitter=require("node:events");//node colon na diye sudu evrnt dilai hoa jeto
class SchoolBell extends EventEmitter{

}
const  schoolBell= new SchoolBell();
schoolBell.on('ring', () => {
  console.log('yahoo class sesh');
});
schoolBell.on('broken', () => {
  console.log('oh no class ki sesh hobe na');
});
schoolBell.on('ring',()=>{
    console.log("oi arekta class ase");
})
schoolBell.emit("ring");
schoolBell.emit("broken");
