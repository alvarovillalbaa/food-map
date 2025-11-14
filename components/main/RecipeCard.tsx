import { useI18n } from '../i18n/context'
import { Clock, ChefHat, Users, Flame } from 'lucide-react'

interface NutritionalInfo {
  calories: number
  protein: string
  carbs: string
  fat: string
}

interface RecipeCardProps {
  title: string
  description: string
  usedIngredients: string[]
  cookingTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  servings: number
  nutritionalInfo: NutritionalInfo
  onViewDetails?: () => void
}

export default function RecipeCard({
  title,
  description,
  usedIngredients,
  cookingTime,
  difficulty,
  servings,
  nutritionalInfo,
  onViewDetails,
}: RecipeCardProps) {
  const { t } = useI18n()

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700',
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-gray-900 flex-1">{title}</h3>
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{cookingTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{servings} servings</span>
        </div>
        <div className="flex items-center gap-1">
          <Flame className="w-4 h-4" />
          <span>{nutritionalInfo.calories} cal</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {usedIngredients.map((ingredient, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium"
          >
            {ingredient}
          </span>
        ))}
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      <div className="text-xs text-gray-500 mb-4 pb-4 border-b">
        <div className="flex justify-between">
          <span>Protein: {nutritionalInfo.protein}</span>
          <span>Carbs: {nutritionalInfo.carbs}</span>
          <span>Fat: {nutritionalInfo.fat}</span>
        </div>
      </div>

      {onViewDetails && (
        <button
          onClick={onViewDetails}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          <ChefHat className="w-4 h-4" />
          {t.recipeViewDetails}
        </button>
      )}
    </div>
  )
}

