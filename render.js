//setting up the modules
const inquirer = require('inquirer');
const fs = require('fs');
//pulling in the shape files created
const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');

//creating prompts for the user
inquirer.prompt([
    {
        type: "input",
        name: "characters",
        message: "Enter Up to three letters for your Logo's text",
        //making sure the user enters up to 3 
        validate: function(input) {
            if(input.length <= 3) {
                return true;
            }
            else {
                return "To many/little characters, 1-3 only!"
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a text color (EX-blue)!"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose your shape!",
        choices: ["circle", "square", "triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for your shape!"
    },    
])
//creating a function to run after the inquirer prompts are complete
//creating an if-else statement that will create the logos based on which options the user has selected!
//using the .then promise method 
//passing usersChoice into the if-else statement
.then((usersChoice) => {
    //shapeType will hold the final shape type selected!
    var shapeType = '';
    //creating the if statement to compare which shape the user selected
    if(usersChoice.shape === 'circle'){
        //setting up a const to hold the new circle instance
        const circleObject = new Circle();
        //setting the object = to the users selected color
        circleObject.setColor(usersChoice.shapeColor);
        //setting shapeType = the new object created
        //calling the render function 
        shapeType = circleObject.render();
    }
    //following the same steps for the square option
    else if(usersChoice.shape === "square") {
        const squareObject = new Square();
        squareObject.setColor(usersChoice.colorShape);
        shapeType = squareObject.render();
    }
    //following the same steps for the triangle option
    else if(usersChoice.shape === "triangle") {
        const triangleObject = new Triangle();
        triangleObject.setColor(usersChoice.colorShape);
        shapeType = triangleObject.render();
    }

    //since we want to create the logo after the prompts are completed we need to keep it in the .then function
    //writing a file that will hold the shapeType value
    //                        passing in our two arguments from the if statement!
    const createTheFile = svgFile(usersChoice, shapeType);
    //using the fs module to actually create the file
    fs.writeFile('logo.svg', createTheFile, (err) => {
        console.log(err); console.log('Created SVG File!')
    })
})
//we need to create a template literal string so we can add the users choices into it each time the program is run. 
//this needs to reference the created file!
//i pass in m,y arguments like this because I am using a template literal!
function svgFile({characters, textColor, shape, shapeColor}, shapeType){
    //this function will return a template literal string with the users choices
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeType}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
    ${characters}</text>
    </svg>`;
}
//shape and shape color are not called here, they are called in the specific shape classes 