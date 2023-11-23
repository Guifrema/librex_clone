import { BgImg } from "@/components/BgImg";
import Link from "next/link";

type GameProps = {
    params: { id: string },
}

export default function Game({ params }: GameProps) {
    return <BgImg href="/img/background/bg_games.png">
        <div className=" min-h-screen">
            <div className="bg-blue-500 text-center text-xl">Pagina do jogo {params.id}</div>
            <Link href="/games">Voltar Games</Link>
        </div>
    </BgImg>

}