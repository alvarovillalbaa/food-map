import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { I18nProvider } from './i18n/context'
import HomePage from './routes/HomePage'
import IngredientsPage from './routes/IngredientsPage'
import WorldMapPage from './routes/WorldMapPage'

function App() {
  return (
    <I18nProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/worldmap" element={<WorldMapPage />} />
        </Routes>
      </Router>
    </I18nProvider>
  )
}

export default App

