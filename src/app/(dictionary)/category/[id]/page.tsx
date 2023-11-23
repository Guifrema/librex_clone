import { GetSignalsByCategoryService } from "@/core/application/services/get-signals-by-category-service"
import { PrismaSignalRepository } from "@/core/infra/repositories/prisma/prisma-signal-repository"
import { signalsToLetterDisplayFormat } from "@/util/signals-converter"

import { BgImg } from "@/components/BgImg"
import { LetterDisplay } from "@/components/LetterDisplay"
import { categories } from "@/util/consts"

type CategoryProps = {
  params: { id: number }
}

const signalRepository = new PrismaSignalRepository()
const getSignalsByCategoryService = new GetSignalsByCategoryService(
  signalRepository
)

const CategoryResults = async ({ params }: CategoryProps) => {
  const signals = await getSignalsByCategoryService.execute(
    categories[params.id]
  )
  if (!signals) return <h1>Sinal não encontrado!</h1>

  const formatedSignals = signalsToLetterDisplayFormat(
    signals.sort((a, b) => {
      return a.name[0].charCodeAt(0) - b.name[0].charCodeAt(0)
    })
  )

  return (
    <BgImg href="/img/background/dicsecundario.png">
      <h1 className="pt-10 text-center text-3xl font-bold uppercase" style={{ color: '#283b51' }}>
        {categories[params.id]}
      </h1>
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

export default CategoryResults
