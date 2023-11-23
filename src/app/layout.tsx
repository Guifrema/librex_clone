import { PropsWithChildren } from "react"
import { Urbanist } from "next/font/google"

import "./globals.css"

import StyledComponentsRegistry from "../lib/AntdRegistry"
import { ContactInfo } from "@/components/Footers/ContactInfo"

const font = Urbanist({ subsets: ["latin"] })

export const metadata = {
  title: "Librex",
  description: "Seu site educativo sobre a Língua Brasileira de Sinais.",
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="pt-br">
    <body className={font.className && "scroll-p-10"}>
      <StyledComponentsRegistry>
        {children}
        <ContactInfo />
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
