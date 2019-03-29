const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const app = express();

//use cors
app.use(cors())

app.use(express.static(__dirname));
app.use(bodyParser.json()); // support json encoded bodies




var urlFront= "https://play.pokemonshowdown.com/sprites/xyani/";
var urlBack= "https://play.pokemonshowdown.com/sprites/xyani-back/";

// some data for the API
var pokemon = [
  {"name":"Pikachu", "pv":35, "pvperdu":35, "attaque":55, "attaqueSpe":50, "defense":40, "defenseSpe":50, "vitesse":90, "url":urlFront+"pikachu.gif", "urlb":urlBack+"pikachu.gif"},
  {"name":"Bulbizarre", "pv":45, "pvperdu":45, "attaque":49, "attaqueSpe":65, "defense":49, "defenseSpe":65, "vitesse":49, "url":urlFront+"bulbasaur.gif", "urlb":urlBack+"bulbasaur.gif"}
  ]

/*****************************************************/
/*****************************************************/
/*****************************************************/
/*****************************************************/
/*****************************************************/


var foods = [
];


var books = [
];

var movies = [
];


// the GET "books" API endpoint
app.get('/api/books', function (req, res) {
    res.send(books);
});

app.get('/api/pokemon', function (req, res) {
  res.send(pokemon);
});

// the GET "movies" API endpoint
app.get('/api/movies', function (req, res) {
    res.send(movies);
});

// the GET "foods" API endpoint
app.get('/api/food', function (req, res) {

    console.log("GET foods");

    // This is a very simple API endpoint. It returns the current value of the "foods" array.
    res.send(foods);

});

// POST endpoint for creating a new food
app.post('/api/food', function (req, res) {
    // NOTE: This is a sample app to show the Angular Http client functionality.
    // This API endpoint keeps the submitted data in memory. It does not save to a database.

    // This example uses Express because it is easy to install and run.
    // You could write a different back-end app in PHP, Python, Ruby, .NET, etc.

    console.log("POST food: " + req.body.name);

    // calculate the next ID
    let id = 1;
    if (foods.length > 0) {
        let maximum = Math.max.apply(Math, foods.map(function (f) { return f.id; }));
        id = maximum + 1;
    }

    // build the new food object
    let new_food = {"id": id, "name": req.body.name};

    // "save" the data by adding it to the "foods" array in memory
    foods.push(new_food);

    // In the real world, you would put code here to save the data to a
    // database or another type of storage.

    // When we're done, it's nice to return the newly created object to the caller.
    res.send(new_food);

});

// PUT endpoint for editing food
app.put('/api/food/:id', function (req, res) {

    console.log("PUT food: " + req.params.id);

    // read the ID from the query string
    let id = req.params.id;

    // find the requested food in the array
    let f = foods.find(x => x.id == id);

    // write the new name to the data storage
    f.name = req.body.name;

    // send a copy of the modified object back to the caller
    res.send(f);

});

// DELETE endpoint for deleting food
app.delete('/api/food/:id', function (req, res) {

    console.log("DELETE food: " + req.params.id);

    // read the ID from the query string
    // (DELETE requests don't have a body)
    let id = req.params.id;

    // read the object from the data (so we have it later)
    let f = foods.find(x => x.id == id);

    // remove it from the data
    foods = foods.filter(x => x.id != id);

    // send back the object we deleted, in case the caller wants to look at what was there
    res.send(f);
});





/*****************************************************/
/*****************************************************/
/*****************************************************/
/*****************************************************/
/*****************************************************/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// HTTP listener
app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});
module.exports = app;
