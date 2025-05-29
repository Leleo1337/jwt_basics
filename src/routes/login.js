import express from 'express'
import { login } from '../controllers/login.js'

const router = express.Router()

// api/v1/login
router.post('/', login)

export default router