//Lets make a For Loop that counts from 5-10...

for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}  

//Looping in reverse...

for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}

//Looping through arrays...

const videoGames = ['Halo', 'World of Warcraft', 'Hearthstone', 'Sims 4']

for (let i = 0; i < videoGames.length; i++) {
    const array = videoGames[i]
    console.log(`My favorite video games is: ${array}.`)
}

//Nested loops & comparing two different arrays...

const array1 = [1, 2, 3, 4, 5]
const array2 = [1, 2, 3, 4, 5, 6]
const mutualNumbers = []

const looping = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                mutualNumbers.push(array2[j])
            }
        }
    }
}

looping(array1, array2)
console.log(mutualNumbers)

//While loops & cnverting for loops into while loops...

for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
}


let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}

//Using break to stop the loop mid array...

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i])
    if (i > 1) {
        break;
    }
} 

console.log("And if you don't know, now you know.")

//Whales Speaking Project!

let input = "Gamers are oppressed!";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (i = 0; i < input.length; i++) {
    for (j = 0; j < vowels.length; j++) {
        if (input[i] == vowels[j]) {
        resultArray.push(input[i]);
        if (input[i] == "e" || input[i] == "u") {
            resultArray.push(input[i]);
        }
        }
    }
}

console.log(resultArray.join('').toUpperCase());
