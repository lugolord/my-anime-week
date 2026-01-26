import type { AnimesType } from '../types/AnimesType'

export const saveAnimes = (animes: AnimesType) => {
  localStorage.setItem('animes', JSON.stringify(animes))
}
