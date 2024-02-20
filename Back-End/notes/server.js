//THIS IS WGAT EVERY SINGLE SERVER WILL LOOK LIKE WITH EXPRESS...
//TEMPLATE

// Import the express library here
const express = require('express');
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;

const expressions = [];
// seedElements(expressions, 'expressions');

//Expressions would be the path we use for our  fetch on the front-end
// Open a call to `app.get()` below:
app.get('/expressions', (req, res, next) => {
    console.log(req)
    //Sending expressions array on fetch request
    res.send(expressions);
});

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//For example, if your server receives a GET request at /monsters, we will use a route to define the appropriate functionality for that HTTP verb (GET) and path (/monsters).
//Parameters are route path segments that begin with :

// Add a new call to app.get('/expressions/:id') here
app.get('/expressions/:id', (req, res, next) => {
    //Variable that is finding both the id and expressions within the array...
    const foundExpression = getElementById(req.params.id, expressions);
    if (foundExpression) {
        res.send(foundExpression);
    } else {
        res.status(404).send();
    }
});

// Express provides methods for each one: app.put(), app.post(), and app.delete().
//PUT requests are used for updating existing resources.

app.put()

//Query strings appear at the end of the path in URLs, and they are indicated with a ? character. For instance, in /monsters/1?name=chimera&age=1, the query string is name=chimera&age=1 and the path is /monsters/1/

app.put('/expressions/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
        updateElement(req.params.id, req.query, expressions);
        res.send(expressions[expressionIndex]);
    } else {
        res.status(404).send();
    }
});

//More examples...

app.get('/battlefields/:name', (req, res, next) => {
    const battlefieldName = req.params.name;
    const battlefield = battlefields[battlefieldName];
    if (battlefield){
        res.send(battlefield);
    } else {
        res.status(404).send();
    }
});