const express=require('express')
const router=express.Router()
const authControllers=require('../controllers/authControllers')
const authMiddlewares = require('../middlewares/authMiddlewares')
const payControllers = require('../controllers/payControllers')

router.get('/login',authControllers.show)
router.get('/pay',authMiddlewares,payControllers.show)
router.post('/pay',authMiddlewares,payControllers.pay)
router.post('/login',authControllers.login)
router.get('/create',authControllers.showCreate)
router.post('/create',authControllers.create)

router.get('/user',authMiddlewares,authControllers.user)


module.exports =router