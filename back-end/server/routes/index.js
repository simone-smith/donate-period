const charitiesController = require('../controllers').charities;
const itemsController = require('../controllers').items;

module.exports = (app) => {
  app.get('/api', (req, res) => {
    return res.status(200).send({
      message: 'Welcome to the Charities API!',
    })
  });

  app.post('/api/charities', (req, res) => {
    charitiesController.create(req, res)
  });
  app.get('/api/charities', (req, res) => {
    charitiesController.list(req, res)
  });
  app.get('/api/charities/:charityId', (req, res) => {
    charitiesController.retrieve(req, res)
  });

  app.post('/api/charities/:charityId/items', (req, res) => {
    itemsController.create(req, res)
  });
  app.get('/api/charities/:charityId/items', (req, res) => {
    itemsController.list(req, res)
  });
};
