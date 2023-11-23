import { BgImg } from "@/components/BgImg"
import ButtonGame from "@/components/ButtonGame"

export type infoGame = {
  href: string
  srcImg: string
  altImg: string
  title: string
  description: string
}

const games: infoGame[] = [
  {
    href: "/games/cruzadinha",
    srcImg: "/img/games/cruzadinha.png",
    altImg: "Imagem contendo retangulo e quadrados que formam uma cruzadinha",
    title: "Cruzadinha",
    description:
      "Teste seu conhecimento em LIBRAS por meio da união de palavras",
  },
  {
    href: "/games/ligaPalavras",
    srcImg: "/img/games/liga_palavras.png",
    altImg: "Imagem contendo elementos e palavras correspondentes",
    title: "Liga-Palavras",
    description: "Teste seu conhecimento em LIBRAS ligando palavras",
  },
  {
    href: "/games/ordenaFrase",
    srcImg: "/img/games/ordena_frase.png",
    altImg: "Imagem contendo vários retangulos com frases dentro",
    title: "Ordena-Frase",
    description: "Teste seu conhecimento em LIBRAS ordenado frases",
  },
  {
    href: "/games/descobrePalavras",
    srcImg: "/img/games/descobre_palavras.png",
    altImg: "Imagem contendo pecinhas de madeira com letras em preto escritas",
    title: "Descobre-Palavras",
    description: "Teste seu conhecimento em LIBRAS montando palavras",
  },
  {
    href: "/games/memoria",
    srcImg: "/img/games/memoria.png",
    altImg:
      "Imagem contendo um quadrado de madeira amarela com peças quadradas coloridas sobre ele",
    title: "Jogo da Memória",
    description:
      "Teste seu conhecimento sobre o alfabeto em LIBRAS através do conhecido Jogo da Memória!",
  },
]

export default function Games() {
  return (
    <BgImg href="/img/background/bg_games.png">
      <div className="pb-10 pl-20 pr-20 pt-10">
        <h2 className="p-5 text-1xl font-bold" style={{ color: '#808080' }}>Jogue jogos educativos em Libras:</h2>
        {games.map((game) => (
          <ButtonGame infos={game} />
        ))}
      </div>
    </BgImg>
  )
}
