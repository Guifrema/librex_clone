import { Alphabet } from "@/components/Footers/Alphabet"
import { GamesNav } from "@/components/Footers/GamesNav"
import { DictionaryHeader } from "@/components/Headers/Dictionary"
import { GamesHeader } from "@/components/Headers/Games"
import { PropsWithChildren } from "react"

export const metadata = {
  title: "Librex | Sobre Nós",
}

const aboutUsLayout = ({ children }: PropsWithChildren) => (
  <>
    {/* Trocar Header  */}
    <GamesHeader />
    {children}
    <Alphabet />
    <GamesNav />
  </>
)

export default aboutUsLayout
