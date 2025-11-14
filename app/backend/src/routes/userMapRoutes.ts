import { Router, Request, Response } from 'express'

const router = Router()

router.get('/map', (req: Request, res: Response) => {
  // Mock implementation - returns sample unlocked countries
  res.json({
    countries: [
      { code: 'ES', name: 'España', dishes: ['Paella'] },
      { code: 'IT', name: 'Italia', dishes: ['Pizza'] },
    ],
  })
})

export default router

