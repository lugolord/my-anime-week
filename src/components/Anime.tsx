import type { AnimeType } from '@/types/AnimeType'
import type { DayType } from '@/types/DayType'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { useAnime } from '@/context/useAnime'

function Anime ({ anime, day } : { anime: AnimeType, day: DayType }) {
  const { updateViewStatus, deleteAnime } = useAnime()

  const handleDelete = () => deleteAnime(day, anime)

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className={`p-3 flex items-center gap-3 hover:bg-accent-foreground ${anime.visto ? 'opacity-50' : ''}`}>
          <div className='w-1/3'>
            {anime.image ? 
              <img src={anime.image} alt={anime.name} className='size-12 object-cover rounded' /> : 
              <div className='size-12 bg-linear-to-br from-[#4F46E5] to-[#8B5CF6] rounded'></div>
            }
          </div>
          <p className={`text-sm overflow-hidden ${anime.visto ? 'line-through' : ''}`}>
            {anime.name}
          </p>
        </div>
        <span className="hidden pointer-coarse:inline-block">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem onClick={() => updateViewStatus(anime, day)}>visto</ContextMenuItem>
          <ContextMenuItem>editar</ContextMenuItem>
          <ContextMenuItem variant='destructive' onClick={handleDelete}>eliminar</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default Anime
