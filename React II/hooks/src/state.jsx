import React, { useState } from 'react';

function State() {
    const [toggle, setToggle] = useState();

    return (
        <div>
            <h1>Toggle is: {toggle}</h1>
            <button onClick={() => setToggle('On')}>On</button>
            <button onClick={() => setToggle('Off')}>Off</button>
        </div>
    );
}

export default State;
