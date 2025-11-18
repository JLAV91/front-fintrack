# Fin-Track - Aplicación Frontend

Plataforma moderna para la gestión y control de finanzas personales, construida con React y Vite.

## 📋 Descripción del Proyecto

**Fin-Track** es una aplicación web que permite a los usuarios organizar sus finanzas, controlar gastos y alcanzar metas financieras de manera fácil e intuitiva. Esta es la parte frontend del proyecto, desarrollada con las más modernas tecnologías web.

## 🛠️ Stack Tecnológico

- **React 19** - Librería de interfaz de usuario
- **Vite 7** - Herramienta de compilación rápida con Hot Module Replacement (HMR)
- **React Router DOM 7** - Enrutamiento de aplicación
- **Bootstrap** - Framework CSS para estilos responsivos
- **ESLint** - Control de calidad y estilo del código
- **@vitejs/plugin-react** - Plugin de React para Vite con Babel

## 📁 Estructura del Proyecto

```
frontApp/
├── public/                    # Archivos públicos estáticos
├── src/
│   ├── assets/
│   │   └── img/              # Imágenes y recursos visuales
│   │       └── Logo.png      # Logo de Fin-Track
│   ├── components/           # Componentes reutilizables
│   │   ├── navBar.jsx        # Barra de navegación
│   │   └── footer.jsx        # Pie de página
│   ├── pages/                # Páginas principales
│   │   ├── home.jsx          # Página de inicio
│   │   └── login.jsx         # Página de autenticación
│   ├── routes/
│   │   └── routes.jsx        # Configuración de rutas
│   ├── App.jsx               # Componente principal
│   └── main.jsx              # Punto de entrada
├── eslint.config.js          # Configuración de ESLint
├── vite.config.js            # Configuración de Vite
├── package.json              # Dependencias del proyecto
└── index.html                # HTML principal

```

## ✨ Características Principales

### 🏠 Página de Inicio
- Bienvenida con presentación clara del servicio
- Sección "¿Qué quieres hacer?" con opciones interactivas
- Llamada a la acción para crear cuenta
- Interfaz responsiva y amigable

### 🔐 Autenticación
- Página de login con formulario
- Campos para correo electrónico y contraseña
- Validación en cliente

### 🧭 Navegación
- Barra de navegación personalizada con logo de Fin-Track
- Enlaces de navegación a secciones principales
- Diseño responsivo con menú desplegable

### 📱 Pie de Página
- Footer con derechos reservados
- Información de contacto
- Año automático (2025)

## 🚀 Comenzar

### Requisitos Previos
- Node.js v14 o superior
- npm o yarn

### Instalación

```bash
npm install
```

### Desarrollo

Ejecutar el servidor de desarrollo con HMR:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5173`

### Construcción para Producción

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`

### Vista Previa de Producción

```bash
npm run preview
```

### Validación de Código

Ejecutar ESLint para verificar la calidad del código:

```bash
npm lint
```

## 📦 Dependencias

### Producción
- `react@^19.2.0` - Librería React
- `react-dom@^19.2.0` - Renderización DOM
- `react-router-dom@^7.9.6` - Enrutamiento

### Desarrollo
- `vite@^7.2.2` - Compilador y servidor
- `@vitejs/plugin-react@^5.1.0` - Plugin de React
- `eslint@^9.39.1` - Linter
- `eslint-plugin-react-hooks@^7.0.1` - Rules para React Hooks
- `eslint-plugin-react-refresh@^0.4.24` - Rules para React Refresh

## 📋 Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Página principal con información |
| `/login` | Login | Página de autenticación |

## 🔧 Configuración ESLint

El proyecto incluye reglas ESLint configuradas para:
- Compatibilidad con React Hooks
- Soporte para React Refresh
- Validación de código moderno (ES2020)
- Detección de variables no utilizadas

### Reglas Personalizadas
- Las variables que comienzan con mayúscula o guión bajo se ignoran en la regla `no-unused-vars`

## 📝 Notas de Desarrollo

- **Fast Refresh**: El proyecto incluye soporte para fast refresh con Babel
- **HMR**: Los cambios se reflejan automáticamente sin recargar la página
- **Responsive Design**: Utiliza Bootstrap para garantizar compatibilidad en dispositivos

## 👨‍💻 Contribuidores

Proyecto desarrollado por: JLAV91

## 📞 Contacto

Para más información: info@fintrack.com

---

**© 2025 Fin-Track | Todos los derechos reservados**
