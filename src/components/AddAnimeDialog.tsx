import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAnime } from '@/context/useAnime'
import { useState } from 'react'
import type { DayType } from '@/types/DayType'

export default function AddAnimeDialog ({ day } : { day: DayType }) {
  const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const { addAnime } = useAnime()

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addAnime(day, {name: username, id: crypto.randomUUID(), image: image, visto: false})
    setImage('')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' id='addAnimeBtn'>+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <form onSubmit={handleSubmit}>
          <DialogHeader className='mb-3'>
            <DialogTitle>Agregar anime</DialogTitle>
            <DialogDescription>
              El nombre es obligatorio
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Nombre</Label>
              <Input 
                id="name" 
                name="name"
                placeholder="Ej: Naruto" 
                required
                onInput={({ currentTarget }) => setUsername(currentTarget.value)}
              />
            </div>
            <div className="grid gap-3 mb-5">
              <Label htmlFor="image">Imagen</Label>
              <Input 
                id="image" 
                name="image" 
                placeholder='ingresa la url de la imagen' 
                onInput={({ currentTarget }) => setImage(currentTarget.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild disabled={username.length < 1}>
              <Button type='submit'>Agregar</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
