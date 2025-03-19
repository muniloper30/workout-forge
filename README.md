# Workout Forge

**Workout Forge** es una aplicación para crear y personalizar entrenamientos, diseñada para ofrecer flexibilidad y personalización en la forma en que los usuarios abordan sus rutinas de ejercicio. Los usuarios pueden registrarse, mantener sesión iniciada y gestionar su perfil, que incluye su nombre y una imagen de perfil. Además, integra un mapa del centro de entrenamiento, proporcionando a los usuarios información sobre la ubicación, horarios y servicios disponibles. Con una interfaz intuitiva y un diseño centrado en la experiencia del usuario, **Workout Forge** es la herramienta ideal para quienes desean llevar su entrenamiento al siguiente nivel.

La aplicación interactúa con una API de workouts construida con **Node.js** y **Express**, y utiliza **Supabase** para la autenticación de usuarios y el almacenamiento de datos.

## Características

- **Registro y Gestión de Perfil**: Los usuarios pueden registrarse, mantener sesión iniciada y almacenar su nombre e imagen de perfil, utilizando la autenticación de **Supabase**.
- **Creación de Entrenamientos**: Los usuarios pueden crear y personalizar sus propios entrenamientos.
- **API de Workouts**: La aplicación consume una API RESTful construida con **Node.js** y **Express** que gestiona los entrenamientos y otros datos relacionados.
- **Próximas Funcionalidades**: En el futuro, se añadirá la opción de guardar entrenamientos favoritos y la capacidad de crear entrenamientos personalizados directamente desde el perfil del usuario.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **React**: Librería para construir interfaces de usuario.
- **Vite**: Un motor de desarrollo ultra rápido para aplicaciones modernas.
- **Node.js**: Plataforma de backend para ejecutar JavaScript en el servidor.
- **Express**: Framework para Node.js para gestionar las rutas de la API.
- **Supabase**: Base de datos en tiempo real y solución de autenticación basada en **PostgreSQL**.
- **Tailwind CSS**: Framework de CSS para diseñar interfaces rápidamente con clases utilitarias.
- **Lucide React**: Biblioteca de iconos ligeros y personalizables para React.
- **ESLint**: Herramienta de linting para mantener la calidad del código.

## Instalación

### Requisitos previos

- **Node.js** (versión 16 o superior).
- **npm** (gestor de paquetes de Node.js).
- **Cuenta de Supabase**, para configurar la base de datos y autenticación de usuarios.
