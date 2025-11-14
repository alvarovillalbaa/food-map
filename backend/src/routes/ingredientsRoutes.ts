import { Router, Request, Response } from 'express'

const router = Router()

router.post('/recognize', (req: Request, res: Response) => {
  // Mock implementation - returns random ingredients
  const mockIngredients = [
    ['tomate', 'huevo', 'cebolla'],
    ['huevo', 'patata', 'cebolla'],
    ['tomate', 'cebolla', 'ajo'],
    ['huevo', 'tomate'],
    ['patata', 'huevo'],
  ]

  const randomIngredients =
    mockIngredients[Math.floor(Math.random() * mockIngredients.length)]

  res.json({
    ingredients: randomIngredients,
  })
})

export default router

