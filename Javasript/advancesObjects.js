//using .this keyword

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        //using .this to access other propertiers in the object
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
}; 

console.log(robot.provideInfo())


