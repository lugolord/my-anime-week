import { useState, useEffect } from 'react'
import { loadUser } from '@/utils/loadUser'
import { saveUser } from '@/utils/saveUser'
import { AvatarMenu } from './AvatarMenu'
import HandleUserDialog from './HandleUserDialog'

type UserType = {
  username: string
  image: string
}

function User () {
  const [user, setUser] = useState<UserType | null>(loadUser)

  useEffect(() => {
    saveUser(user)
  }, [user])
  
  const createUser = (username: string, image: string) => setUser({username, image})

  return (
    <div className='flex gap-5 items-center'>
      {user ? (
        <>
          <p>Bienvenido, <span className='text-[#818CF8]'>{user.username}</span></p>
          <AvatarMenu url={user.image} createUser={createUser} />
        </>
      ) : (
        <HandleUserDialog createUser={createUser} label='Crear usuario' action='create' />
      )}
    </div>
  )
}

export default User
