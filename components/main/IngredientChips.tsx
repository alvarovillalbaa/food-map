import { useState } from 'react'

interface IngredientChipsProps {
  ingredients: string[]
  onRemove?: (ingredient: string) => void
  onAdd?: (ingredient: string) => void
}

export default function IngredientChips({ ingredients, onRemove, onAdd }: IngredientChipsProps) {
  const [newIngredient, setNewIngredient] = useState('')

  const handleAdd = () => {
    if (newIngredient.trim() && onAdd) {
      onAdd(newIngredient.trim())
      setNewIngredient('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
          >
            {ingredient}
            {onRemove && (
              <button
                onClick={() => onRemove(ingredient)}
                className="text-indigo-600 hover:text-indigo-800"
              >
                ×
              </button>
            )}
          </span>
        ))}
      </div>

      {onAdd && (
        <div className="flex gap-2">
          <input
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="Añadir ingrediente..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Añadir
          </button>
        </div>
      )}
    </div>
  )
}

