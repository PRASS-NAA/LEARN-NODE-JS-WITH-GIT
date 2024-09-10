import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extender: true}));

app.get("/", (req,res)=>
{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>
{
    const fname = req.body["fname"];
    const lname = req.body["lname"];
    const fullname = fname+lname;

    console.log(`${fname} ${lname}`);

    const num = fname.length + lname.length;

    res.render("index.ejs",{number: num,fulln: fullname});
})


app.listen(port, () =>
{
    console.log(`server running on port ${port}`);
})