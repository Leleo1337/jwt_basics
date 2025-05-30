import express from 'express'
import { dashboard } from '../controllers/dashboard.js'
import authMiddleware from '../middlewares/auth.js'

const router = express.Router()

// api/v1/dashboard
router.get('/',authMiddleware,dashboard)

export default router