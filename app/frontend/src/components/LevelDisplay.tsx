import { useI18n } from '../i18n/context'

interface LevelDisplayProps {
  unlockedCountries: number
  unlockedDishes: number
}

// 等级计算：每解锁3个国家升一级
const getLevel = (countriesCount: number): number => {
  return Math.floor(countriesCount / 3) + 1
}

// 计算到下一级需要的国家数
const getNextLevelRequirement = (countriesCount: number): number => {
  const currentLevel = getLevel(countriesCount)
  const nextLevelStart = (currentLevel - 1) * 3
  const nextLevelEnd = currentLevel * 3
  return nextLevelEnd - countriesCount
}

// 获取等级名称
const getLevelName = (level: number, language: 'zh' | 'es'): string => {
  const names = {
    zh: ['新手', '学徒', '探索者', '美食家', '大师', '传奇'],
    es: ['Novato', 'Aprendiz', 'Explorador', 'Gourmet', 'Maestro', 'Leyenda'],
  }
  const index = Math.min(level - 1, names[language].length - 1)
  return names[language][index] || (language === 'zh' ? '传奇' : 'Leyenda')
}

export default function LevelDisplay({ unlockedCountries, unlockedDishes }: LevelDisplayProps) {
  const { t, language } = useI18n()
  const level = getLevel(unlockedCountries)
  const nextLevelRequirement = getNextLevelRequirement(unlockedCountries)
  const levelName = getLevelName(level, language)
  const progress = (unlockedCountries % 3) / 3 * 100

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm opacity-90 mb-1">{t.worldMapLevel} {level}</p>
          <h3 className="text-2xl font-bold">{levelName}</h3>
          <p className="text-sm opacity-80 mt-1">{t.worldMapLevelTitle}</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold">{unlockedCountries}</div>
          <div className="text-sm opacity-90">{t.worldMapCountriesUnlocked}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span>{t.worldMapDishesUnlocked}: {unlockedDishes}</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div
            className="bg-white rounded-full h-3 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {nextLevelRequirement > 0 && (
        <div className="text-sm opacity-90 border-t border-white/20 pt-3">
          {t.worldMapNextLevel}: {nextLevelRequirement} {language === 'zh' ? '个国家' : 'países'}
        </div>
      )}
    </div>
  )
}

