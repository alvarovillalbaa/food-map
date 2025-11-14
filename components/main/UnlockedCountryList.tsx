interface UnlockedCountry {
  code: string
  name: string
  dishes: string[]
}

interface UnlockedCountryListProps {
  countries: UnlockedCountry[]
}

export default function UnlockedCountryList({ countries }: UnlockedCountryListProps) {
  if (countries.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        <p>No hay países desbloqueados aún.</p>
        <p className="text-sm mt-2">Sube imágenes de platos para desbloquear países.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Países Desbloqueados
      </h3>
      <div className="space-y-3">
        {countries.map((country, index) => (
          <div
            key={index}
            className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50 rounded"
          >
            <p className="font-semibold text-gray-900">{country.name}</p>
            <p className="text-sm text-gray-600">
              {country.dishes.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

