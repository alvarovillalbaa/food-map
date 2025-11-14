export interface Recipe {
  title: string
  description: string
  ingredients: string[]
  steps: string[]
}

export const recipes: Recipe[] = [
  {
    title: 'Revuelto de tomate y huevo',
    description: 'Un plato sencillo y rápido con tomate y huevo.',
    ingredients: ['tomate', 'huevo'],
    steps: [
      'Batir los huevos en un bol.',
      'Cortar el tomate en cubos pequeños.',
      'Calentar aceite en una sartén.',
      'Sofreír el tomate durante 2-3 minutos.',
      'Añadir los huevos batidos y remover constantemente.',
      'Cocinar hasta que los huevos estén cuajados pero cremosos.',
      'Servir caliente con sal y pimienta al gusto.',
    ],
  },
  {
    title: 'Ensalada de tomate y cebolla',
    description: 'Ensalada fresca de tomate y cebolla.',
    ingredients: ['tomate', 'cebolla'],
    steps: [
      'Lavar y cortar los tomates en rodajas.',
      'Cortar la cebolla en aros finos.',
      'Disponer los tomates y cebollas en un plato.',
      'Aliñar con aceite de oliva, vinagre y sal.',
      'Dejar reposar 10 minutos antes de servir.',
    ],
  },
  {
    title: 'Tortilla de patatas',
    description: 'Clásica tortilla española con patatas y huevo.',
    ingredients: ['huevo', 'patata', 'cebolla'],
    steps: [
      'Pelar y cortar las patatas en rodajas finas.',
      'Cortar la cebolla en juliana.',
      'Freír las patatas y cebolla en aceite de oliva.',
      'Batir los huevos en un bol grande.',
      'Mezclar las patatas y cebolla con los huevos batidos.',
      'Verter la mezcla en una sartén caliente.',
      'Cocinar por ambos lados hasta que esté dorada.',
    ],
  },
  {
    title: 'Sopa de tomate',
    description: 'Sopa caliente y reconfortante de tomate.',
    ingredients: ['tomate', 'cebolla', 'ajo'],
    steps: [
      'Picar la cebolla y el ajo.',
      'Cortar los tomates en trozos.',
      'Sofreír la cebolla y el ajo en una olla.',
      'Añadir los tomates y cocinar hasta que se deshagan.',
      'Añadir caldo o agua y dejar hervir 15 minutos.',
      'Triturar hasta obtener una crema suave.',
      'Servir caliente con hierbas frescas.',
    ],
  },
  {
    title: 'Huevos revueltos con cebolla',
    description: 'Huevos revueltos con cebolla caramelizada.',
    ingredients: ['huevo', 'cebolla'],
    steps: [
      'Cortar la cebolla en juliana fina.',
      'Caramelizar la cebolla en una sartén con aceite.',
      'Batir los huevos en un bol.',
      'Añadir los huevos a la sartén con la cebolla.',
      'Remover constantemente hasta que estén cremosos.',
      'Servir inmediatamente.',
    ],
  },
  {
    title: 'Ensalada mediterránea',
    description: 'Ensalada fresca con tomate, cebolla y aceitunas.',
    ingredients: ['tomate', 'cebolla', 'aceitunas'],
    steps: [
      'Cortar los tomates en cubos.',
      'Cortar la cebolla en aros finos.',
      'Mezclar con aceitunas.',
      'Aliñar con aceite de oliva, vinagre y orégano.',
      'Servir fría.',
    ],
  },
]

