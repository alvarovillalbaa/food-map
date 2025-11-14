import { anthropic } from '@ai-sdk/anthropic'
import { generateObject } from 'ai'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const ingredientRecognitionSchema = z.object({
  ingredients: z
    .array(z.string())
    .describe('List of food ingredients detected in the image'),
})

export async function POST(req: Request) {
  try {
    const { image } = await req.json()

    if (!image || typeof image !== 'string') {
      return NextResponse.json(
        { error: 'Invalid image data provided' },
        { status: 400 }
      )
    }

    const { object } = await generateObject({
      model: anthropic('claude-3-5-sonnet-20241022'),
      temperature: 0,
      schema: ingredientRecognitionSchema,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              image: image,
            },
            {
              type: 'text',
              text: `Analyze this image and identify all the food ingredients visible. 
              
Return a list of specific ingredient names. Be thorough and include:
- Fresh produce (vegetables, fruits)
- Proteins (meats, fish, eggs, dairy)
- Grains and starches
- Herbs and spices (if clearly visible)
- Other food items

Use simple, common ingredient names (e.g., "tomato" instead of "cherry tomato" unless the distinction is important).
Only include actual food ingredients, not prepared dishes or non-food items.`,
            },
          ],
        },
      ],
    })

    return NextResponse.json({
      ingredients: object.ingredients,
    })
  } catch (error) {
    console.error('Error recognizing ingredients:', error)
    return NextResponse.json(
      {
        error: 'Failed to recognize ingredients',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

