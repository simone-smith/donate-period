const express = require('express');
const app = module.exports = express();
const cors = require('cors');
const PORT = 3010;
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

require('./server/routes')(app);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`)
});
