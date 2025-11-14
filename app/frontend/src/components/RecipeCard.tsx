import { useI18n } from '../i18n/context'

interface RecipeCardProps {
  title: string
  description: string
  usedIngredients: string[]
  isSelected?: boolean
  onSelect?: (selected: boolean) => void
  onViewDetails?: () => void
}

export default function RecipeCard({ 
  title, 
  description, 
  usedIngredients, 
  isSelected = false,
  onSelect,
  onViewDetails 
}: RecipeCardProps) {
  const { t } = useI18n()
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all ${
      isSelected ? 'ring-2 ring-indigo-500 bg-indigo-50' : ''
    }`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-900 flex-1">{title}</h3>
        {onSelect && (
          <label className="flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={(e) => onSelect(e.target.checked)}
              className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-600">
              {isSelected ? t.recipeSelected : t.recipeSelect}
            </span>
          </label>
        )}
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

      <div className="flex gap-2">
        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {t.recipeViewDetails}
          </button>
        )}
      </div>
    </div>
  )
}

