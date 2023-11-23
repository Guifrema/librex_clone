import { useState } from "react"
import Image from "next/image"
import { Menu } from "antd"
import type { MenuProps } from "antd"
import {
  BookFilled,
  DribbbleCircleFilled,
  UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons"
import Link from "next/link"

const items: MenuProps["items"] = [
  {
    label: <Link href={"/words"}>Dicionário</Link>,
    key: "words",
    icon: <BookFilled />,
  },
  {
    label: <Link href={"/games"}>Jogos</Link>,
    key: "games",
    icon: <DribbbleCircleFilled />,
  },
  {
    label: <Link href={"/aboutus"}>Sobre Nós</Link>,
    key: "about",
    icon: <InfoCircleOutlined />,
  },
  {
    label: "Entrar",
    key: "login",
    icon: <UserOutlined />,
  },
]

export const Nav = () => {
  const [current, setCurrent] = useState<string>("")

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key)
  }

  return (
    <div
      className="flex items-center justify-between"
      style={{ backgroundColor: "#2179b1" }}
    >
      <Link href={"/home"}>
        <Image
          className="logo w-30 h-12 bg-white"
          src="/favicon/apple-touch-icon.png"
          alt="Imagem"
          width={50}
          height={50}
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "5px",
          }}
        />
      </Link>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ backgroundColor: "#2179b1" }}
      />
    </div>
  )
}
