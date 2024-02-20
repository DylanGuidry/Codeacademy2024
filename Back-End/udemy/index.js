const express = require('express')
const app = express()
const port = 3000

// app.use((request, response) => {
//     console.log('We got a new request!')
//     // response.send("Hello there!")
//     response.send({color: 'red'})
// })

app.get('/', (request, response) => {
    response.send('Welcome to the home page!')
})

app.get('/r/:subreddit', (request, response) => {
    const { subreddit } = request.params
    response.send(`Browsing the ${subreddit} subreddit!`)
})

app.get('/r/:subreddit/:postId', (request, response) => {
    const { subreddit, postId } = request.params
    response.send(`Viewing Post ID: ${postId} on the ${subreddit} subreddit!`)
})

app.get('/search', (request, response) => {
    console.log(request.query)
    const { q } = request.query
    if (!q) {
        response.send('Nothing found if nothing searched!')
    }
    response.send(`Search results for: ${q}!`)
})


app.post('/cats', (request, response) => {
    response.send('Post request to /cats')
})

app.get('/cats', (request, response) => {
    response.send('meow!')
})

app.get('/dogs', (request, response) => {
    response.send('woof!')
})

//This will match any route. It needs to be at the end of the file.
app.get('*', (request, response) => {
    response.send('I don\'t know that path!')
})

app.listen(port, () => {
    console.log("listening on port 3000")
})