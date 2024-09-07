const fs = require("fs");

fs.writeFile("example.txt","Hello From Prasanna", (err) =>
{
    if (err) throw err;
    console.log("The file has been saved");
});

fs.appendFile("example.txt","This is Appended data", (err) =>
{
    if (err) throw err;
    console.log("File Appended \n");
})

fs.readFile("./example.txt","utf-8",(err, data) =>
{
    if (err) throw err;
    console.log(data);
})

fs.stat((err,stat) =>
{
    if (err){
        console.log(err);
    }
    console.log(stat.isFile());
console.log(stat.isFile()); // true
console.log(stat.isDirectory()); // false
console.log(stat.isSymbolicLink()); // false
console.log(stat.size);
})


