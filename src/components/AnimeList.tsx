import type { AnimeType } from '@/types/AnimeType'
import type { DayType } from '@/types/DayType'
import Anime from './Anime'

function AnimeList ({ animes, day } : { animes: AnimeType[], day: DayType }) {
  if (animes.length === 0) {
    return <p className='mt-10 text-center text-muted-foreground'>no has agregado animes</p>
  }

  return (
    <>
      {animes.map(anime => <Anime anime={anime} key={anime.id} day={day} /> )}
    </>
  )
}

export default AnimeList
