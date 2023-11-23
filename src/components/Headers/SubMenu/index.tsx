import React, { useState } from "react";
import Image from "next/image"
import { Menu, Modal } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import CategorySelect from "@/components/CategorySelect"
import { useRouter } from "next/router";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <Link href={"/words"} >Palavra</Link>,
    key: "word",
    icon: <SearchOutlined />,
  },
  {
    label: "Categoria",
    key: "category",
    icon: <SearchOutlined />,
  },
  {
    label: <Link href={"/hands"}>Configuração de mão</Link>,
    key: "hands",
    icon: <SearchOutlined />,
  },
]



export const SubMenu = () => {
  const [current, setCurrent] = useState<string>("word")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (target: boolean) => {
    setIsModalOpen(target);
  };


  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e)
    setCurrent(e.key)
    if (e.key == "category")
      toggleModal(true)
  }

  return (
    <div className="flex flex-col">
      <Modal
        title="Pesquisa por categoria"
        centered
        open={isModalOpen}
        onOk={() => toggleModal(false)}
        onCancel={() => toggleModal(false)}
        okButtonProps={{ style: { backgroundColor: '#283b51' } }}
      >
        <CategorySelect />
      </Modal>
      <div className="flex items-center justify-center bg-[#61c5f5] p-10">
        <Image
          src="/img/logos/logo-dark.png"
          alt="Logo Librex"
          height={400}
          width={400}
        />
        <p className="w-85 mb-6 ml-10 text-2xl text-slate-900">
          Seu site educativo sobre a<br /> Língua Brasileira de Sinais
        </p>
      </div>
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