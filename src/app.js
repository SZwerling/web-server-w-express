const express = require('express')  // express is a function, not an object

const app = express()  // we call the function to create the application

app.get('', (req, res) => {
    res.send('<h1>weather</h1>')
})   // Configure app to respond to different requests


app.get('/help', (req, res) => {
    res.send([{
        name: 'slim',
        age: 46
    }, 36, 'johnny'])
})

app.get('/about', (req, res) => {
    res.send('<h1>this is the about page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'My pants',
        forecast: 'Lurid'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
