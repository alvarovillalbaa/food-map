'use client'

import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps'

interface UnlockedCountry {
  code: string
  name: string
  dishes: string[]
}

interface WorldMapProps {
  unlockedCountries: UnlockedCountry[]
}

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export default function WorldMap({ unlockedCountries }: WorldMapProps) {
  const unlockedCodes = new Set(unlockedCountries.map((c) => c.code.toLowerCase()))

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <ComposableMap
        projectionConfig={{
          scale: 147,
          center: [0, 20],
        }}
        className="w-full h-auto"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryCode = geo.properties.ISO_A2?.toLowerCase()
              const isUnlocked = countryCode && unlockedCodes.has(countryCode)

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isUnlocked ? '#4F46E5' : '#E5E7EB'}
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: isUnlocked ? '#6366F1' : '#D1D5DB' },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}

