const express = require('express');
const app = module.exports = express();
const path = require('path');
const PORT = 3010;

const wishlist = [
                    { "item": "toilet paper" },
                    { "item": "sanitary pads" },
                    { "item": "tampons" },
                    { "item": "wet wipes" }
                 ];

app.get('/wishlist/', function(req, res) {
    res.json(wishlist);
});


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`)
});
