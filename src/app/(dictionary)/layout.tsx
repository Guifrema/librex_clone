import { PropsWithChildren } from "react"

import { Alphabet } from "@/components/Footers/Alphabet"
import { GamesNav } from "@/components/Footers/GamesNav"
import { DictionaryHeader } from "@/components/Headers/Dictionary"

export const metadata = {
  title: "Librex | Dicionário",
  description: "Seu site educativo sobre a Língua Brasileira de Sinais.",
}

const DictionaryLayout = ({ children }: PropsWithChildren) => (
  <>
    <DictionaryHeader />
    {children}
    <Alphabet />
    <GamesNav />
  </>
)

export default DictionaryLayout
