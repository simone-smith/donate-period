const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const wishlist = [
                    { "item": "toilet paper" },
                    { "item": "sanitary pads" },
                    { "item": "tampons" },
                    { "item": "wet wipes" }
                 ];


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/wishlist/', function(req, res) {
    res.json(wishlist);
});


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`)
});