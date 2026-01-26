import type { UserType } from '@/types/UserType'

export const saveUser = (user: UserType | null) => {
  localStorage.setItem('user', JSON.stringify(user))
}
