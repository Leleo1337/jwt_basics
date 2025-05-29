import express from 'express'
import { dashboard } from '../controllers/dashboard.js'

const router = express.Router()

// api/v1/dashboard
router.get('/', dashboard)

export default router