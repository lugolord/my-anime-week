import type { DayType } from '@/types/DayType'

export const getToday = (): DayType => {
  return new Intl.DateTimeFormat('es-AR', {
    weekday: 'long',
  }).format(new Date()) as DayType
}
