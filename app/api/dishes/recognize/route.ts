import { anthropic } from '@ai-sdk/anthropic'
import { generateObject } from 'ai'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'

const dishRecognitionSchema = z.object({
    dishName: z.string().describe('The name of the dish in the image'),
    countryName: z
        .string()
        .describe('The full name of the country where this dish originates'),
    countryCode: z
        .string()
        .length(2)
        .describe(
            'The ISO 3166-1 alpha-2 country code (2 letters, uppercase) for the origin country'
        ),
    confidence: z
        .number()
        .min(0)
        .max(100)
        .describe('Confidence score from 0-100 for the dish identification'),
})

export async function POST(req: Request) {
    try {
        // Check if API key is configured
        if (!process.env.ANTHROPIC_API_KEY) {
            console.error('ANTHROPIC_API_KEY is not set in environment variables')
            return NextResponse.json(
                { error: 'API key not configured. Please add ANTHROPIC_API_KEY to .env.local' },
                { status: 500 }
            )
        }

        const { image } = await req.json()

        if (!image || typeof image !== 'string') {
            return NextResponse.json(
                { error: 'Invalid image data provided' },
                { status: 400 }
            )
        }

        // Validate base64 image format
        if (!image.startsWith('data:image/')) {
            return NextResponse.json(
                { error: 'Invalid base64 image format' },
                { status: 400 }
            )
        }

        const { object } = await generateObject({
            model: anthropic('claude-sonnet-4-20250514'),
            temperature: 0,
            schema: dishRecognitionSchema,
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
                            text: `Analyze this food image and identify:
1. The specific name of the dish shown
2. The country where this dish originates from
3. The ISO 3166-1 alpha-2 country code (2 uppercase letters) for that country
4. Your confidence level (0-100) in this identification

Be as specific as possible with the dish name. If you recognize a specific regional variation, include that detail. For confidence, consider factors like image clarity, dish distinctiveness, and your certainty about the origin.`,
                        },
                    ],
                },
            ],
        })

        return NextResponse.json({
            dishName: object.dishName,
            countryName: object.countryName,
            countryCode: object.countryCode,
            confidence: object.confidence,
        })
    } catch (error) {
        console.error('Error recognizing dish:', error)

        // Provide helpful error message
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        const isApiKeyError = errorMessage.includes('API key') || errorMessage.includes('authentication')

        return NextResponse.json(
            {
                error: 'Failed to recognize dish',
                details: errorMessage,
                hint: isApiKeyError
                    ? 'Make sure ANTHROPIC_API_KEY is set in .env.local and restart the dev server'
                    : 'Check console logs for details',
            },
            { status: 500 }
        )
    }
}

