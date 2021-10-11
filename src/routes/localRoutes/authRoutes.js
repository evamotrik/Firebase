import express from 'express'
import authController from '../../controllers/authController.js'
const router = express.Router()

router.post('/registration', authController.registration)
router.post('/login', authController.login)

export default router

