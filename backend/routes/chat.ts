import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
  return res.json({
    success: 'chat id'
  })
})

module.exports = router; 