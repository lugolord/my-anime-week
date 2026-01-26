import { getToday } from '@/utils/getToday'
import { useAnime } from '@/context/useAnime'
import User from './User'

function Header () {
  const { getAnimeQty } = useAnime()
  const today = getToday()
  const animeQty = getAnimeQty(today)

  return (
    <header className="col-span-7 border-b-[#2D3343] border-b p-6">
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <h1 className='text-xl font-semibold mb-3 sm:mb-0' id='tituloPrincipal'>My Anime Week</h1>
        <p className='text-2xl font-bold mb-3 sm:mb-0' id='cantidadAnimes'>
          Hoy es <span className='text-[#8B5CF6]'>{today}</span>, tienes <span className='text-[#8B5CF6]'>{animeQty}</span> anime para ver
        </p>
        <User />
      </div>
    </header>
  )
}

export default Header
