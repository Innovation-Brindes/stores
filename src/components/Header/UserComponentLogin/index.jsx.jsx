import * as Popover from "@radix-ui/react-popover"
import { Fieldset, Flex, IconButton, Input, Label, PopoverArrow, PopoverClose, PopoverContent, Text } from "./styles"
import Link from "next/link"
import { BiLogIn } from "react-icons/bi"
import { PiNotepadFill } from "react-icons/pi"

export const UserComponentLogin = ({ user, logout }) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <span>
        <span>Olá, {user}</span>
      </span>
    </Popover.Trigger>
    <Popover.Portal>
      <PopoverContent sideOffset={5}>
        <Flex css={{ flexDirection: "column", gap: 10 }}>
          <Text css={{ marginBottom: 10 }}>Minha conta</Text>
          <Flex css={{ gap: 5, alignItems: "center", cursor: "pointer" }}>
            <PiNotepadFill size={20} />
            <Link href="/painel/relatorios">Relatórios</Link>
          </Flex>

          <Flex css={{ gap: 5, alignItems: "center", cursor: "pointer" }} onClick={() => logout()}>
            <BiLogIn className="cursor-pointer text-xl" />
            Sair
          </Flex>
        </Flex>
        <PopoverClose aria-label="Close">X</PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Portal>
  </Popover.Root>
)
