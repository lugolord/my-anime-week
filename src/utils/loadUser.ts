import type { UserType } from '@/types/UserType'

export const loadUser = (): UserType | null => {
  const data = localStorage.getItem('user')
  return data ? JSON.parse(data) : null
}
