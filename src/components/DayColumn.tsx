import type { AnimeType } from '../types/AnimeType'
import type { DayType } from '@/types/DayType'
import AddAnimeDialog from './AddAnimeDialog'
import AnimeList from './AnimeList'

function DayColumn ({ day, today, animes } : DayColumnProps) {
  return (
    <div className={`border-r min-h-60 ${today === day ? 'border-r-[#272195] shadow-[0_0_20px_rgba(79,70,229,0.2)] order-first sm:order-0 bg-[#16162D]' : 'border-r-[#2D3343]'}`}>
      <header className={`flex justify-between items-center border-b border-b-[#2D3343] p-3 ${today === day ? 'bg-[#1d1d3a]': ''}`}>
        <p className={`font-medium ${today === day ? 'text-[#8B5CF6]' : ''}`}>{day.toUpperCase()}</p>
        <AddAnimeDialog day={day} />
      </header>
      <AnimeList animes={animes} day={day} />
    </div>
  )
}

type DayColumnProps = {
  day: DayType
  today?: DayType
  animes: AnimeType[]
}

export default DayColumn
