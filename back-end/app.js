const express = require('express');
const app = module.exports = express();
const cors = require('cors');
const PORT = 3010;
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

const charityWishlists = [ { justGivingCharityId: 2201,
                              "wishlist": [
                                { "itemID": 1,
                                  "itemName": "toilet paper",
                                  "itemDescription": "Great paper",
                                  "itemImage": "http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
                                  "itemPrice": 2.99
                                },
                                { "itemID": 2,
                                  "itemName": "tampons",
                                  "itemDescription": "Great stuff",
                                  "itemImage": "http://images.justgiving.com/image/b410179a-2042-4c6b-903b-df106b48fc3c.jpg",
                                  "itemPrice": 1.99
                                }
                              ]
                            },
                            { justGivingCharityId: 2357,
                                "wishlist": [
                                  { "itemID": 3,
                                    "itemName": "cleaning fluid",
                                    "itemDescription": "Great fluid",
                                    "itemImage": "http://images.justgiving.com/image/e5a09986-d0cd-4196-a0a6-4d7acb9b8ea4.png",
                                    "itemPrice": 4.99
                                  },
                                  { "itemID": 2,
                                    "itemName": "tampons",
                                    "itemDescription": "Great stuff",
                                    "itemImage": "http://images.justgiving.com/image/b410179a-2042-4c6b-903b-df106b48fc3c.jpg",
                                    "itemPrice": 1.99
                                  }
                                ]
                              },
                              { justGivingCharityId: 2116,
                                "wishlist": [
                                  { "itemID": 1,
                                    "itemName": "toilet paper",
                                    "itemDescription": "Great paper",
                                    "itemImage": "http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
                                    "itemPrice": 2.99
                                  },
                                  { "itemID": 2,
                                    "itemName": "tampons",
                                    "itemDescription": "Great stuff",
                                    "itemImage": "http://images.justgiving.com/image/b410179a-2042-4c6b-903b-df106b48fc3c.jpg",
                                    "itemPrice": 1.99
                                  },
                                  { "itemID": 3,
                                    "itemName": "cleaning fluid",
                                    "itemDescription": "Great fluid",
                                    "itemImage": "http://images.justgiving.com/image/e5a09986-d0cd-4196-a0a6-4d7acb9b8ea4.png",
                                    "itemPrice": 4.99
                                  },
                                ]
                              }
                          ];


 app.get('/charity/:justGivingCharityId', function(req, res) {
   const charityWishlist = charityWishlists.find(c => c.justGivingCharityId === parseInt(req.params.justGivingCharityId));
   const msg_404 = 'The wishlist for the given ID not found';
   if (!charityWishlists) return res.status(404).send(msg_404);

   res.send(charityWishlist);
 });


app.get('/wishlist /', function(req, res) {
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
