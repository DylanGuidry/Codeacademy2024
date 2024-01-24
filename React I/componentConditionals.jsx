//Using if statements to render elements accordingly

import React from 'react';

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan() {
    if (fiftyFifty == true) {
        return <h1>Tonight I'm going out WOOO</h1>
    } else {
        return <h1>Tonight I'm going to bed WOOO</h1>
    }
}

// export default TonightsPlan

//Using eventlisteners in JSX

import React from 'react';

function SubmitButton() {
    function handleClick() {
        alert('Submission Successful.');
    }
    return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;
