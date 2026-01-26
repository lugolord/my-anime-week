import { AnimeContext } from './AnimeContext'
import { useEffect, useState, type ReactElement } from 'react'
import { loadAnimes } from '@/utils/loadAnimes'
import { saveAnimes } from '@/utils/saveAnimes'
import type { AnimesType } from '../types/AnimesType'
import type { AnimeType } from '../types/AnimeType'
import type { DayType } from '../types/DayType'

function AnimeProvider ({ children } : { children: ReactElement }) {
  const [animes, setAnimes] = useState<AnimesType>(loadAnimes() || {
    lunes: [],
    martes: [],
    miércoles: [],
    jueves: [],
    viernes: [],
    sábado: [],
    domingo: []
  })

  useEffect(() => {
    saveAnimes(animes)
  }, [animes])

  const addAnime = (day: DayType, anime: AnimeType) => {
    setAnimes(prev => ({
      ...prev,
      [day]: [...prev[day], anime],
    }))
  }

  const updateViewStatus = (anime: AnimeType, day: DayType) => {
    setAnimes(prev => ({
      ...prev,
      [day]: prev[day].map(el =>
        el.id === anime.id ? { ...el, visto: !el.visto } : el
      )
    }))
  }

  const getAnimeQty = (day: DayType) => {
    const noViewAnimes = animes[day].filter(el => el.visto === false)
    return noViewAnimes.length
  }

  const getAllAnimes = () => {
    const { lunes, martes, miércoles, jueves, viernes, domingo, sábado } = animes
    const total = lunes.length + martes.length + miércoles.length + jueves.length + viernes.length + sábado.length + domingo.length
    
    return total
  }

  const deleteAnime = (day: DayType, anime: AnimeType) => {
    const animesCopy = animes[day].filter(el => el.id !== anime.id)
    setAnimes({...animes, [day]: animesCopy})
  }
  
  return (
    <AnimeContext.Provider 
      value={{ 
        animes, 
        addAnime, 
        updateViewStatus, 
        getAnimeQty, 
        deleteAnime,
        getAllAnimes 
      }}
    >
      {children}
    </AnimeContext.Provider>
  )
}

export default AnimeProvider
