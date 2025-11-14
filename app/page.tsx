import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-indigo-900">
            TasteVoyager
          </h1>
          <p className="text-xl text-gray-700">
            Explora el mundo a través de tus ingredientes y tus platos
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-12">
          <Link
            href="/ingredients"
            className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200 text-center"
          >
            Ingredientes → Recetas
          </Link>
          <Link
            href="/world-map"
            className="px-8 py-4 bg-indigo-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition-colors duration-200 text-center"
          >
            Plato → Mapa Mundial
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-16">
          Hackathon 2025
        </p>
      </div>
    </div>
  )
}

