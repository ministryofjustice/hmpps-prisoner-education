const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
require('./routes/v19/routing.js')(router);
require('./routes/v20/routing.js')(router);
require('./routes/v22/routing.js')(router);
require('./routes/v23/routing.js')(router);
require('./routes/v24/routing.js')(router);



module.exports = router
