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

export default router

