# 🚀 Ciberistas - Plataforma de Cursos de Ciberseguridad


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

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18 o superior
- npm 9 o superior
- MySQL 8.0 o superior

### 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd ciberistas-final-entrega
   ```

2. **Instalar dependencias del proyecto principal**
   ```bash
   npm install
   ```

3. **Configurar el Backend**
   ```bash
   cd backend
   npm install
   ```

4. **Configurar el Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### ⚙️ Configuración de Base de Datos

1. **Crear la base de datos MySQL**
   ```sql
   -- Ejecutar el archivo backend/createDatabase.sql
   source backend/createDatabase.sql
   ```

2. **Configurar conexión a la base de datos**
   - Editar `backend/config.js` con tus credenciales de MySQL
   - Asegurar que el puerto 3306 esté disponible

### 🔧 Variables de Entorno

#### Frontend (.env)
```env
# Ejemplo disponible en frontend/.env.example
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Ciberistas
```

#### Backend
- Las configuraciones se encuentran en `backend/config.js`
- Puerto por defecto: 3000
- Base de datos: talleres_ciberistas

## 🏃‍♂️ Ejecución del Proyecto

### Desarrollo Completo (Recomendado)
```bash
# Desde el directorio raíz
npm run dev
```
Este comando inicia automáticamente:
- Backend en `http://localhost:3000`
- Frontend en `http://localhost:5173` (o puerto disponible)

### Desarrollo Individual

#### Solo Backend
```bash
npm run dev:backend
# Backend disponible en http://localhost:3000
```

#### Solo Frontend
```bash
npm run dev:frontend
# Frontend disponible en http://localhost:5173
```

### Producción

#### Backend
```bash
cd backend
npm start
```

#### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
ciberistas-final-entrega/
├── 📁 backend/                    # Servidor API
│   ├── app.js                     # Punto de entrada del servidor
│   ├── config.js                  # Configuración de base de datos
│   ├── createDatabase.sql         # Script de creación de BD
│   ├── 📁 routes/                 # Rutas de la API
│   │   ├── workshopRoutes.js      # Endpoints de talleres
│   │   └── dateRoutes.js          # Endpoints de fechas
│   ├── 📁 services/               # Lógica de negocio
│   │   ├── db.js                  # Conexión a base de datos
│   │   ├── workshopService.js     # Servicios de talleres
│   │   └── dateService.js         # Servicios de fechas
│   └── package.json               # Dependencias del backend
│
├── 📁 frontend/                   # Aplicación React
│   ├── 📁 src/
│   │   ├── App.tsx                # Componente principal
│   │   ├── main.tsx               # Punto de entrada React
│   │   ├── 📁 components/         # Componentes reutilizables
│   │   │   ├── 📁 ui/             # Componentes base
│   │   │   │   ├── button.tsx     # Componente Button
│   │   │   │   ├── card.tsx       # Componente Card
│   │   │   │   └── PlaceholderImage.tsx # Placeholder para imágenes
│   │   │   ├── 📁 layout/         # Componentes de layout
│   │   │   │   ├── Header.tsx     # Cabecera del sitio
│   │   │   │   └── Footer.tsx     # Pie de página
│   │   │   └── 📁 sections/       # Secciones de la página
│   │   │       ├── Hero.tsx       # Sección hero principal
│   │   │       ├── WorkshopsSection.tsx # Catálogo de talleres
│   │   │       ├── SedesSection.tsx     # Información de sedes
│   │   │       ├── TestimonialsSection.tsx # Testimonios
│   │   │       └── RegistrationSection.tsx # Formulario registro
│   │   ├── 📁 hooks/              # Custom hooks
│   │   ├── 📁 services/           # Servicios API
│   │   ├── 📁 types/              # Definiciones TypeScript
│   │   └── 📁 lib/                # Utilidades
│   ├── 📁 public/                 # Archivos estáticos
│   │   └── 📁 images/             # Imágenes del proyecto
│   ├── tailwind.config.js         # Configuración Tailwind
│   ├── vite.config.ts             # Configuración Vite
│   └── package.json               # Dependencias del frontend
│
├── package.json                   # Scripts del proyecto principal
├── .gitignore                     # Archivos ignorados por git
└── README.md                      # Este archivo
```

## 🎨 Guía de Estilo y Diseño

### Paleta de Colores Ciberistas
- **Azul Principal**: `#1A237E` - Color institucional del Tecnológico
- **Verde Ciberistas**: `#34A853` - Color de éxito y confirmación
- **Púrpura**: `#8F00FF` - Color de acento y elementos especiales
- **Grises**: 
  - Claro: `#F5F5F5`
  - Medio: `#E0E0E0`
  - Texto: `#666666`, `#999999`

