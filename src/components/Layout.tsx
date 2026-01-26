import Header from './Header'
import AnimeColContainer from './AnimeColContainer'
import Footer from './Footer'
import { useTour } from '../custom-hooks/useTour'

function Layout () {
  useTour()
  
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] grid-cols-7 bg-[#0F1117] text-white">
      <Header />
      <AnimeColContainer />
      <Footer />
    </div>
  )
}

export default Layout
