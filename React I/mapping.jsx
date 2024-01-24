//mapping through array in JSX 

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map(person =>
    // expression goes here:
    //key will keep this list in order
    <li key={'person_'+ i}>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);