### Componentes UI
- **Botones**: Tres variantes (primary, secondary, outline)
- **Cards**: Diseño moderno con sombras sutiles
- **Imágenes**: Sistema de placeholder automático para imágenes faltantes
- **Tipografía**: Inter para texto, Poppins para títulos

## 🔌 API Endpoints

### Talleres
- `GET /api/workshops` - Obtener todos los talleres
- `GET /api/workshops/:id` - Obtener taller específico

### Fechas
- `GET /api/dates` - Obtener fechas disponibles para registro

### Estructura de Respuesta
```json
{
  "success": true,
  "data": [...],
  "message": "Operación exitosa"
}
```

## 🧪 Testing y Desarrollo

### Comandos Útiles
```bash
# Linting del frontend
cd frontend && npm run lint

# Build de producción
cd frontend && npm run build

# Preview de producción
cd frontend && npm run preview

# Verificar tipos TypeScript
cd frontend && npm run type-check
```

### Debugging
- El backend incluye logs detallados en consola
- El frontend utiliza React Developer Tools
- Errores de API se muestran en la consola del navegador

## 📋 Funcionalidades Principales

### 1. Catálogo de Talleres
- Visualización de talleres disponibles
- Filtrado por categorías
- Información detallada de cada taller
- Integración con base de datos MySQL

### 2. Sistema de Sedes
- **Sedes Presenciales**: 8 campus del Tecnológico de Monterrey
- **Modalidad Virtual**: Universidad Virtual
- Información detallada de cada sede
- Sistema de placeholder para imágenes faltantes

### 3. Testimonios
- Experiencias de estudiantes reales
- Diseño tipo carrusel
- Información de perfiles y logros

### 4. Proceso de Registro
- Formulario intuitivo y validado
- Integración con backend
- Confirmación visual de envío

## 🔒 Seguridad

- Validación de datos en frontend y backend
- Sanitización de inputs
- CORS configurado correctamente
- Headers de seguridad implementados

## 🚀 Deployment

### Preparación para Producción
1. **Frontend**:
   ```bash
   cd frontend
   npm run build
   # Los archivos de producción estarán en frontend/dist/
   ```

2. **Backend**:
   ```bash
   cd backend
   npm start
   # El servidor correrá en el puerto configurado
   ```

### Consideraciones de Deployment
- Configurar variables de entorno de producción
- Usar un proceso manager como PM2 para el backend
- Servir el frontend desde un CDN o servidor web
- Configurar proxy reverso si es necesario

## 🤝 Contribución

### Estándares de Código
- TypeScript estricto habilitado
- ESLint configurado para React y Node.js
- Prettier para formateo consistente
- Convenciones de commits claras

### Flujo de Desarrollo
1. Fork del repositorio
2. Crear rama feature/bugfix
3. Desarrollar con tests
4. Pull request con descripción detallada

---

## 📱 Frontend - Documentación Específica

### 🎨 Arquitectura del Frontend

El frontend está construido con **React 18 + TypeScript + Vite**, utilizando una arquitectura modular basada en componentes reutilizables y hooks personalizados.

#### Estructura de Componentes

```
src/components/
├── 🎨 ui/                         # Design System
│   ├── button.tsx                 # Botón base con variantes
│   ├── card.tsx                   # Tarjeta base con sombras
│   └── PlaceholderImage.tsx       # Imagen placeholder dinámica
├── 📐 layout/                     # Componentes de layout
│   ├── Header.tsx                 # Navegación principal
│   └── Footer.tsx                 # Pie de página con links
└── 📄 sections/                   # Secciones de página
    ├── Hero.tsx                   # Banner principal con CTA
    ├── WorkshopsSection.tsx       # Catálogo de talleres
    ├── SedesSection.tsx           # Grid de sedes
    ├── TestimonialsSection.tsx    # Testimonios de usuarios
    └── RegistrationSection.tsx    # Formulario de registro
```

