import { BgImg } from "@/components/BgImg"
import { WordDetails } from "@/components/WordDetails"

import { GetSignalService } from "@/core/application/services/get-signal-service"
import { PrismaSignalRepository } from "@/core/infra/repositories/prisma/prisma-signal-repository"

type WordProps = {
  params: { code: string }
}

const signalRepository = new PrismaSignalRepository()
const getSignalService = new GetSignalService(signalRepository)

const Word = async ({ params }: WordProps) => {
  const signal = await getSignalService.execute(parseInt(params.code))
  if (!signal) return <h1>Sinal não encontrado!</h1>

  return (
    <BgImg href="/img/background/dicsecundario.png">
      <WordDetails signal={signal} representation={signal.representations[0]} />
    </BgImg>
  )
}

export default Word
