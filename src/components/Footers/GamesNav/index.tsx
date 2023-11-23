import Link from "next/link"

export const GamesNav = () => {
  return (
    <div className="flex h-32 items-center justify-center space-x-5 bg-indigo-100 text-black">
      <h2 className="text-bg ">
        Para testar seu conhecimento em LIBRAS, jogue nossos
      </h2>
      <Link href="/games">
        <button className="h-12 w-40 rounded-xl bg-amber-200 text-base font-medium shadow-md hover:bg-amber-300">
          <h2>JOGOS</h2>
        </button>
      </Link>
    </div>
  )
}
