import { Router, Request, Response } from 'express'
import { dishDb } from '../data/dishDb'

const router = Router()

router.post('/recognize', (req: Request, res: Response) => {
  // Mock implementation - returns a random dish from the database
  const randomDish = dishDb[Math.floor(Math.random() * dishDb.length)]

  // Generate a random confidence between 0.75 and 0.95
  const confidence = 0.75 + Math.random() * 0.2

  res.json({
    dishName: randomDish.name,
    countryCode: randomDish.countryCode,
    countryName: randomDish.countryName,
    confidence: Math.round(confidence * 100) / 100,
  })
})

export default router

