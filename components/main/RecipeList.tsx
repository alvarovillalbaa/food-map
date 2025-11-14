import { useI18n } from '../i18n/context'
import RecipeCard from './RecipeCard'

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

interface RecipeListProps {
  recipes: Recipe[]
  onRecipeClick?: (recipe: Recipe) => void
}

export default function RecipeList({ recipes, onRecipeClick }: RecipeListProps) {
  const { t } = useI18n()

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
          cookingTime={recipe.cookingTime}
          difficulty={recipe.difficulty}
          servings={recipe.servings}
          nutritionalInfo={recipe.nutritionalInfo}
          onViewDetails={onRecipeClick ? () => onRecipeClick(recipe) : undefined}
        />
      ))}
    </div>
  )
}

