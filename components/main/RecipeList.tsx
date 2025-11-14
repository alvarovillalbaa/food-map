import RecipeCard from './RecipeCard'

interface Recipe {
  title: string
  description: string
  usedIngredients: string[]
  steps?: string[]
}

interface RecipeListProps {
  recipes: Recipe[]
  onRecipeClick?: (recipe: Recipe) => void
}

export default function RecipeList({ recipes, onRecipeClick }: RecipeListProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No hay recetas sugeridas aún.</p>
        <p className="text-sm mt-2">Sube una imagen de ingredientes para comenzar.</p>
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
          onViewDetails={onRecipeClick ? () => onRecipeClick(recipe) : undefined}
        />
      ))}
    </div>
  )
}

