# 🚀 Ciberistas - Plataforma de Cursos de Ciberseguridad

![Ciberistas Logo](frontend/public/favicon.ico)

## 📋 Descripción del Proyecto

**Ciberistas** es una plataforma web moderna y completa diseñada para el Tecnológico de Monterrey, que permite la gestión y visualización de cursos especializados en ciberseguridad. La plataforma ofrece una experiencia de usuario intuitiva y moderna, con información detallada sobre talleres, sedes, testimonios y procesos de registro.

### 🎯 Características Principales

- **🔐 Catálogo de Cursos**: Exploración de talleres especializados en ciberseguridad
- **🏫 Información de Sedes**: Detalles de campus presenciales y modalidad virtual
- **👥 Testimonios**: Experiencias de estudiantes y egresados
- **📝 Sistema de Registro**: Proceso simplificado de inscripción
- **📱 Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **🎨 UI/UX Moderna**: Interfaz elegante con la identidad visual del Tecnológico

### 🛠️ Tecnologías Utilizadas

#### Frontend
- **React 18** con TypeScript
- **Vite** como bundler y herramienta de desarrollo
- **Tailwind CSS** para estilos y diseño responsivo
- **React Query** para manejo de estado y cache
- **Axios** para comunicación con APIs

#### Backend
- **Node.js** con Express.js
- **MySQL** como base de datos
- **CORS** habilitado para comunicación cross-origin
- **Express Validator** para validación de datos

#### Herramientas de Desarrollo
- **TypeScript** para tipado estático
- **ESLint** y **Prettier** para calidad de código
- **Concurrently** para ejecutar frontend y backend simultáneamente

### 📁 Estructura del Proyecto

```
ciberistas-fullstack/
├── 🎨 frontend/                    # Aplicación React
│   ├── src/
│   │   ├── components/             # Componentes UI modulares
│   │   │   ├── ui/                # Design system (Button, Card, etc.)
│   │   │   ├── layout/            # Header, Footer
│   │   │   └── sections/          # Hero, Workshops, etc.
│   │   ├── hooks/                 # React Query hooks
│   │   ├── services/              # API clients
│   │   ├── types/                 # TypeScript interfaces
│   │   ├── lib/                   # Utilities y helpers
│   │   └── App.tsx               # Componente principal
│   ├── public/                    # Assets estáticos
│   └── package.json              # Dependencias frontend
├── ⚙️ backend/                     # Servidor Node.js
│   ├── routes/                    # API endpoints
│   ├── services/                  # Lógica de negocio
│   ├── app.js                    # Servidor Express
│   └── package.json              # Dependencias backend
└── package.json                  # Scripts del proyecto
```

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- MySQL (opcional, usa mock data por defecto)

### 📦 Instalación

```bash
# Clonar el repositorio
git clone [repository-url]
cd ciberistas-fullstack

# Instalar dependencias
npm run install:all
```

### 🏃‍♂️ Desarrollo

```bash
# Iniciar frontend y backend simultáneamente
npm run dev

# O iniciar por separado:
npm run dev:frontend  # http://localhost:5173
npm run dev:backend   # http://localhost:3000
```

### 🏗️ Producción

```bash
# Build del frontend
npm run build

# Iniciar servidor de producción
npm start
```

## 🔌 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/workshops` | Obtener todos los talleres |
| POST | `/workshops` | Crear nuevo taller |
| GET | `/workshops/:id` | Obtener taller por ID |
| GET | `/dates` | Obtener fechas disponibles |
| POST | `/dates` | Crear nueva fecha |

## 🌍 Variables de Entorno

Crear `.env` en `/frontend/`:

```bash
# API Configuration
VITE_API_URL=http://localhost:3000

# Development
VITE_DEBUG=true
```

## 🎯 Funcionalidades

### 🎨 Frontend
- ✅ Página de inicio con hero section
- ✅ Galería de talleres con filtros
- ✅ Información de sedes participantes  
- ✅ Sección de testimonios
- ✅ Formulario de registro integrado con Wufoo
- ✅ Footer con información de contacto
- ✅ Navegación responsive
- ✅ Estados de carga y error

### ⚙️ Backend
- ✅ API RESTful para talleres y fechas
- ✅ Servicios mock para desarrollo
- ✅ CORS configurado
- ✅ Manejo de errores
- ✅ Base de datos MySQL (opcional)

## 🧪 Testing

```bash
# Frontend linting
cd frontend && npm run lint

# Build test
npm run build
```

## 📝 Scripts Disponibles

