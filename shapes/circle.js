//this is the code for the circle class
//we are building the blueprint for the circle rendering

class Circle {
    constructor(){
        //using this to refer to the circle object
        this.text = '';
    }
    //passing in the users shape color selection
    setColor(shapeColor){
        //creating another template literal to hold the dimensions of the render
        this.text =  `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    }
    //calling the render function and passing in the template literal
    render(){
        return this.text;
    }
}

//using module-export to share this class with the script.js file!
export default Circle;
