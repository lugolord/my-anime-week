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
import { useRef } from 'react'
import { Pencil } from 'lucide-react'

function HandleUserDialog ({ createUser, label, action } : UserDialogProps) {
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const imageRef = useRef<HTMLInputElement | null>(null)

  const handleCreateUser = () => {
    const usernameInput = usernameRef.current
    const imageInput = imageRef.current

    if (!usernameInput) return
    if (!imageInput) return
    if (!usernameInput.value) return

    createUser(usernameInput.value, imageInput.value)
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {action === 'edit' ? (
            <div className='flex py-1 items-center gap-3 justify-center hover:bg-gray-100 cursor-pointer'>
              <Pencil size={15} color='#585858' />
              <p className='text-sm font-general'>
                Editar perfil
              </p>
            </div>
          ) : (
            <Button 
              variant="default" 
              className='cursor-pointer bg-[#8B5CF6] hover:bg-white hover:text-black transition delay-150 duration-300 ease-in-out font-general'
            >
              {label}
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle className='font-general'>{label}</DialogTitle>
            <DialogDescription className='font-general'>
              Datos de usuario
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="username" className='font-general'>Username</Label>
              <Input id="username" name="username" placeholder="escribe aca tu username" ref={usernameRef} maxLength={20} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="avatar" className='font-general'>Avatar</Label>
              <Input 
                id="avatar" 
                name="avatar" 
                placeholder='ingresa la url de la imagen' 
                ref={imageRef} 
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className='font-general'>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type='submit' onClick={handleCreateUser} className='font-general'>{label}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

type UserDialogProps = {
  createUser: (username: string, image: string) => void
  label: string
  action: 'create' | 'edit'
}

export default HandleUserDialog
