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
import { useRef } from 'react'
import type { DayType } from '@/types/DayType'

export default function AddAnimeDialog ({ day } : { day: DayType }) {
  const { addAnime } = useAnime()
  const nameRef = useRef<HTMLInputElement | null>(null)
  const imageRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nameInput = nameRef.current
    const imageInput = imageRef.current

    if (!nameInput) return
    if (!imageInput) return
    if (!nameInput.value) return

    addAnime(day, {name: nameInput.value, id: crypto.randomUUID(), image: imageInput.value, visto: false})
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost'>+</Button>
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
              <Input id="name" name="name" placeholder="Ej: Naruto" ref={nameRef} required />
            </div>
            <div className="grid gap-3 mb-5">
              <Label htmlFor="image">Imagen</Label>
              <Input id="image" name="image" placeholder='ingresa la url de la imagen' ref={imageRef} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type='submit'>Agregar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
