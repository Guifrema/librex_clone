import { PropsWithChildren } from "react"

type InfoContainerProps = PropsWithChildren & {
  title: string
}

export const InfoContainer = ({ title, children }: InfoContainerProps) => {
  return (
    <div className="p-2">
      <h2 className="mb-2 font-semibold">{title}: </h2>
      {children}
    </div>
  )
}
