import express from 'express'
import { teste1 } from '../controllers/dashboard.js'

const router = express.Router()

// api/v1/dashboard
router.get('/', teste1)

export default router