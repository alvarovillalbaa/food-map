export type Language = 'zh' | 'es'

export interface Translations {
  // HomePage
  homeTitle: string
  homeSubtitle: string
  homeButtonIngredients: string
  homeButtonWorldMap: string
  homeFooter: string

  // IngredientsPage
  ingredientsTitle: string
  ingredientsUploadTitle: string
  ingredientsDetectedTitle: string
  ingredientsRecipesTitle: string
  ingredientsNoRecipes: string
  ingredientsNoRecipesHint: string
  ingredientsProcessing: string
  ingredientsAddPlaceholder: string
  ingredientsAddButton: string

  // WorldMapPage
  worldMapTitle: string
  worldMapUploadTitle: string
  worldMapGastronomicTitle: string
  worldMapDishDetected: string
  worldMapCountry: string
  worldMapConfidence: string
  worldMapUnlockedCountries: string
  worldMapNoCountries: string
  worldMapNoCountriesHint: string
  worldMapProcessing: string
  worldMapUploadHint: string
  worldMapLevel: string
  worldMapLevelTitle: string
  worldMapCountriesUnlocked: string
  worldMapDishesUnlocked: string
  worldMapNextLevel: string

  // RecipeCard
  recipeViewDetails: string
  recipeSelect: string
  recipeSelected: string
  recipeMarkComplete: string
  recipeMarkCompleteButton: string
  recipeCompleteSuccess: string
  recipeCompleteError: string
  recipeNoSelection: string

  // Common
  commonUploadImage: string
  commonDragDrop: string
}

export const translations: Record<Language, Translations> = {
  zh: {
    // HomePage
    homeTitle: 'TasteVoyager',
    homeSubtitle: '通过你的食材和菜肴探索世界',
    homeButtonIngredients: '食材 → 菜谱',
    homeButtonWorldMap: '菜肴 → 世界地图',
    homeFooter: 'Hackathon 2025',

    // IngredientsPage
    ingredientsTitle: '食材 → 菜谱',
    ingredientsUploadTitle: '上传你的食材',
    ingredientsDetectedTitle: '检测到的食材',
    ingredientsRecipesTitle: '推荐菜谱',
    ingredientsNoRecipes: '还没有推荐菜谱。',
    ingredientsNoRecipesHint: '上传一张食材图片开始吧。',
    ingredientsProcessing: '正在处理图片...',
    ingredientsAddPlaceholder: '添加食材...',
    ingredientsAddButton: '添加',

    // WorldMapPage
    worldMapTitle: '菜肴 → 世界地图',
    worldMapUploadTitle: '上传你的菜肴',
    worldMapGastronomicTitle: '美食地图',
    worldMapDishDetected: '检测到的菜肴：',
    worldMapCountry: '国家：',
    worldMapConfidence: '置信度：',
    worldMapUnlockedCountries: '已解锁国家',
    worldMapNoCountries: '还没有解锁任何国家。',
    worldMapNoCountriesHint: '上传菜肴图片来解锁国家。',
    worldMapProcessing: '正在处理图片...',
    worldMapUploadHint: '上传一张菜肴图片查看结果',
    worldMapLevel: '等级',
    worldMapLevelTitle: '美食探索家',
    worldMapCountriesUnlocked: '已解锁国家',
    worldMapDishesUnlocked: '已解锁菜肴',
    worldMapNextLevel: '距离下一级还需',

    // RecipeCard
    recipeViewDetails: '查看详情',
    recipeSelect: '选择',
    recipeSelected: '已选中',
    recipeMarkComplete: '标记为已完成',
    recipeMarkCompleteButton: '标记选中菜谱为已完成',
    recipeCompleteSuccess: '菜谱已标记为已完成！',
    recipeCompleteError: '标记失败，请重试',
    recipeNoSelection: '请先选择至少一个菜谱',

    // Common
    commonUploadImage: '点击上传或拖拽图片到这里',
    commonDragDrop: '点击上传或拖拽图片到这里',
  },
  es: {
    // HomePage
    homeTitle: 'TasteVoyager',
    homeSubtitle: 'Explora el mundo a través de tus ingredientes y tus platos',
    homeButtonIngredients: 'Ingredientes → Recetas',
    homeButtonWorldMap: 'Plato → Mapa Mundial',
    homeFooter: 'Hackathon 2025',

    // IngredientsPage
    ingredientsTitle: 'Ingredientes → Recetas',
    ingredientsUploadTitle: 'Sube tus ingredientes',
    ingredientsDetectedTitle: 'Ingredientes detectados',
    ingredientsRecipesTitle: 'Recetas sugeridas',
    ingredientsNoRecipes: 'No hay recetas sugeridas aún.',
    ingredientsNoRecipesHint: 'Sube una imagen de ingredientes para comenzar.',
    ingredientsProcessing: 'Procesando imagen...',
    ingredientsAddPlaceholder: 'Añadir ingrediente...',
    ingredientsAddButton: 'Añadir',

    // WorldMapPage
    worldMapTitle: 'Plato → Mapa Mundial',
    worldMapUploadTitle: 'Sube tu plato',
    worldMapGastronomicTitle: 'Mapa Gastronómico',
    worldMapDishDetected: 'Plato detectado:',
    worldMapCountry: 'País:',
    worldMapConfidence: 'Confianza:',
    worldMapUnlockedCountries: 'Países Desbloqueados',
    worldMapNoCountries: 'No hay países desbloqueados aún.',
    worldMapNoCountriesHint: 'Sube imágenes de platos para desbloquear países.',
    worldMapProcessing: 'Procesando imagen...',
    worldMapUploadHint: 'Sube una imagen de un plato para ver los resultados',
    worldMapLevel: 'Nivel',
    worldMapLevelTitle: 'Explorador Gastronómico',
    worldMapCountriesUnlocked: 'Países Desbloqueados',
    worldMapDishesUnlocked: 'Platos Desbloqueados',
    worldMapNextLevel: 'Para el siguiente nivel',

    // RecipeCard
    recipeViewDetails: 'Ver detalles',
    recipeSelect: 'Seleccionar',
    recipeSelected: 'Seleccionado',
    recipeMarkComplete: 'Marcar como completado',
    recipeMarkCompleteButton: 'Marcar recetas seleccionadas como completadas',
    recipeCompleteSuccess: '¡Recetas marcadas como completadas!',
    recipeCompleteError: 'Error al marcar, por favor intente de nuevo',
    recipeNoSelection: 'Por favor seleccione al menos una receta',

    // Common
    commonUploadImage: 'Haz clic para subir o arrastra una imagen aquí',
    commonDragDrop: 'Haz clic para subir o arrastra una imagen aquí',
  },
}

