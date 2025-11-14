interface RecipeCardProps {
  title: string
  description: string
  usedIngredients: string[]
  onViewDetails?: () => void
}

export default function RecipeCard({ title, description, usedIngredients, onViewDetails }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      
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

      {onViewDetails && (
        <button
          onClick={onViewDetails}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Ver detalles
        </button>
      )}
    </div>
  )
}

