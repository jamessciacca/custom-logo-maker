class Triangle {
    constructor(){
        //using this to refer to the triangle object
        this.text = '';
    }
    //passing in the users shape color selection
    setColor(shapeColor){
        //creating another template literal to hold the dimensions of the render
        this.text = `<polygon points="150,25 250,150 50,150" fill="${shapeColor}"/>`;
    }
    //calling the render function and passing in the template literal
    render(){
        return this.text;
    }
}

module.export = Triangle;