```bash
npm run dev           # Desarrollar frontend + backend
npm run dev:frontend  # Solo frontend
npm run dev:backend   # Solo backend  
npm run build         # Build de producción
npm run install:all   # Instalar todas las dependencias
npm start            # Servidor de producción
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Equipo

- **Desarrollo Frontend**: Arquitectura modular con React + TypeScript
- **Desarrollo Backend**: API RESTful con Node.js + Express  
- **Diseño UI/UX**: Sistema de diseño basado en Tailwind CSS

---

**¿Preguntas?** Abre un issue o contacta al equipo de desarrollo.

🌟 **¡Estrella el repo si te gustó el proyecto!**

### Talleres (Workshops)
- `GET /workshops` - Obtener todos los talleres
- `POST /workshops` - Crear un nuevo taller

### Fechas (Dates)
- `GET /dates` - Obtener todas las fechas disponibles
- `POST /dates` - Crear una nueva fecha

### Estructura de Datos

#### Workshop (Taller)
```typescript
interface Workshop {
  id: number;
  group_id: number;
  name: string;
  format: string;        // "Presencial" | "Virtual"
  date_id: number;
  date: string;          // Fecha del taller
  start_time: string;    // Hora de inicio
  end_time: string;      // Hora de fin
  capacity: number;      // Capacidad máxima
  current: number;       // Inscritos actuales
  teached_by: string;    // Instructor
  description: string;   // Descripción
  ages: string;          // Rango de edades
  requisites: string;    // Requisitos
  objective: string;     // Objetivo del taller
  gender: string;        // Dirigido a género específico
  location: string;      # Ubicación
  available: boolean;    // Disponibilidad
}
```

#### Date (Fecha)
```typescript
interface Date {
  id: number;
  date: string;  // YYYY-MM-DD format
}
```

## 🎯 Funcionalidades Actuales

### 1. **Landing Page**
- Hero section con información de Ciberistas
- Estadísticas del programa
- Sección de talleres destacados
- Formulario de registro multistep
- Footer con patrocinadores

### 2. **Sistema de Registro**
- Formulario de 4 pasos:
  1. Información personal del participante
  2. Información del tutor
  3. Información académica
  4. Selección de taller y confirmación

### 3. **Gestión de Talleres**
- Visualización de talleres disponibles
- Filtrado por modalidad (Presencial/Virtual)
- Información detallada de cada taller

### 4. **Backend API**
- CRUD de talleres
- CRUD de fechas
- Validación de datos
- Manejo de errores

## 🚨 Problemas Identificados

### 1. **Arquitectura Frontend**
- ✗ Componente `App.tsx` monolítico (+700 líneas)
- ✗ Lógica de negocio mezclada con UI
- ✗ No hay separación de responsabilidades
- ✗ Código duplicado en múltiples archivos
- ✗ Falta de reutilización de componentes

### 2. **Gestión de Estado**
- ✗ Estado local disperso
- ✗ No hay manejo global de estado
- ✗ Llamadas API directas en componentes
- ✗ Falta de cache y optimizaciones

### 3. **Estructura de Archivos**
- ✗ Componentes incompletos o vacíos
- ✗ Falta de organización por características
- ✗ No hay hooks personalizados
- ✗ Tipos TypeScript no centralizados

### 4. **UI/UX**
- ✗ Inconsistencias en el diseño
- ✗ Falta de sistema de diseño
- ✗ No hay componentes reutilizables
- ✗ Responsive design limitado

### 5. **Configuración y Herramientas**
- ✗ Configuraciones duplicadas
- ✗ Problemas de alias de rutas
- ✗ Dependencias conflictivas
- ✗ Falta de linting y formateo consistente

## 📊 Análisis de Dependencias

### Frontend Dependencies
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-query": "^3.39.3",
  "@tanstack/react-query": "^5.76.2",
  "react-router-dom": "^7.6.0",
  "tailwindcss": "^4.1.6"
}
```

### Problemas de Dependencias
- Versiones conflictivas de React Query (v3 y v5)
- Configuraciones duplicadas de Vite
- Falta de librerías esenciales para UI

## 🎨 Sistema de Diseño Actual

### Colores
```css
:root {
  --primary: #00B956;      /* Verde Code Club */
  --secondary: #FFE600;    /* Amarillo */
  --accent: #1D1D1B;       /* Negro */
  --neutral: #F8F8F8;      /* Gris claro */
}
```

### Tipografía
- **Primaria**: Poppins
- **Secundaria**: Nunito

### Componentes Identificados
- Hero Section
- Stats Cards
- Workshop Cards
- Multi-step Form
- Navigation
- Footer

## 🔧 Configuración del Entorno

### Requisitos
- Node.js 22+
- MySQL 8.4+
- NPM o Yarn

### Scripts Disponibles
```bash
# Frontend
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build

# Backend
npm start            # Iniciar servidor Node.js
```

## 🚀 Estado Actual del Proyecto

### ✅ Completado
- Estructura básica del backend
- API endpoints funcionales
- Base de datos configurada
- Landing page básica
- Sistema de registro funcional

### 🔄 En Progreso
- Integración frontend-backend
- Optimización de la UI
- Validaciones del formulario

### ❌ Pendiente
- Arquitectura limpia del frontend
- Sistema de autenticación
- Panel de administración
- Testing
- Documentación de la API
- Deployment

## 📈 Métricas del Proyecto

- **Líneas de código Frontend**: ~1,500
- **Líneas de código Backend**: ~500
- **Componentes**: 5 (básicos)
- **Rutas API**: 4
- **Páginas**: 2
- **Dependencias**: 50+

## 🎯 Próximos Pasos

1. **Refactoring completo del frontend** (Alta prioridad)
2. **Implementación de arquitectura limpia**
3. **Sistema de componentes reutilizables**
4. **Optimización de rendimiento**
5. **Testing e2e**
6. **Deployment en producción**

---

## 👥 Equipo de Desarrollo

- **Frontend**: Pendiente asignación
- **Backend**: Jean López
- **Database**: Configurado
- **DevOps**: Pendiente

## 📞 Contacto

Para más información sobre el proyecto Ciberistas, contactar al equipo de desarrollo.

---

*Última actualización: Junio 2025*
