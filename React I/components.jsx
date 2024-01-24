//This is the basci temmplace for JSX/ React

import React from "react";

function MyQuote() {
    return (
        <blockquote>
        <p>What is important now is to recover our senses.</p>
        <cite>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
            Susan Sontag
            </a>
        </cite>
        </blockquote>
    );
}

//Another example on how to use JS in JSX

// export default MyQuote

import React from 'react';

const owl = {
    title: 'Excellent Owl',
    src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

//Define function component here:
function Owl() {
    return (
        <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title}/>
        </div>
    )
}

// export default Owl

//Example 2:

import React from 'react';

const friends = [
    {
        title: "Yummmmmmm",
        src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys! Wait Up!",
        src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
];

// New function component starts here:
function Friend() {
const friend = friends[0]
    return (
        <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} alt={friend.title}/>
        </div>
    )
}

// export default Friend