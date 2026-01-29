import { useAnime } from '@/context/useAnime'

function Footer () {
  const { getAllAnimes } = useAnime()
  const allAnimes = getAllAnimes()

  return (
    <footer className='col-span-7 font-general bg-[#16161a] border-t border-t-[#2D3343] flex flex-col sm:flex-row items-center justify-between p-3'>
      <p className='text-muted-foreground uppercase text-sm font-medium'>viendo: {allAnimes} animes</p>
      <p className='text-muted-foreground uppercase text-sm font-medium'>&copy; 2026 My Anime Week. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
