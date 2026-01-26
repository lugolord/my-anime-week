import { createContext } from 'react'
import type { AnimesType } from '../types/AnimesType'
import type { AnimeType } from '../types/AnimeType'
import type { DayType } from '../types/DayType'

export type AnimeContextType = {
  animes: AnimesType,
  addAnime: (day: DayType, anime: AnimeType) => void
  updateViewStatus: (anime: AnimeType, day: DayType) => void
  getAnimeQty: (day: DayType) => number
  deleteAnime: (day: DayType, anime: AnimeType) => void
  getAllAnimes: () => number
}

export const AnimeContext = createContext<AnimeContextType | null>(null)
