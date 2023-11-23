import { handConfigs } from "@/util/consts"
import { ButtonImg } from "@/components/ButtonImg"
import { BgImg } from "@/components/BgImg"

export default function Hands() {
  return (
    <BgImg href="/img/background/dicsecundario.png">
      <div className="flex w-full flex-col justify-center">
        <h1 className="px-24 text-2xl font-semibold mt-5">CONFIGURAÇÕES DE MÃO</h1>
        <h2 className="w-max px-24">
          Escolha qual configuração de mão você deseja pesquisar
        </h2>
        <div className="flex flex-wrap justify-center p-3">
          {handConfigs.map((hc) => (
            <div key={hc} className="flex w-32 p-1.5">
              <div className="rounded-lg border-2 border-indigo-200 bg-white">
                <ButtonImg
                  label={hc}
                  src={`/img/hand-configurations/${hc}.png`}
                  alt={`Configuração de mão ${hc}`}
                  href={`/hands/${hc}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BgImg>
  )
}
