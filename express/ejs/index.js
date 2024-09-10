import express from "express";

const app = express();
const port = 3000;


app.get("/", (req,res) =>
{
    let today = new Date().getDay();
    let adv = "blah";

    if(today == 0 || today == 6)
    {
        today = "weekend";
        adv = "Go Out And Enjoy";
    }
    else{
        today = "weekday";
        adv = "Go To Work";
    }

    res.render("index.ejs",{dayType: today, advice:adv});

})

app.listen(port, ()=>
{
    console.log(`Server Running on PORT ${port}`);
})