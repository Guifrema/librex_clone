import Link from "next/link"
import Image from "next/image"
import { infoGame } from "@/app/games/page"

type ButtonGameProps = {
  infos: infoGame
}

export default function ButtonGame({ infos }: ButtonGameProps) {
  return (
    <Link href={infos.href}>
      <div className="mb-2 mt-2 flex rounded bg-indigo-100 p-5">
        <div className="m-5 w-1/6">
          <Image
            className="m-auto"
            src={infos.srcImg}
            alt={infos.altImg}
            height={100}
            width={100}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="mb-auto mt-auto">
          <h1 className="mb-2 font-bold">{infos.title}</h1>
          <p>{infos.description}</p>
        </div>
      </div>
    </Link>
  )
}
