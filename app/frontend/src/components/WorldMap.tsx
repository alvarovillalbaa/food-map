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
  highlightedCountry?: string // 新识别的国家代码，用于高亮显示
}

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export default function WorldMap({ unlockedCountries, highlightedCountry }: WorldMapProps) {
  // 创建已解锁国家代码的集合（统一转为小写）
  const unlockedCodes = new Set(
    unlockedCountries
      .map((c) => c.code?.toLowerCase())
      .filter((code) => code) // 过滤掉空值
  )
  const highlightedCode = highlightedCountry?.toLowerCase()

  // 调试信息
  console.log('WorldMap 渲染 - 已解锁国家:', Array.from(unlockedCodes), '高亮国家:', highlightedCode)
  console.log('WorldMap 接收到的数据:', unlockedCountries)

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
              // 获取国家代码，可能为空或undefined
              const countryCode = geo.properties.ISO_A2?.toLowerCase() || null
              const countryName = geo.properties.NAME || 'Unknown'
              
              // 只有有国家代码时才进行判断
              if (!countryCode) {
                // 没有国家代码的，保持灰色
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#E5E7EB"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: '#D1D5DB' },
                      pressed: { outline: 'none' },
                    }}
                  />
                )
              }

              // 检查是否已解锁
              const isUnlocked = unlockedCodes.has(countryCode)
              // 检查是否是新解锁的国家（正在高亮）
              // 注意：高亮的国家可能刚被添加，所以即使不在 unlockedCodes 中也要高亮
              const isHighlighted = countryCode === highlightedCode

              // 调试特定国家（如希腊 GR）
              if (countryCode === 'gr' || countryCode === 'es' || countryCode === 'it') {
                console.log(`国家 ${countryName} (${countryCode}): 已解锁=${isUnlocked}, 高亮=${isHighlighted}, 已解锁列表包含=${unlockedCodes.has(countryCode)}`)
              }

              // 根据状态选择颜色
              let fillColor = '#E5E7EB' // 默认灰色（未解锁）
              let strokeWidth = 0.5
              
              if (isHighlighted) {
                // 新解锁的国家：绿色高亮（优先显示高亮）
                fillColor = '#10B981'
                strokeWidth = 2
                console.log(`设置 ${countryName} (${countryCode}) 为绿色高亮`)
              } else if (isUnlocked) {
                // 已解锁的国家：蓝色
                fillColor = '#4F46E5'
              }
              // 否则保持灰色（未解锁）

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}
                  stroke="#FFFFFF"
                  strokeWidth={strokeWidth}
                  style={{
                    default: { 
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    },
                    hover: { 
                      outline: 'none', 
                      fill: isHighlighted 
                        ? '#059669' 
                        : isUnlocked 
                        ? '#6366F1' 
                        : '#D1D5DB',
                      cursor: 'pointer',
                    },
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

