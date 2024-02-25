const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('home.ejs')
})

app.listen(port, () => {
    console.log("listening on port 3000")
})