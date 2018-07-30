const Item = require('../models').Item;

module.exports = {
  create(req, res) {
    return Item
      .create({
        product: req.query.product,
        price: req.query.price,
        charityId: req.params.charityId
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
