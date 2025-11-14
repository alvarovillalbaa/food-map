import { anthropic } from '@ai-sdk/anthropic'
import { generateObject } from 'ai'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const nutritionalInfoSchema = z.object({
  calories: z.number().describe('Estimated calories per serving'),
  protein: z.string().describe('Protein content (e.g., "15g")'),
  carbs: z.string().describe('Carbohydrate content (e.g., "30g")'),
  fat: z.string().describe('Fat content (e.g., "10g")'),
})

const recipeSchema = z.object({
  title: z.string().describe('Name of the recipe'),
  description: z
    .string()
    .describe('Brief description of the dish (1-2 sentences)'),
  usedIngredients: z
    .array(z.string())
    .describe('List of ingredients from the input that are used in this recipe'),
  steps: z
    .array(z.string())
    .describe('Step-by-step cooking instructions'),
  cookingTime: z
    .string()
    .describe('Total cooking time (e.g., "30 minutes", "1 hour")'),
  difficulty: z
    .enum(['Easy', 'Medium', 'Hard'])
    .describe('Difficulty level of the recipe'),
  servings: z.number().describe('Number of servings this recipe makes'),
  nutritionalInfo: nutritionalInfoSchema,
})

const recipeSuggestionsSchema = z.object({
  recipes: z
    .array(recipeSchema)
    .min(3)
    .max(5)
    .describe('List of 3-5 recipe suggestions'),
})

export async function POST(req: Request) {
  try {
    const { ingredients } = await req.json()

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length < 2) {
      return NextResponse.json(
        { error: 'At least 2 ingredients are required' },
        { status: 400 }
      )
    }

    const { object } = await generateObject({
      model: anthropic('claude-3-5-sonnet-20241022'),
      temperature: 0.7,
      schema: recipeSuggestionsSchema,
      messages: [
        {
          role: 'user',
          content: `Given the following ingredients: ${ingredients.join(', ')}

Generate 3-5 diverse and practical recipe suggestions that use some or all of these ingredients. For each recipe:

1. Create an appealing title
2. Write a brief, appetizing description
3. List which of the provided ingredients are used
4. Provide clear, numbered cooking steps (be specific and practical)
5. Estimate realistic cooking time (prep + cooking)
6. Assign appropriate difficulty (Easy/Medium/Hard based on technique required)
7. Specify number of servings
8. Provide estimated nutritional information per serving

Make the recipes diverse in cuisine type and cooking method. Prioritize recipes that use the most ingredients from the list. You can assume common pantry staples (oil, salt, pepper, etc.) are available even if not listed.`,
        },
      ],
    })

    return NextResponse.json({
      recipes: object.recipes,
    })
  } catch (error) {
    console.error('Error generating recipe suggestions:', error)
    return NextResponse.json(
      {
        error: 'Failed to generate recipe suggestions',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

