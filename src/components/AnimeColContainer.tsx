import DayColumn from './DayColumn'
import { useAnime } from '../context/useAnime'
import { getToday } from '@/utils/getToday'

function AnimeColContainer () {
  const { animes } = useAnime()
  const today = getToday()
  
  return (
    <main className="col-span-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7">
      <DayColumn day='lunes'  animes={animes.lunes} today={today}  />
      <DayColumn day='martes' animes={animes.martes} today={today} />
      <DayColumn day='miércoles' animes={animes.miércoles} today={today} />
      <DayColumn day='jueves' animes={animes.jueves} today={today} />
      <DayColumn day='viernes' animes={animes.viernes} today={today} />
      <DayColumn day='sábado' animes={animes.sábado} today={today} />
      <DayColumn day='domingo' animes={animes.domingo} today={today} />
    </main>
  )
}

export default AnimeColContainer
