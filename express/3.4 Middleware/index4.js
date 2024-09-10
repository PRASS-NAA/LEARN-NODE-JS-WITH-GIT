import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGen(req,res,next)
{
  console.log(req.body);
  console.log(req.body["street"]);
  console.log(req.body["pet"]);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

function myLogger(req,res,next)
{
  console.log(req.method);
  console.log(req.url);
  next();
}

app.use(bandNameGen);
app.use(myLogger);

app.get("/",(req,res) =>{
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit",(req,res) =>
{
  res.send(`<h1>Your BandName Is ${bandName}</h1>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
