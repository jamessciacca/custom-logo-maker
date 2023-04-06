//same thing for the square 
class Square {
    constructor(){
        //using this to refer to the square object
        this.text = '';
    }
    //passing in the users shape color selection
    setColor(shapeColor){
        //creating another template literal to hold the dimensions of the render
        this.text = `<rect width="100%" height="100%" fill="${shapeColor}" />`;
    }
    //calling the render function and passing in the template literal
    render(){
        return this.text;
    }
}

export default Square;