import { useState } from 'react'
import { useI18n } from '../i18n/context'
import ImageUploader from '../components/ImageUploader'
import IngredientChips from '../components/IngredientChips'
import RecipeList from '../components/RecipeList'
import LanguageSwitcher from '../components/LanguageSwitcher'

const API_BASE_URL = 'http://localhost:4000/api'

interface Recipe {
  title: string
  description: string
  usedIngredients: string[]
  steps: string[]
}

export default function IngredientsPage() {
  const { t, language } = useI18n()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [ingredients, setIngredients] = useState<string[]>([])
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)

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
    const stepsText = recipe.steps?.join('\n') || (language === 'zh' ? '暂无步骤。' : 'No hay pasos disponibles.')
    const titleText = language === 'zh' ? '菜谱' : 'Receta'
    alert(`${titleText}: ${recipe.title}\n\n${language === 'zh' ? '步骤' : 'Pasos'}:\n${stepsText}`)
  }

  const handleMarkComplete = async (recipeTitles: string[]) => {
    try {
      const response = await fetch(`${API_BASE_URL}/recipes/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipes: recipeTitles }),
      })

      if (response.ok) {
        alert(t.recipeCompleteSuccess)
        // 可以在这里更新UI，比如移除已完成的菜谱或显示完成状态
      } else {
        throw new Error('Failed to mark recipes as complete')
      }
    } catch (error) {
      console.error('Error marking recipes as complete:', error)
      alert(t.recipeCompleteError)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <LanguageSwitcher />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
          {t.ingredientsTitle}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna Izquierda */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t.ingredientsUploadTitle}
            </h2>
            <ImageUploader
              onImageSelect={handleImageSelect}
              previewUrl={previewUrl}
            />
            {loading && (
              <div className="mt-4 text-center text-gray-500">
                {t.ingredientsProcessing}
              </div>
            )}
          </div>

          {/* Columna Central */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t.ingredientsDetectedTitle}
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
              {t.ingredientsRecipesTitle}
            </h2>
            <RecipeList 
              recipes={recipes} 
              onRecipeClick={handleRecipeClick}
              onMarkComplete={handleMarkComplete}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

