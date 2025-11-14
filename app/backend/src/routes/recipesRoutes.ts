import { Router, Request, Response } from 'express'
import { recipes } from '../data/recipesData'

const router = Router()

router.post('/suggest', (req: Request, res: Response) => {
  const { ingredients } = req.body

  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: 'ingredients must be an array' })
  }

  // Filter recipes that contain at least one of the provided ingredients
  const matchingRecipes = recipes.filter((recipe) =>
    ingredients.some((ingredient: string) =>
      recipe.ingredients.some(
        (recipeIngredient) =>
          recipeIngredient.toLowerCase() === ingredient.toLowerCase()
      )
    )
  )

  // Map to response format
  const responseRecipes = matchingRecipes.map((recipe) => ({
    title: recipe.title,
    description: recipe.description,
    usedIngredients: recipe.ingredients.filter((ing) =>
      ingredients.some(
        (providedIng: string) =>
          providedIng.toLowerCase() === ing.toLowerCase()
      )
    ),
    steps: recipe.steps,
  }))

  res.json({
    recipes: responseRecipes,
  })
})

// Store completed recipes (in a real app, this would be saved to a database)
let completedRecipes: string[] = []

router.post('/complete', (req: Request, res: Response) => {
  const { recipes } = req.body

  if (!recipes || !Array.isArray(recipes)) {
    return res.status(400).json({ error: 'recipes must be an array' })
  }

  // Add new completed recipes (avoid duplicates)
  recipes.forEach((recipe: string) => {
    if (!completedRecipes.includes(recipe)) {
      completedRecipes.push(recipe)
    }
  })

  res.json({
    success: true,
    message: 'Recipes marked as complete',
    completedRecipes: completedRecipes,
  })
})

router.get('/completed', (req: Request, res: Response) => {
  res.json({
    completedRecipes: completedRecipes,
  })
})

export default router

