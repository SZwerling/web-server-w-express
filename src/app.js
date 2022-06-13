const express = require('express')  // express is a function, not an object

const app = express()  // we call the function to create the application

app.get('', (req, res) => {
    res.send('Hello Express')
})   // Configure app to respond to different requests


app.get('/help', (req, res) => {
    res.send('Un-Help Desk')
})

app.get('/about', (req, res) => {
    res.send('The About Page')
})

app.get('/weather', (req, res) => {
    res.send('The weather page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
