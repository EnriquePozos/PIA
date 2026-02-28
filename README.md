# Inicio de Proyecto - Stack MERN (Arquitectura Base)

## 📖 Descripción del Proyecto
Este repositorio contiene la configuración y estructuración inicial para el desarrollo de una aplicación web escalable. Sirve como el punto de partida (boilerplate) para el equipo de desarrollo, estableciendo las bases del entorno de trabajo bajo el stack MERN. Está diseñado para permitir que el frontend y el backend evolucionen de manera independiente, manteniendo un entorno limpio y colaborativo.

## 🛠️ Tecnologías Utilizadas
El proyecto se construye sobre el ecosistema MERN moderno:
* **MongoDB:** Base de datos NoSQL para un modelado de datos flexible y escalable.
* **Express.js:** Framework minimalista para Node.js, encargado de gestionar las rutas y la API REST.
* **React (con Vite):** Biblioteca para la construcción de la interfaz de usuario. Se optó por Vite como herramienta de construcción por su velocidad y eficiencia en el entorno de desarrollo.
* **Node.js:** Entorno de ejecución en el servidor.
* **Git:** Sistema de control de versiones para el seguimiento estructurado del código.

## 🚀 Guía de Ejecución Local

Para levantar este proyecto en un entorno de desarrollo local, sigue estos pasos. Es necesario tener instalado [Node.js](https://nodejs.org/) y [Git](https://git-scm.com/).

### 1. Clonar el repositorio
\`\`\`bash
git clone <https://github.com/EnriquePozos/PIA.git>
cd <NOMBRE_DE_LA_CARPETA>
\`\`\`

### 2. Configuración y ejecución del Servidor (Backend)
El backend está configurado para ejecutarse de forma independiente.
\`\`\`bash
cd backend
npm install
# Crear el archivo de entorno basado en el ejemplo
cp .env.example .env
# Iniciar el servidor en modo desarrollo
npm run dev
\`\`\`

### 3. Configuración y ejecución del Cliente (Frontend)
El cliente funciona en su propio puerto de desarrollo proveído por Vite.
En una nueva terminal, ejecuta:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

## 📐 Decisiones Técnicas y Buenas Prácticas
Al inicializar este repositorio, se tomaron las siguientes decisiones para asegurar la viabilidad del proyecto a largo plazo hasta su paso a producción:

1. **Estructura Monorepo (Separación de intereses):** Se crearon directorios raíz distintos (`/backend` y `/frontend`). Esto evita conflictos de dependencias, facilita el entendimiento del proyecto para nuevos desarrolladores y permite despliegues independientes.
2. **Protección de Credenciales:** Se implementó un archivo `.gitignore` en la raíz desde el primer commit. Esto asegura que carpetas pesadas como `node_modules` y archivos sensibles como `.env` jamás se expongan en el historial de versiones. Se provee un `.env.example` como plantilla segura.
3. **Adopción de Vite:** Se seleccionó Vite en lugar de Create React App (CRA) para el frontend, ya que ofrece tiempos de arranque instantáneos y Hot Module Replacement (HMR) optimizado, siendo el estándar profesional actual.
4. **Preparación para Arquitectura MVC:** El backend ya cuenta con la estructura de directorios (`controllers`, `models`, `routes`, `config`) lista para implementar el patrón Modelo-Vista-Controlador, garantizando que el código no se aglomere en un solo archivo a medida que la API crezca.