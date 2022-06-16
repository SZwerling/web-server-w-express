const path = require('path') // is a core module with node
const express = require('express')  // express is a function, not an object

// __dirname  //from root of hard drive to directory
// path.join(__dirname, '../public')) // use path.join() to point from hardrive to public folder

const app = express()  // we call the function to create the application

app.use(express.static(path.join(__dirname, '../public'))) // express.static ?? configures application
// public folder is the only one exposed, that' why we put html and css in there.

app.set('view engine', 'hbs')  // set a value for a given express.js setting (name, value)
                               // hbs is handlebars for express, to create dynamic templating

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Index',
        name: 'Slimmy'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather Index',
        name: 'Slimmy'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'God helps those who help themselves.'
    })
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
