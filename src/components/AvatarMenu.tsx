import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import HandleUserDialog from './HandleUserDialog'

type AvatarMenuProps = {
  url: string
  createUser: (username: string, image: string) => void
}

export function AvatarMenu ({ url, createUser } : AvatarMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src={url} alt="user avatar" />
            <AvatarFallback>
              <div 
                className="size-8 rounded-full bg-linear-to-br from-purple-500 via-violet-500 to-fuchsia-500" 
              />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" >
        <DropdownMenuGroup>
          <HandleUserDialog createUser={createUser} label='Editar usuario' action='edit' />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
