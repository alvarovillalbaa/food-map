import * as React from 'react'
import ImageUploader from '@/components/main/ImageUploader'
import IngredientChips from '@/components/main/IngredientChips'
import RecipeList from '@/components/main/RecipeList'

const API_BASE_URL = 'http://localhost:4000/api'

interface Recipe {
  title: string
  description: string
  usedIngredients: string[]
  steps?: string[]
}

export default function IngredientsPage() {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null)
  const [ingredients, setIngredients] = React.useState<string[]>([])
  const [recipes, setRecipes] = React.useState<Recipe[]>([])
  const [loading, setLoading] = React.useState(false)

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
    alert(`Receta: ${recipe.title}\n\nPasos:\n${recipe.steps?.join('\n') || 'No hay pasos disponibles.'}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
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
    </div>
  )
}

