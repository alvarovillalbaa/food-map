export type Language = 'zh' | 'es'

export interface Translations {
  // Common
  commonUploadImage: string
  
  // World Map
  worldMapUploadHint: string
  worldMapDishDetected: string
  worldMapCountry: string
  worldMapConfidence: string
  worldMapNoCountries: string
  worldMapNoCountriesHint: string
  worldMapUnlockedCountries: string
  
  // Ingredients
  ingredientsAddPlaceholder: string
  ingredientsAddButton: string
  ingredientsNoRecipes: string
  ingredientsNoRecipesHint: string
  
  // Recipes
  recipeViewDetails: string
}

export const translations: Record<Language, Translations> = {
  zh: {
    // Common
    commonUploadImage: '点击或拖拽上传图片',
    
    // World Map
    worldMapUploadHint: '上传菜肴图片以识别',
    worldMapDishDetected: '识别的菜肴',
    worldMapCountry: '来源国家',
    worldMapConfidence: '置信度',
    worldMapNoCountries: '还没有解锁任何国家',
    worldMapNoCountriesHint: '上传菜肴图片开始探索世界美食！',
    worldMapUnlockedCountries: '已解锁的国家',
    
    // Ingredients
    ingredientsAddPlaceholder: '添加食材',
    ingredientsAddButton: '添加',
    ingredientsNoRecipes: '未找到食谱',
    ingredientsNoRecipesHint: '尝试添加更多食材以获取食谱建议',
    
    // Recipes
    recipeViewDetails: '查看详情',
  },
  es: {
    // Common
    commonUploadImage: 'Haz clic o arrastra para subir una imagen',
    
    // World Map
    worldMapUploadHint: 'Sube una imagen de plato para identificarlo',
    worldMapDishDetected: 'Plato detectado',
    worldMapCountry: 'País',
    worldMapConfidence: 'Confianza',
    worldMapNoCountries: 'Aún no has desbloqueado ningún país',
    worldMapNoCountriesHint: '¡Sube una foto de un plato para empezar a explorar la gastronomía mundial!',
    worldMapUnlockedCountries: 'Países desbloqueados',
    
    // Ingredients
    ingredientsAddPlaceholder: 'Añadir ingrediente',
    ingredientsAddButton: 'Añadir',
    ingredientsNoRecipes: 'No se encontraron recetas',
    ingredientsNoRecipesHint: 'Intenta añadir más ingredientes para obtener sugerencias de recetas',
    
    // Recipes
    recipeViewDetails: 'Ver detalles',
  },
}

