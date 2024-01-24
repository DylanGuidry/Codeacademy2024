//Array

const colors = ['Yellow', 'Red', 'Blue']

console.log(colors)

//The length of the array...

console.log(colors.length)

//Lets push a new item to the array...

colors.push('Green')

console.log(colors)

//Lets pop (remove) the last element from the array...

colors.pop()

console.log(colors)

//Lets shift (remove) the first item from the array...

colors.shift()

console.log(colors)

//Functions and Arrays

const concept = ['Arrays', 'can', 'be', 'mutated.']

const changeArray = () => {
    console.log(concept)
    concept[3] = 'MUTATED!'
    console.log(concept)
    concept.pop()
    console.log(concept)
}

changeArray(concept)

//Nested Arrays

const nestedArray = [[1], [2, 3]]

console.log(nestedArray[1])
console.log(nestedArray[1][1])