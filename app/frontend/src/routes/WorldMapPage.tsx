import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/context'
import ImageUploader from '../components/ImageUploader'
import DishResultBox from '../components/DishResultBox'
import WorldMap from '../components/WorldMap'
import UnlockedCountryList from '../components/UnlockedCountryList'
import LanguageSwitcher from '../components/LanguageSwitcher'
import LevelDisplay from '../components/LevelDisplay'

const API_BASE_URL = 'http://localhost:4000/api'

interface UnlockedCountry {
  code: string
  name: string
  dishes: string[]
}

export default function WorldMapPage() {
  const { t } = useI18n()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [dishName, setDishName] = useState<string>('')
  const [countryName, setCountryName] = useState<string>('')
  const [countryCode, setCountryCode] = useState<string>('')
  const [confidence, setConfidence] = useState<number>(0)
  const [unlockedCountries, setUnlockedCountries] = useState<UnlockedCountry[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightedCountry, setHighlightedCountry] = useState<string | undefined>(undefined)

  // Load unlocked countries on mount
  useEffect(() => {
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
        console.log('识别结果:', data) // 调试信息
        
        setDishName(data.dishName || '')
        setCountryName(data.countryName || '')
        setCountryCode(data.countryCode || '')
        setConfidence(data.confidence || 0)

        // Update unlocked countries and highlight new country
        if (data.countryCode && data.dishName) {
          setUnlockedCountries((prevCountries) => {
            const updatedCountries = [...prevCountries]
            const existingCountryIndex = updatedCountries.findIndex(
              (c) => c.code?.toLowerCase() === data.countryCode?.toLowerCase()
            )

            const isNewCountry = existingCountryIndex < 0

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

            console.log('更新后的国家列表:', updatedCountries) // 调试信息
            console.log('新国家:', isNewCountry, data.countryCode) // 调试信息

            // Highlight newly unlocked country
            if (isNewCountry) {
              setHighlightedCountry(data.countryCode)
              // Remove highlight after 3 seconds
              setTimeout(() => {
                setHighlightedCountry(undefined)
              }, 3000)
            }

            return updatedCountries
          })
        }
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
      <LanguageSwitcher />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
          {t.worldMapTitle}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Columna Izquierda */}
          <div className="space-y-6">
            {/* Level Display */}
            <LevelDisplay
              unlockedCountries={unlockedCountries.length}
              unlockedDishes={unlockedCountries.reduce((sum, country) => sum + country.dishes.length, 0)}
            />

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t.worldMapUploadTitle}
              </h2>
              <ImageUploader
                onImageSelect={handleImageSelect}
                previewUrl={previewUrl}
              />
              {loading && (
                <div className="mt-4 text-center text-gray-500">
                  {t.worldMapProcessing}
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
                {t.worldMapGastronomicTitle}
              </h2>
              <div key={`map-${unlockedCountries.length}-${highlightedCountry || 'none'}`}>
                <WorldMap 
                  unlockedCountries={unlockedCountries}
                  highlightedCountry={highlightedCountry}
                />
              </div>
            </div>

            <UnlockedCountryList countries={unlockedCountries} />
          </div>
        </div>
      </div>
    </div>
  )
}

