import ImgOpen from "../ImgOpen"
import Link from "next/link"

type ButtonImgProps = {
  label?: string
  src: string
  alt: string
  href: string
}

export const ButtonImg = ({ label = "", src, alt, href }: ButtonImgProps) => {
  return (
    <div className="p-0.5 hover:rounded hover:bg-gray-200 hover:p-0 hover:font-bold">
      <ImgOpen image={src} alt={alt} width={"100%"} height={"100%"} />
      <Link href={href}>
        <h1 className="text-center text-lg">{label}</h1>
      </Link>
    </div>
  )
}
