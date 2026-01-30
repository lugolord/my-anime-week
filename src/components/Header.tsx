import { getToday } from '@/utils/getToday'
import { useAnime } from '@/context/useAnime'
import { Button } from './ui/button'
import { RotateCcw } from 'lucide-react'
import User from './User'

function Header () {
  const { getAnimeQty, resetWeekProgress } = useAnime()
  const today = getToday()
  const animeQty = getAnimeQty(today)

  return (
    <header className="col-span-7 border-b-[#2D3343] border-b p-6">
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <h1 className='text-4xl tracking-wide font-semibold font-title mb-3 sm:mb-0' id='tituloPrincipal'>My Anime Week</h1>
        <p className='text-2xl mb-3 sm:mb-0 font-general' id='cantidadAnimes'>
          Hoy es <span className='text-[#8B5CF6]'>{today}</span>, tienes <span className='text-[#8B5CF6]'>{animeQty}</span> anime para ver
        </p>
        <div className='flex gap-5'>
          <User />
          <Button 
            id='resetWeek'
            onClick={() => resetWeekProgress()}
            className='cursor-pointer hover:bg-white hover:text-black transition delay-150 duration-300 ease-in-out'
          >
            <RotateCcw />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
