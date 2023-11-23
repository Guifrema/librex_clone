import Link from "next/link"

type LetterProps = {
  params: { id: string }
}

export default function Hand({ params }: LetterProps) {
  return (
    <>
      <div className="bg-blue-500 text-center text-xl">
        Pagina da configuração de mão {params.id}
      </div>
    </>
  )
}
