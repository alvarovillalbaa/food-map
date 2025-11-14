import { useI18n } from '../i18n/context'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
        <button
          onClick={() => setLanguage('zh')}
          className={`px-4 py-2 rounded transition-colors ${
            language === 'zh'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          中文
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded transition-colors ${
            language === 'es'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Español
        </button>
      </div>
    </div>
  )
}

