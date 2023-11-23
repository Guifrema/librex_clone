import { ButtonImg } from "@/components/ButtonImg"
import { letters } from "@/util/consts"

export const Alphabet = () => {
  return (
    <div className="w-full bg-blue-200 p-12">
      <h1 className="ml-12 text-lg">Conheça o alfabeto em LIBRAS:</h1>
      <div className="mt-6 flex">
        {letters.map((letter) => (
          <div key={letter}>
            <ButtonImg
              label={letter}
              src={`/img/alphabet/${letter}.png`}
              alt={`Configuração de mão da letra ${letter}`}
              href={`/letters/${encodeURIComponent(letter)}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
