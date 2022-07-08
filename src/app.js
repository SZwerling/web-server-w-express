const path = require("path"); // is a core module with node
const express = require("express"); // express is a function, not an object
const hbs = require("hbs");

const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

// __dirname  //from root of hard drive to directory
// path.join(__dirname, '../public')) // use path.join() to point from hardrive to public folder

const app = express(); // we call the function to create the application

// could also const whatev = path.join(__dirname, '../public') and app.use(express.static(whatev))
// This sets up static directory to serve
app.use(express.static(path.join(__dirname, "../public"))); // express.static ?? configures application
// public folder is the only one exposed, that's why we put html and css in there. ^^
const viewsPath = path.join(__dirname, "../templates/views"); //customizing hb so we don't have to use 'view' directory and can put it anywhere
const partialsPath = path.join(__dirname, "../templates/partials");

// These two function calls are specific to handlebars for express -- hbs
app.set("view engine", "hbs"); // set a value for a given express.js setting (name, value)
// hbs is handlebars for express, to create dynamic templating
app.set("views", viewsPath);
hbs.registerPartials(partialsPath); //like app.set, but using hbs

app.get("", (req, res) => {
   res.render("index", {
      title: "Weather Index",
      name: "Slimmy",
   });
});

app.get("/about", (req, res) => {
   res.render("about", {
      title: "About",
      name: "Slimmy",
   });
});

app.get("/help", (req, res) => {
   res.render("help", {
      message: "God helps those who help themselves.",
      title: "Help",
      name: "Slimmy",
   });
});

app.get("/weather", (req, res) => {
   if (!req.query.address) {
      return res.send({
         error: "You must provide an address.",
      });
   }

   geocode(req.query.address, (error, { latitude, longitude, name }) => {
      if (error) {
         return res.send({ error }); // object prop/val shorthand
      }

      forecast(latitude, longitude, (error, forecastData) => {
         if (error) {
            return res.send({ error });
         }

         res.send({
            forecast: forecastData,
            location: name,
            address: req.query.address
         });
      });
   });
});

app.get("/products", (req, res) => {
   if (!req.query.search) {
      return res.send({
         error: "Must provide a search term.",
      });
   }
   res.send({
      products: [],
   });
});

app.get("/help/*", (req, res) => {
   res.render("notFound", {
      title: "help not found",
      message: "Help Page Not Found",
      name: "Slimmy",
   });
});

app.get("*", (req, res) => {
   res.render("notFound", {
      title: "404",
      message: "Page Not Found",
      name: "Slimmy",
   });
});

app.listen(3000, () => {
   console.log("Server is up on port 3000");
});
