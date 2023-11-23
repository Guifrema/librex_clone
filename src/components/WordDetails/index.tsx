import { Signal } from "@/core/domain/entities/signal"
import { SignalRepresentation } from "@/core/domain/entities/signal-representation"
import { CarouselElement } from "../CarouselElement"
import PopoverButton from "../PopoverButton"

type WordDetailsProps = {
  signal: Signal
  representation: SignalRepresentation
}

export const WordDetails = ({ signal, representation }: WordDetailsProps) => {
  return (
    <div className="min-h-screen p-5 mx-auto max-w-screen-xl">
      <h1 className="mb-10 text-center text-3xl font-bold uppercase" style={{ color: '#283b51' }}>
        {signal.name}
      </h1>

      <div className="grid grid-cols-3 gap-10 m-10">
        <PopoverButton title={"Descrição"} description={signal.description} />
        <PopoverButton title={"Exemplo"} description={signal.portugueseSentence} />
        <PopoverButton title={"Exemplo em Libras"} description={signal.signalSentence} />
      </div>
      <div className="grid grid-cols-1">
        <CarouselElement representation={representation} />
      </div>
    </div>
  )
}
