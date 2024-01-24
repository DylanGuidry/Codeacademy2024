//Mainly if..else statments and ternary oporators.. Simply stuff.. No need for notes here.

//Switch & Case
let athleteFinalPosition = "first place";

switch (athleteFinalPosition) {
    case "first place":
        console.log("You get the gold medal!");
        break;
    case "second place":
        console.log("You get the silver medal!");
        break;
    case "third place":
        console.log("You get the bronze medal!");
        break;
    default:
        console.log("No medal awarded.");
        break;
}

//Example 2

const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}

console.log(lifePhase(10)) 