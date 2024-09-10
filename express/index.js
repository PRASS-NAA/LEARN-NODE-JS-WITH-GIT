import express from "express";
const app = express();
const PORT = 3000;


app.get("/",(req,res) =>
{
    res.send("<h1>My First Express Code !!! </h1>");
})


app.get("/about",(req,res) =>
{
    res.send("<h1>I am Prasanna</h1>");
})

app.get("/contact",(req,res) =>
{
    res.send("<h1>7598713100</h1>");
})



app.listen(PORT,() =>
{
    console.log(`Server Is Running On PORT ${PORT} !`);
})