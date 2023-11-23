"use client"
import dynamic from "next/dynamic"

type PlayerProps = {
  url: string
  height: string;
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })

export function Player({ url, height }: PlayerProps) {
  return (
      <ReactPlayer
        url={url}
        loop
        volume={0}
        width="100%"
        height={height}
        style={{
          borderRadius: 10,
          overflow: "hidden",
        }}
      />
  )
}
