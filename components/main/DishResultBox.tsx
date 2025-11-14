interface DishResultBoxProps {
  dishName?: string
  countryName?: string
  countryCode?: string
  confidence?: number
}

export default function DishResultBox({ dishName, countryName, countryCode, confidence }: DishResultBoxProps) {
  if (!dishName) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
        <p>Sube una imagen de un plato para ver los resultados</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div>
        <p className="text-sm text-gray-600">Plato detectado:</p>
        <p className="text-2xl font-bold text-gray-900">{dishName}</p>
      </div>

      <div>
        <p className="text-sm text-gray-600">País:</p>
        <p className="text-xl font-semibold text-indigo-700">
          {countryName} {countryCode && getCountryFlag(countryCode)}
        </p>
      </div>

      {confidence !== undefined && (
        <div>
          <p className="text-sm text-gray-600 mb-2">Confianza:</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-indigo-600 h-4 rounded-full transition-all duration-300"
              style={{ width: `${confidence * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">{Math.round(confidence * 100)}%</p>
        </div>
      )}
    </div>
  )
}

function getCountryFlag(countryCode: string): string {
  // Simple emoji flags based on country codes
  const flags: Record<string, string> = {
    ES: '🇪🇸',
    IT: '🇮🇹',
    JP: '🇯🇵',
    FR: '🇫🇷',
    CN: '🇨🇳',
    MX: '🇲🇽',
    IN: '🇮🇳',
    TH: '🇹🇭',
    TR: '🇹🇷',
    GR: '🇬🇷',
  }
  return flags[countryCode] || '🌍'
}

