import express from 'express'
import { teste2 } from '../controllers/login.js'

const router = express.Router()

// api/v1/login
router.post('/', teste2)

export default router