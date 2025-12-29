# 📋 CRUD App - Jest Testing

Esta aplicación para generar una lista de tareas, es un CRUD (Create, Read, Update, Delete) completo construido con **React** y **Vite**, con cobertura de pruebas usando **Jest** y **React Testing Library**.

## 🎯 Sobre el Proyecto

Esta aplicación es un ejemplo funcional de un sistema CRUD con enfoque en **testing automatizado**. Permite crear, leer, actualizar y eliminar tareas con filtrado y pruebas unitarias en cada componente.

---

## ✨ Características

✅ **Crear elementos** - Formulario para agregar nuevas tareas
✅ **Leer datos** - Visualización de lista completa de tareas
✅ **Actualizar** - Cambiar estados de los elementos de "En proceso" a "Completada"
✅ **Eliminar** - Eliminación de tareas
✅ **Filtrar** - Sistema de filtrado en tiempo real
✅ **Tests Completos** - Cobertura de pruebas en todos los componentes del proyecto

---

## 🛠️ Tecnologías

### Frontend
Para el Frontend, se utilizó React como framework para JavaScript, Vite, y CSS.

### Testing
Para el Testing de la aplicación, se utilizó Jest como framework de testing y React Testing Library para el testing de componentes React (.jsx).

---

## 📦 Instalación

### Requisitos Previos
- Node.js 16+ instalado
- npm o yarn como gestor de paquetes

### Pasos

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

---

## 🚀 Uso

### Interfaz de Usuario

1. **Agregar tarea**: Completa el formulario y haz clic en "Agregar tarea"
2. **Filtros**: Se muestran en la lista principal (Lado izquierdo en tablet y desktop, en medio en Mobile)
3. **Lista de tareas**: Utiliza los filtros para buscar tareas con estados específicos
4. **Eliminar**: Utiliza el botón de eliminar para eliminar una tarea

---

## 📁 Estructura del Proyecto

```
crud-jest/
├── src/
│   ├── components/
│   │   ├── CrudApp.jsx          # Componente principal
│   │   ├── CrudForm.jsx         # Formulario de entrada
│   │   ├── CrudList.jsx         # Lista de elementos
│   │   ├── CrudItem.jsx         # Item individual
│   │   ├── CrudFilters.jsx      # Filtros
│   │   └── __tests__/           # Pruebas unitarias
│   │       ├── CrudApp.test.jsx
│   │       ├── CrudForm.test.jsx
│   │       ├── CrudList.test.jsx
│   │       ├── CrudItem.test.jsx
│   │       └── CrudFilters.test.jsx
│   ├── test/
│   │   └── setupTests.js        # Configuración de Jest
│   ├── App.jsx                  # Componente raíz
│   ├── main.jsx                 # Punto de entrada
│   ├── App.css                  # Estilos principales
│   └── index.css                # Estilos globales
├── public/                      # Archivos estáticos
├── jest.config.cjs              # Configuración de Jest
├── babel.config.cjs             # Configuración de Babel
├── vite.config.js               # Configuración de Vite
├── eslint.config.js             # Configuración de ESLint
├── package.json                 # Dependencias del proyecto
└── README.md                    # Este archivo
```

---

## 🧪 Testing

### Ejecución de Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch
npm test -- --watch

# Ver cobertura de pruebas
npm test -- --coverage
```

### Componentes Testeados

| Componente | Pruebas |
|-----------|---------|
| **CrudApp.jsx** | Renderización, estado inicial, flujo completo |
| **CrudForm.jsx** | Validación, envío de datos, cambios de input |
| **CrudList.jsx** | Renderización de lista, mapeo de elementos |
| **CrudItem.jsx** | Renderización, eventos de edición/eliminación |
| **CrudFilters.jsx** | Filtrado, búsqueda, actualización de estado |

## 👨‍💻 Autor

**Francis Carrasco** - Desarrolladora Full-Stack Jr.