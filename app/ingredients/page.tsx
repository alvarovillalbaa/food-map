'use client'

import * as React from 'react'
import ImageUploader from '@/components/main/ImageUploader'
import IngredientChips from '@/components/main/IngredientChips'
import RecipeList from '@/components/main/RecipeList'
import LanguageSwitcher from '@/components/main/LanguageSwitcher'

const API_BASE_URL = '/api'

interface NutritionalInfo {
  calories: number
  protein: string
  carbs: string
  fat: string
}

interface Recipe {
  title: string
  description: string
  usedIngredients: string[]
  steps: string[]
  cookingTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  servings: number
  nutritionalInfo: NutritionalInfo
}

export default function IngredientsPage() {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null)
  const [ingredients, setIngredients] = React.useState<string[]>([])
  const [recipes, setRecipes] = React.useState<Recipe[]>([])
  const [loading, setLoading] = React.useState(false)
  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe | null>(null)

  const handleImageSelect = async (file: File) => {
    setSelectedImage(file)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    setLoading(true)

    try {
      // Convert image to base64
      const reader = new FileReader()
      reader.onloadend = async () => {
        const base64String = reader.result as string

        // Call ingredient recognition API
        const recognizeResponse = await fetch(`${API_BASE_URL}/ingredients/recognize`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: base64String }),
        })

        const recognizeData = await recognizeResponse.json()
        setIngredients(recognizeData.ingredients || [])

        // Call recipe suggestion API
        if (recognizeData.ingredients && recognizeData.ingredients.length > 0) {
          const recipesResponse = await fetch(`${API_BASE_URL}/recipes/suggest`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredients: recognizeData.ingredients }),
          })

          const recipesData = await recipesResponse.json()
          setRecipes(recipesData.recipes || [])
        }
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Error processing image:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((ing) => ing !== ingredient))
  }

  const handleAddIngredient = (ingredient: string) => {
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient])
    }
  }

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <LanguageSwitcher />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
          Ingredientes → Recetas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna Izquierda */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sube tus ingredientes
            </h2>
            <ImageUploader
              onImageSelect={handleImageSelect}
              previewUrl={previewUrl}
            />
            {loading && (
              <div className="mt-4 text-center text-gray-500">
                Procesando imagen...
              </div>
            )}
          </div>

          {/* Columna Central */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ingredientes detectados
            </h2>
            <IngredientChips
              ingredients={ingredients}
              onRemove={handleRemoveIngredient}
              onAdd={handleAddIngredient}
            />
          </div>

          {/* Columna Derecha */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Recetas sugeridas
            </h2>
            <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
          </div>
        </div>
      </div>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedRecipe.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      ⏱️ {selectedRecipe.cookingTime}
                    </span>
                    <span className="flex items-center gap-1">
                      👥 {selectedRecipe.servings} servings
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        selectedRecipe.difficulty === 'Easy'
                          ? 'bg-green-100 text-green-700'
                          : selectedRecipe.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {selectedRecipe.difficulty}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-6">{selectedRecipe.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Ingredients Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedRecipe.usedIngredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Nutritional Information
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-indigo-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-indigo-600">
                      {selectedRecipe.nutritionalInfo.calories}
                    </p>
                    <p className="text-xs text-gray-600">Calories</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">
                      {selectedRecipe.nutritionalInfo.protein}
                    </p>
                    <p className="text-xs text-gray-600">Protein</p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-amber-600">
                      {selectedRecipe.nutritionalInfo.carbs}
                    </p>
                    <p className="text-xs text-gray-600">Carbs</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-orange-600">
                      {selectedRecipe.nutritionalInfo.fat}
                    </p>
                    <p className="text-xs text-gray-600">Fat</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Cooking Instructions
                </h3>
                <ol className="space-y-3">
                  {selectedRecipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 flex-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

