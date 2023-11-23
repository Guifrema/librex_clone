import { GetSortedSignalsService } from "@/core/application/services/get-sorted-signals-service"
import { PrismaSignalRepository } from "@/core/infra/repositories/prisma/prisma-signal-repository"
import { signalsToLetterDisplayFormat } from "@/util/signals-converter"

import { BgImg } from "@/components/BgImg"
import { LetterDisplay } from "@/components/LetterDisplay"
import React from "react"
import Search from "antd/es/input/Search"
const signalRepository = new PrismaSignalRepository()
const getSortedSignalsService = new GetSortedSignalsService(signalRepository)

export default async function Home() {
  const signals = await getSortedSignalsService.execute()
  if (!signals) return <h1>Sinal não encontrado!</h1>

  const formatedSignals = signalsToLetterDisplayFormat(signals, 3)
  // const onSearch = () => ;

  return (
    <BgImg href="/img/background/dicprincipal.png">
      <Search placeholder="input search text" enterButton />

      <div
        className="grid grid-cols-1 gap-10 gap-y-8
          px-28 py-8 sm:grid-cols-3 lg:grid-cols-5"
      >
        {formatedSignals.map((signal, index) => (
          // <>
          //   <LetterDisplay
          //     key={signal.letter}
          //     {...signal}
          //     className="grid grid-cols-1"
          //   />
          // </>

          <React.Fragment key={signal.letter}>
            {index > 10 && (index - 10) % 4 === 0 && <div />}
            <LetterDisplay {...signal} className="grid grid-cols-1" />
          </React.Fragment>
        ))}
      </div>
    </BgImg>
  )
}
