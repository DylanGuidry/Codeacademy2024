const express = require('express')
const app = express()
const port = 3000

app.use((request, response) => {
    console.log('We got a new request!')
    response.send("Hello there!")
})

app.listen(port, () => {
    console.log("listening on port 3000")
})