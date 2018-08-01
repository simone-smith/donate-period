const charitiesController = require('../controllers').charities;
const itemsController = require('../controllers').items;

module.exports = (app) => {
  app.get('/api', (req, res) => {
    return res.status(200).send({
      message: 'Welcome to the Charities API!',
    })
  });

  app.get('/api/charities', (req, res) => {
    charitiesController.list(req, res)
  });
  app.get('/api/charities/:justGivingCharityId', (req, res) => {
    charitiesController.retrieve(req, res)
  });

  // These routes are not tested, as they exist solely to enable us to seed the database
  app.post('/api/charities', (req, res) => {
    charitiesController.create(req, res)
  });
  app.post('/api/charities/:justGivingCharityId/items', (req, res) => {
    itemsController.create(req, res)
  });
};
