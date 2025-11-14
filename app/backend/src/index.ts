import express, { Express } from 'express'
import cors from 'cors'
import ingredientsRoutes from './routes/ingredientsRoutes'
import recipesRoutes from './routes/recipesRoutes'
import dishesRoutes from './routes/dishesRoutes'
import userMapRoutes from './routes/userMapRoutes'

const app: Express = express()
const PORT = 4000

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Routes
app.use('/api/ingredients', ingredientsRoutes)
app.use('/api/recipes', recipesRoutes)
app.use('/api/dishes', dishesRoutes)
app.use('/api/user', userMapRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

