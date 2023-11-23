"use client"

import { ConfigProvider, Layout } from "antd"
import { Nav } from "@/components/Headers/Nav"
import { SubMenu } from "@/components/Headers/SubMenu"
import theme from "@/theme/themeConfig"

const { Header } = Layout

export const DictionaryHeader = () => {
  return (
    <ConfigProvider theme={theme}>
      <Header
        className="z-12 sticky top-0 w-full"
        style={{ background: "#2179b1", zIndex: "10000000"}}
      >
        <Nav />
      </Header>
      <SubMenu />
    </ConfigProvider>
  )
}
