import { PropsWithChildren } from "react"

import { Alphabet } from "@/components/Footers/Alphabet"
import { GamesHeader } from "@/components/Headers/Games"

export const metadata = {
  title: "Librex | Jogos",
  description: "Seu site educativo sobre a Língua Brasileira de Sinais.",
}

const GamesLayout = ({ children }: PropsWithChildren) => (
  <>
    {/* Trocar Header  */}
    <GamesHeader />
    {children}
    <Alphabet />
  </>
)

export default GamesLayout
