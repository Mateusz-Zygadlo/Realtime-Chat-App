import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register)
router.get('/register', (req: Request, res: Response) => {
  return res.json({
    result: 'register page'
  })
})
router.post('/login', userController.login);
router.get('/login', (req: Request, res: Response) => {
  return res.json({
    result: 'login page'
  })
})
router.get('/logout', userController.logout);

module.exports = router; 