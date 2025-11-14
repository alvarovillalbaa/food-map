import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function HomePage() {
  const navigate = useNavigate()
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <LanguageSwitcher />
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-indigo-900">
            {t.homeTitle}
          </h1>
          <p className="text-xl text-gray-700">
            {t.homeSubtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-12">
          <button
            onClick={() => navigate('/ingredients')}
            className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            {t.homeButtonIngredients}
          </button>
          <button
            onClick={() => navigate('/worldmap')}
            className="px-8 py-4 bg-indigo-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition-colors duration-200"
          >
            {t.homeButtonWorldMap}
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-16">
          {t.homeFooter}
        </p>
      </div>
    </div>
  )
}

