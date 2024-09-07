/*let generatename = require('sillyname');

let name = generatename();

console.log(`Random Name Generated is ${name}`);*/

/*import generateName from "sillyname";

let name = generateName();

console.log(`Random Name Generated is ${name}`);*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

let count = 0;

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Type in your URL : ",
        name : "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    count++;
    qr_svg.pipe(fs.createWriteStream(`${count}.png`));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });