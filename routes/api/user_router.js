var router = require('koa-router')();
var user_controller = require('../../app/controllers/user_controller');

router.get('/getUser', user_controller.getUser);
router.post('/registerUser', user_controller.registerUser);

module.exports = router;
