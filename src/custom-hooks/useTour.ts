import { useEffect } from 'react'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'

const TOUR_KEY = 'anime_week_tour_seen'

export function useTour () {
  useEffect(() => {
    const hasSeenTour = localStorage.getItem(TOUR_KEY)

    if (hasSeenTour) return

    const driverObj = driver({
      showProgress: false,
      allowClose: false,
      steps: [
        { element: '#cantidadAnimes', popover: { title: 'Cantidad de animes', description: 'Aca puedes ver la cantidad de animes que tienes para ver en el dia actual.', side: "left", align: 'start' }},
        { element: '#user', popover: { title: 'Crear usuario', description: 'Aca vas a poder escoger un nombre de usuario y una foto de perfil.', side: "left", align: 'start' }},
        { element: '#resetWeek', popover: { title: 'Resetear semana', description: 'Aca puedes resetear todos los animes a estado "no visto", la idea es que lo hagas al inicio de cada nueva semana.', side: "left", align: 'start' }},
        { element: '#addAnimeBtn', popover: { title: 'Agregar anime', description: 'Click aca para añadir un anime. La idea es que agregues el anime al dia en el que salen nuevos capitulos.', side: "left", align: 'start' }},
        { element: '#animeList', popover: { title: 'Lista de Animes', description: 'Aca vas a ver tus animes. Para editarlos o eliminarlos click derecho encima de ellos. En mobile mantenlos presionados.', side: "left", align: 'start' }},
        { popover: { title: 'Ten en cuenta', description: 'Los datos de tus animes y tu usuario se guardan localmente (es decir, en tu navegador), no se comparten entre dispositivos.', side: "left", align: 'start' }},
        { popover: { title: 'Muchas gracias ♥️', description: 'Espero que la app te sea de utilidad, la hice con mucho cariño 😄.' } }
      ],
      nextBtnText: 'Siguiente',
      prevBtnText: 'Atrás',
      doneBtnText: 'Listo',
      onDestroyed: () => {
        localStorage.setItem(TOUR_KEY, 'true')
      }
    })

    driverObj.drive()
  }, [])
}
