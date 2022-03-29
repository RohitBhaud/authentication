const app=require("./index");


const connect=require("./configue/db");

app.listen(5000,async()=>{
    await connect();
    console.log("listening port 5000")
})