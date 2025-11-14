import * as React from 'react'
import ImageUploader from '@/components/main/ImageUploader'
import DishResultBox from '@/components/main/DishResultBox'
import WorldMap from '@/components/main/WorldMap'
import UnlockedCountryList from '@/components/main/UnlockedCountryList'

const API_BASE_URL = 'http://localhost:4000/api'

interface UnlockedCountry {
  code: string
  name: string
  dishes: string[]
}

export default function WorldMapPage() {
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null)
  const [dishName, setDishName] = React.useState<string>('')
  const [countryName, setCountryName] = React.useState<string>('')
  const [countryCode, setCountryCode] = React.useState<string>('')
  const [confidence, setConfidence] = React.useState<number>(0)
  const [unlockedCountries, setUnlockedCountries] = React.useState<UnlockedCountry[]>([])
  const [loading, setLoading] = React.useState(false)

  // Load unlocked countries on mount
  React.useEffect(() => {
    fetchUnlockedCountries()
  }, [])

  const fetchUnlockedCountries = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/map`)
      const data = await response.json()
      setUnlockedCountries(data.countries || [])
    } catch (error) {
      console.error('Error fetching unlocked countries:', error)
    }
  }

  const handleImageSelect = async (file: File) => {
    setSelectedImage(file)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    setLoading(true)

    try {
      // Convert image to base64
      const reader = new FileReader()
      reader.onloadend = async () => {
        const base64String = reader.result as string

        // Call dish recognition API
        const response = await fetch(`${API_BASE_URL}/dishes/recognize`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: base64String }),
        })

        const data = await response.json()
        setDishName(data.dishName || '')
        setCountryName(data.countryName || '')
        setCountryCode(data.countryCode || '')
        setConfidence(data.confidence || 0)

        // Update unlocked countries
        if (data.countryCode && data.dishName) {
          const updatedCountries = [...unlockedCountries]
          const existingCountryIndex = updatedCountries.findIndex(
            (c) => c.code === data.countryCode
          )

          if (existingCountryIndex >= 0) {
            // Add dish to existing country if not already present
            if (!updatedCountries[existingCountryIndex].dishes.includes(data.dishName)) {
              updatedCountries[existingCountryIndex].dishes.push(data.dishName)
            }
          } else {
            // Add new country
            updatedCountries.push({
              code: data.countryCode,
              name: data.countryName,
              dishes: [data.dishName],
            })
          }

          setUnlockedCountries(updatedCountries)
        }

        // Refresh unlocked countries from server
        await fetchUnlockedCountries()
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Error processing image:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
          Plato → Mapa Mundial
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Columna Izquierda */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sube tu plato
              </h2>
              <ImageUploader
                onImageSelect={handleImageSelect}
                previewUrl={previewUrl}
              />
              {loading && (
                <div className="mt-4 text-center text-gray-500">
                  Procesando imagen...
                </div>
              )}
            </div>

            <DishResultBox
              dishName={dishName}
              countryName={countryName}
              countryCode={countryCode}
              confidence={confidence}
            />
          </div>

          {/* Columna Derecha */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Mapa Gastronómico
              </h2>
              <WorldMap unlockedCountries={unlockedCountries} />
            </div>

            <UnlockedCountryList countries={unlockedCountries} />
          </div>
        </div>
      </div>
    </div>
  )
}

