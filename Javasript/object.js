//The object I will be usning...
//Objects are full of keys:values as seen below...

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
};

//accessing object data

const crewCount = spaceship.numCrew
console.log(crewCount)
const planetArray = spaceship.flightPath
console.log(planetArray)

//bracket notation...
//object is spaceship and prop name are the keys...

const isActive = spaceship2['Active Mission']
console.log(isActive)
let propName =  'Active Mission';
console.log(spaceship2[propName]);

//property assignments...

spaceship.color = 'blue'
console.log(spaceship)

delete spaceship.color 
console.log(spaceship)

//looping through a objects

let spaceshipFor = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceshipFor.crew) {
    console.log(`${crewMember}: ${spaceshipFor.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};