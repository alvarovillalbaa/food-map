# TasteVoyager 🍽️🌍

Una aplicación web que te permite explorar el mundo a través de tus ingredientes y platos.

## 🚀 Inicio Rápido

### Opción 1: Usando Docker (Recomendado) 🐳

La forma más fácil de ejecutar el proyecto sin instalar dependencias localmente:

```bash
# Construir y levantar todos los servicios
docker-compose up --build

# O en modo detached (en segundo plano)
docker-compose up -d --build
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:4000`

Para detener los servicios:
```bash
docker-compose down
```

### Opción 2: Instalación Local

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

#### Backend

```bash
cd backend
npm install
npm run dev
```

El backend estará disponible en `http://localhost:4000`

## 📁 Estructura del Proyecto

```
food-map/
├── frontend/          # Aplicación React + Vite + TypeScript + Tailwind
│   ├── src/
│   │   ├── routes/    # Páginas principales
│   │   └── components/ # Componentes reutilizables
│   └── package.json
│
└── backend/           # API Express + TypeScript
    ├── src/
    │   ├── routes/    # Rutas de la API
    │   └── data/      # Datos mock
    └── package.json
```

## 🎯 Funcionalidades

### 1. HomePage (/)
- Página de inicio con dos opciones principales
- Navegación a Ingredientes → Recetas o Plato → Mapa Mundial

### 2. Ingredientes → Recetas (/ingredients)
- Subir imagen de ingredientes
- Detección automática de ingredientes (mock)
- Sugerencias de recetas basadas en ingredientes detectados

### 3. Plato → Mapa Mundial (/worldmap)
- Subir imagen de un plato terminado
- Detección del plato y su país de origen (mock)
- Visualización en mapa mundial interactivo
- Lista de países desbloqueados

## 🛠️ Tecnologías

### Frontend
- React 18
- Vite
- TypeScript
- TailwindCSS
- React Router DOM
- react-simple-maps

### Backend
- Node.js
- Express
- TypeScript
- CORS

## 📝 API Endpoints

### POST /api/ingredients/recognize
Reconoce ingredientes en una imagen (mock)

### POST /api/recipes/suggest
Sugiere recetas basadas en ingredientes

### POST /api/dishes/recognize
Reconoce un plato y su país de origen (mock)

### GET /api/user/map
Obtiene los países desbloqueados por el usuario

## 🎨 Diseño

El diseño utiliza TailwindCSS con:
- Fondos suaves con gradientes
- Cards con sombras y bordes redondeados
- Botones grandes y claros para acciones principales
- Colores principales: Indigo y azul

## 📄 Licencia

Hackathon 2025

