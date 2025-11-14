export interface Dish {
  name: string
  countryCode: string
  countryName: string
}

export const dishDb: Dish[] = [
  { name: 'Pizza', countryCode: 'IT', countryName: 'Italia' },
  { name: 'Sushi', countryCode: 'JP', countryName: 'Japón' },
  { name: 'Paella', countryCode: 'ES', countryName: 'España' },
  { name: 'Pasta Carbonara', countryCode: 'IT', countryName: 'Italia' },
  { name: 'Spaghetti Carbonara', countryCode: 'IT', countryName: 'Italia' },
  { name: 'Ramen', countryCode: 'JP', countryName: 'Japón' },
  { name: 'Tacos', countryCode: 'MX', countryName: 'México' },
  { name: 'Croissant', countryCode: 'FR', countryName: 'Francia' },
  { name: 'Pad Thai', countryCode: 'TH', countryName: 'Tailandia' },
  { name: 'Curry', countryCode: 'IN', countryName: 'India' },
  { name: 'Kebab', countryCode: 'TR', countryName: 'Turquía' },
  { name: 'Moussaka', countryCode: 'GR', countryName: 'Grecia' },
  { name: 'Peking Duck', countryCode: 'CN', countryName: 'China' },
  { name: 'Tortilla Española', countryCode: 'ES', countryName: 'España' },
  { name: 'Gazpacho', countryCode: 'ES', countryName: 'España' },
]

