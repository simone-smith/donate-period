const Item = require('../models').Item;

module.exports = {
  create(req, res) {
    return Item
      .create({
        itemName: req.query.itemName,
        itemDescription: req.query.itemDescription,
        itemImage: req.query.itemImage,
        itemPrice: req.query.itemPrice,
        justGivingCharityId: req.params.justGivingCharityId
      })
      .then(item => res.status(201).send(item))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Item
      .all()
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send(error));
  },
};