### 🎨 Sistema de Diseño

#### Paleta de Colores
La paleta está definida en `tailwind.config.js` y sigue la identidad del Tecnológico:

```javascript
colors: {
  // Colores principales Ciberistas
  blue: '#1A237E',        // Azul institucional
  green: '#34A853',       // Verde confirmación
  purple: '#8F00FF',      // Púrpura acento
  light: '#F5F5F5',       // Fondo claro
  medium: '#E0E0E0',      // Gris medio
}
```

#### Componentes UI

**Button Component**
- 3 variantes: `primary`, `secondary`, `outline`
- 3 tamaños: `sm`, `md`, `lg`
- Estados: `hover`, `disabled`, `loading`

**Card Component**
- Sombras sutiles con `hover` effects
- Padding consistente
- Bordes redondeados

**PlaceholderImage Component**
- Genera colores únicos basados en el nombre
- Muestra iniciales del texto
- Fallback automático para imágenes faltantes

### 🔗 Gestión de Estado

#### React Query (TanStack Query)
Utilizado para:
- Cache automático de respuestas API
- Sincronización de estado servidor/cliente
- Loading y error states
- Background refetching

```typescript
// Ejemplo en hooks/useWorkshops.ts
export const useWorkshops = () => {
  return useQuery({
    queryKey: ['workshops'],
    queryFn: workshopApi.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};
```

### 📱 Responsividad

El diseño utiliza **Mobile-First** con breakpoints de Tailwind:
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

#### Grid Layouts Responsivos
```tsx
// Ejemplo en SedesSection
<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {sedes.map(sede => ...)}
</div>
```

### 🎯 Características Avanzadas

#### 1. Lazy Loading de Imágenes
- Placeholder automático mientras carga
- Fallback a componente generativo
- Optimización de rendimiento

#### 2. TypeScript Estricto
- Interfaces definidas para todos los datos
- Type safety en toda la aplicación
- IntelliSense mejorado

#### 3. Optimización de Bundle
- Code splitting automático con Vite
- Tree shaking de dependencias
- Assets optimizados

### 🔧 Configuración de Desarrollo

#### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});
```

#### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        display: ['Poppins', 'system-ui'],
      }
    }
  }
};
```

### 📝 Scripts de Desarrollo

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Build
npm run build        # Build de producción
npm run preview      # Preview del build

# Calidad de código
npm run lint         # ESLint check
npm run type-check   # TypeScript check
```

### 🔍 Debugging

#### DevTools Recomendadas
- **React Developer Tools**: Inspección de componentes
- **TanStack Query Devtools**: Estado de queries
- **Vite DevTools**: Análisis de bundle

#### Logging
```typescript
// Logs de desarrollo en servicios
if (import.meta.env.DEV) {
  console.log('API Response:', data);
}
```

### 🚀 Optimizaciones de Rendimiento

1. **Memoización**: `React.memo` en componentes pesados
2. **Lazy Loading**: `React.Suspense` para code splitting
3. **Virtual Scrolling**: Para listas grandes (futuro)
4. **Image Optimization**: WebP y lazy loading

### 🧪 Testing Strategy

#### Herramientas Planeadas
- **Vitest**: Unit testing
- **React Testing Library**: Component testing
- **Playwright**: E2E testing

---

## 📞 Soporte y Contacto

- **Email**: ciberistas@csoftmty.org
- **Universidad**: Tecnológico de Monterrey
- **Programa**: Especialización en Ciberseguridad

## 📄 Licencia

Este proyecto está desarrollado para uso académico del Tecnológico de Monterrey.

---

## 🔗 Enlaces Útiles

- [Tecnológico de Monterrey](https://tec.mx)
- [Documentación React](https://react.dev)
- [Documentación Vite](https://vitejs.dev)
- [Documentación Tailwind CSS](https://tailwindcss.com)

---

*Desarrollado con ❤️ para el Tecnológico de Monterrey - Programa Ciberistas*
