import type { AnimesType } from '@/types/AnimesType'

export const loadAnimes = () : AnimesType | null => {
  const data = localStorage.getItem('animes')
  return data ? JSON.parse(data) : null
}
