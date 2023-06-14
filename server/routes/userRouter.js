const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController.js')
const authMiddleware = require('../middleware/authMiddleware.js');

router.post('/registration', userController.registration)
router.get('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router