import express from "express";
const app = express();
const port = 3000;



function logger(req,res,next)
{
  console.log(req.url);
  console.log(req.method);
  next();
}

app.use(logger);

app.get("/",(req,res) =>
{
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple","banana","cherry"],
    htmlContent: "<em>This is some text</em>"
  };

  res.render("index.ejs",data);
})

app.listen(port,()=>
{
  console.log(`Server is running on port ${port}`);
})