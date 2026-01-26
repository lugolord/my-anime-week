# 📅 My Anime Week

Aplicación web para organizar y visualizar un **calendario semanal de
anime**, permitiendo llevar el control de qué animes ver cada día de la
semana de forma simple y rápida.

Pensada como una app personal, sin backend, enfocada en una buena
experiencia de usuario y una arquitectura clara en React.

------------------------------------------------------------------------

## ✨ Características

-   📆 Calendario semanal (lunes a domingo)
-   ➕ Agregar animes por día
-   🗑️ Eliminar animes
-   📊 Contador total de animes en la semana
-   ✏️ Editar información de usuario
-   💾 Persistencia de datos usando **localStorage**
-   📱 Diseño responsive (desktop y mobile)

------------------------------------------------------------------------

## 🧠 ¿Cómo funciona el guardado de datos?

La aplicación utiliza **localStorage** para guardar la información del
usuario (solo username e imagen de avatar) y los animes agregados.

Esto significa que: - Los datos se mantienen al recargar la página - Los
datos se guardan **solo en el dispositivo y navegador actual** - No hay
sincronización entre dispositivos - Si el usuario borra los datos del
navegador, la información se pierde

------------------------------------------------------------------------

## 🛠️ Tecnologías utilizadas

-   **React**
-   **TypeScript**
-   **Context API**
-   **Tailwind CSS**
-   **shadcn/ui**
-   **Lucide Icons**
-   **LocalStorage** (sin backend)

------------------------------------------------------------------------

## 📦 Instalación y uso

Cloná el repositorio:

``` bash
git clone https://github.com/lugolord/my-anime-week.git
```

Instalá las dependencias:

``` bash
npm install
```

Levantá el proyecto:

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🧩 Estructura del proyecto

-   Componentes desacoplados y reutilizables
-   Modales basados en un `Dialog` base
-   Formularios separados de la lógica de presentación
-   Estado global manejado con Context
-   Estado derivado (contadores) calculado sin `useState`

------------------------------------------------------------------------

## 🎨 Diseño

-   Estilo minimalista
-   Colores oscuros con acento violeta
-   Interfaz clara y enfocada en la legibilidad

------------------------------------------------------------------------

## 🚀 Posibles mejoras futuras

-   Sincronización entre dispositivos
-   Autenticación de usuarios
-   Backup de datos

------------------------------------------------------------------------

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.\
Podés usarlo, modificarlo y adaptarlo libremente.

------------------------------------------------------------------------

## 👨‍💻 Autor

**Luis González**\
Front-end Developer\
📍 Buenos Aires, Argentina

-   🌐 Portfolio: https://luisgonz.tech\
-   💼 LinkedIn: https://linkedin.com/in/luisgonzr\
-   📧 Email: luisgonz.dev@gmail.com

------------------------------------------------------------------------

⭐ Si te gusta el proyecto, ¡no olvides dejar una estrella!
