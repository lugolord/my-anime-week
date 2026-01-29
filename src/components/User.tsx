import { useState, useEffect } from 'react'
import { loadUser } from '@/utils/loadUser'
import { saveUser } from '@/utils/saveUser'
import { AvatarMenu } from './AvatarMenu'
import HandleUserDialog from './HandleUserDialog'

function User () {
  const [user, setUser] = useState<UserType | null>(loadUser)

  useEffect(() => {
    saveUser(user)
  }, [user])
  
  const createUser = (username: string, image: string) => setUser({username, image})

  return (
    <div className='flex gap-5 items-center' id='user'>
      {user ? (
        <>
          <p className='font-general'>Bienvenido, <span className='text-[#818CF8]'>{user.username}</span></p>
          <AvatarMenu url={user.image} createUser={createUser} />
        </>
      ) : (
        <HandleUserDialog createUser={createUser} label='Crear usuario' action='create' />
      )}
    </div>
  )
}

type UserType = {
  username: string
  image: string
}

export default User
