import { Signal } from "@/core/domain/entities/signal"
import Link from "next/link"

type LetterDisplayProps = {
  words: Signal[]
  letter: string
  wordHref: string
  letterHref: string
  className: string
}

export const LetterDisplay = ({
  words,
  letter,
  wordHref,
  letterHref,
  className,
}: LetterDisplayProps) => {
  return (
    <div>
      <Link href={letterHref}>
        <h1 className="text-bold text-left text-4xl text-blue-400">{letter}</h1>
      </Link>
      <div className={className}>
        {words.map((word) => (
          <Link href={wordHref + word.code} key={word.code}>
            <h2
              className="mx-1 mb-1 mt-1 w-full rounded-md 
          bg-blue-200 py-2
          text-center text-sm font-normal uppercase
          border-solid border-2 border-blue-300"
            >
              {word.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
