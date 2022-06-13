const path = require('path') // is a core module with node
const express = require('express')  // express is a function, not an object

// __dirname  //from root of hard drive to directory
// path.join(__dirname, '../public')) // use path.join() to point from hardrive to public folder

const app = express()  // we call the function to create the application

app.use(express.static(path.join(__dirname, '../public'))) // express.static ?? configures application


app.get('/weather', (req, res) => {
    res.send({
        location: 'My pants',
        forecast: 'Lurid'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
