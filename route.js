// import express router
const router = require('express').Router();
// import controller
const rootController = require('./controllers/root');
// api
router.get('/', rootController.home);
router.get('/game', rootController.permainan);
router.post('/login', rootController.masuk,); 


// export router
module.exports = router;
  