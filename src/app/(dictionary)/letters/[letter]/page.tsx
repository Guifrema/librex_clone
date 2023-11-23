import { BgImg } from "@/components/BgImg"
import { LetterDisplay } from "@/components/LetterDisplay"
import { GetSignalsByBeginningService } from "@/core/application/services/get-signals-by-beginning-service"
import { PrismaSignalRepository } from "@/core/infra/repositories/prisma/prisma-signal-repository"
import { signalsToLetterDisplayFormat } from "@/util/signals-converter"

type LetterProps = {
  params: { letter: string }
}

const signalRepository = new PrismaSignalRepository()
const getSignalsByBeginningService = new GetSignalsByBeginningService(
  signalRepository
)

export default async function Letter({ params }: LetterProps) {
  const letter = decodeURIComponent(params.letter)
  const signals = await getSignalsByBeginningService.execute(letter)

  if (!signals || signals?.length === 0)
    return (
      <BgImg href="/img/background/dicsecundario.png">
        <h1
          className="h-28 pt-10 text-center text-3xl font-bold uppercase"
          style={{ color: "#283b51" }}
        >
          Não há sinais cadastrados que iniciem com: {letter}
        </h1>
      </BgImg>
    )

  const formatedSignals = signalsToLetterDisplayFormat(
    signals.sort((a, b) => {
      return a.name[0].charCodeAt(0) - b.name[0].charCodeAt(0)
    })
  )

  return (
    <BgImg href="/img/background/dicsecundario.png">
      <div className="px-28 py-8 ">
        {formatedSignals.map((signal) => (
          <LetterDisplay
            key={signal.letter}
            {...signal}
            className="mb-8 grid grid-cols-1 gap-x-3 sm:grid-cols-3 lg:grid-cols-5"
          />
        ))}
      </div>
    </BgImg>
  )
}
