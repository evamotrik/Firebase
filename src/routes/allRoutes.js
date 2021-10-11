import * as express from 'express'
import authRoutes from "./localRoutes/authRoutes.js"

const router = express.Router()

router.use('/auth', authRoutes);

export default router

