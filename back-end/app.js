const express = require('express');
const app = module.exports = express();
const cors = require('cors');
const PORT = 3010;
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

require('./server/routes')(app);

const wishlist = [
                    { "item": "toilet paper" },
                    { "item": "sanitary pads" },
                    { "item": "tampons" },
                    { "item": "wet wipes" }
                 ];

app.get('/wishlist/', function(req, res) {
  res.json(wishlist);
});

app.post('/wishlist/', function(req, res) {
  const item = { "item": req.body.item };
  wishlist.push(item);

  res.json(wishlist);
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`)
});
