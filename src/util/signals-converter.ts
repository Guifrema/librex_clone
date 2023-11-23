import { Signal } from "@/core/domain/entities/signal"

const shuffle = <T>(array: T[]) => {
  return array.sort(() => 0.5 - Math.random())
}

type LetterDisplayFormat = {
  letter: string
  words: Signal[]
  wordHref: string
  letterHref: string
}

export const signalsToLetterDisplayFormat = (
  signals: Signal[],
  qntWords?: number
): LetterDisplayFormat[] => {
  const formatedSignals: LetterDisplayFormat[] = []

  signals.forEach((signal, index, array) => {
    if (signal.name[0] !== array[index - 1]?.name[0])
      formatedSignals.push({
        letter: signal.name[0],
        words: [signal],
        wordHref: `/words/`,
        letterHref: `/letters/${signal.name[0]}`,
      })
    else formatedSignals[formatedSignals.length - 1].words.push(signal)
  })

  if (qntWords)
    return formatedSignals.map((signal) => ({
      ...signal,
      words: shuffle(signal.words).slice(0, qntWords),
    }))

  return formatedSignals
}
