import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/context'
import RecipeCard from './RecipeCard'

interface Recipe {
  title: string
  description: string
  usedIngredients: string[]
  steps?: string[]
}

interface RecipeListProps {
  recipes: Recipe[]
  selectedRecipes?: string[]
  onRecipeSelect?: (recipeTitle: string, selected: boolean) => void
  onRecipeClick?: (recipe: Recipe) => void
  onMarkComplete?: (recipeTitles: string[]) => void
}

export default function RecipeList({ 
  recipes, 
  selectedRecipes = [],
  onRecipeSelect,
  onRecipeClick,
  onMarkComplete
}: RecipeListProps) {
  const { t } = useI18n()
  const [localSelected, setLocalSelected] = useState<Set<string>>(new Set())

  // Reset selection when recipes change
  useEffect(() => {
    setLocalSelected(new Set())
  }, [recipes.map(r => r.title).join(',')])

  const handleSelect = (recipeTitle: string, selected: boolean) => {
    const newSelected = new Set(localSelected)
    if (selected) {
      newSelected.add(recipeTitle)
    } else {
      newSelected.delete(recipeTitle)
    }
    setLocalSelected(newSelected)
    onRecipeSelect?.(recipeTitle, selected)
  }

  const handleMarkComplete = () => {
    const selected = Array.from(localSelected)
    if (selected.length === 0) {
      alert(t.recipeNoSelection)
      return
    }
    onMarkComplete?.(selected)
    setLocalSelected(new Set()) // 清空选中状态
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>{t.ingredientsNoRecipes}</p>
        <p className="text-sm mt-2">{t.ingredientsNoRecipesHint}</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          description={recipe.description}
          usedIngredients={recipe.usedIngredients}
          isSelected={localSelected.has(recipe.title)}
          onSelect={(selected) => handleSelect(recipe.title, selected)}
          onViewDetails={onRecipeClick ? () => onRecipeClick(recipe) : undefined}
        />
      ))}
      
      {onMarkComplete && localSelected.size > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={handleMarkComplete}
            className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            {t.recipeMarkCompleteButton} ({localSelected.size})
          </button>
        </div>
      )}
    </div>
  )
}

